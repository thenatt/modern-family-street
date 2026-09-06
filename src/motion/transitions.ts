import { gsap } from 'gsap';
import type { House } from '../data/houses';
import { navigate } from '../router';
import { play } from '../audio/sfx';
import { prefersReducedMotion } from './reduced-motion';

const overlay = () => document.getElementById('overlay')!;

/** Colour flood that covers the screen from a point; the next view fades it out with floodOut(). */
function floodIn(color: string, x: number, y: number, duration: number): gsap.core.Tween {
  const el = document.createElement('div');
  el.className = 'flood';
  el.style.background = color;
  el.style.clipPath = `circle(0px at ${x}px ${y}px)`;
  overlay().append(el);
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + 40;
  return gsap.to(el, { clipPath: `circle(${r}px at ${x}px ${y}px)`, duration, ease: 'power2.in' });
}

export function hasFlood(): boolean { return !!overlay().querySelector('.flood'); }

export function floodOut(delay = 0.15): void {
  const el = overlay().querySelector('.flood');
  if (!el) return;
  gsap.to(el, { opacity: 0, duration: prefersReducedMotion() ? 0.01 : 0.7, delay, ease: 'power2.inOut', onComplete: () => el.remove() });
}

export interface EnterOpts { siblings: Element[]; fade: Element[]; }

/** Zoom toward the front door, swing it open, flood the interior colour, then route. */
export function enterHouse(houseEl: HTMLElement, house: House, opts: EnterOpts): Promise<void> {
  return new Promise((resolve) => {
    const done = () => { navigate(house.path); resolve(); };
    if (prefersReducedMotion()) {
      const t = floodIn(house.flood, innerWidth / 2, innerHeight / 2, 0.01);
      t.eventCallback('onComplete', done);
      return;
    }
    const door = houseEl.querySelector('[data-part="door"]') as SVGGElement | null;
    const doorway = houseEl.querySelector('[data-part="doorway"]') as SVGElement | null;
    const rect = (door ?? houseEl).getBoundingClientRect();
    const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2;
    const scale = Math.min(innerWidth / rect.width, innerHeight / rect.height) * 0.55;
    const dx = innerWidth / 2 - cx; const dy = innerHeight / 2 - cy;

    play('door');
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    tl.to(opts.fade, { opacity: 0, y: -20, duration: 0.5, stagger: 0.03 }, 0)
      .to(opts.siblings, { opacity: 0, y: 60, scale: 0.92, duration: 0.6, stagger: 0.05 }, 0)
      .set(houseEl, { zIndex: 5, transformOrigin: `${cx - houseEl.getBoundingClientRect().left}px ${cy - houseEl.getBoundingClientRect().top}px` }, 0)
      .to(houseEl, { x: dx, y: dy, scale, duration: 1.15, ease: 'power3.inOut' }, 0.1);
    if (doorway) tl.to(doorway, { opacity: 1, duration: 0.4 }, 0.55);
    if (door) tl.to(door, { scaleX: 0.08, skewY: 6, duration: 0.6, ease: 'power2.inOut' }, 0.6);
    tl.add(() => { floodIn(house.flood, innerWidth / 2, innerHeight / 2, 0.55).eventCallback('onComplete', done); }, 0.85);
  });
}

/** Flood from a point (e.g. the "next door" button) then route. Used inside houses. */
export function floodTo(path: string, color: string, x = innerWidth / 2, y = innerHeight / 2): void {
  play('door');
  floodIn(color, x, y, prefersReducedMotion() ? 0.01 : 0.6).eventCallback('onComplete', () => navigate(path));
}
