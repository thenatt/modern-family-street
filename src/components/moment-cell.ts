import { gsap } from 'gsap';
import type { Moment } from '../data/collectibles/types';
import { isTouch, prefersReducedMotion } from '../motion/reduced-motion';
import { play } from '../audio/sfx';

export function momentHtml(m: Moment, i: number): string {
  return `
    <figure class="moment" data-id="${m.id}" data-reveal style="--i:${i}" tabindex="0">
      <div class="moment__frame" aria-hidden="true">
        <span class="moment__sprocket moment__sprocket--t"></span>
        ${m.svg}
        <span class="moment__sprocket moment__sprocket--b"></span>
      </div>
      <figcaption class="moment__cap">
        <p class="label">${m.episode}</p>
        <h3 class="moment__title">${m.title}</h3>
        <p class="moment__caption">${m.caption}</p>
      </figcaption>
    </figure>`;
}

export function bindMoments(root: Element): void {
  if (isTouch() || prefersReducedMotion()) return;
  root.querySelectorAll<HTMLElement>('.moment').forEach((el) => {
    const layers = Array.from(el.querySelectorAll<SVGElement>('[data-layer]'));
    const setters = layers.map((l) => ({ d: Number(l.dataset.layer), x: gsap.quickTo(l, 'x', { duration: 0.6, ease: 'power3.out' }), y: gsap.quickTo(l, 'y', { duration: 0.6, ease: 'power3.out' }) }));
    const frame = el.querySelector('.moment__frame') as HTMLElement;
    el.addEventListener('pointerenter', () => play('tick'));
    el.addEventListener('pointermove', (e) => {
      const r = frame.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1; const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      setters.forEach((s) => { s.x(-nx * s.d * 6); s.y(-ny * s.d * 4); });
    });
    el.addEventListener('pointerleave', () => setters.forEach((s) => { s.x(0); s.y(0); }));
  });
}
