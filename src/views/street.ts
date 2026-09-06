import { gsap } from 'gsap';
import type { View } from '../router';
import { HOUSES, HOUSE_ORDER, type HouseId } from '../data/houses';
import { HOUSE_ART } from '../art/houses';
import { injectDefs } from '../art/defs';
import { skySvg, cloudsSvg, hillsSvg, streetSvg, lampsSvg, foregroundSvg, firefliesHtml } from '../art/street/scene';
import { pointerParallax } from '../motion/parallax';
import { enterHouse, floodOut } from '../motion/transitions';
import { prefersReducedMotion, isTouch } from '../motion/reduced-motion';
import { play, type VoiceName } from '../audio/sfx';

/** Each household answers the door with its own sound. */
const HOVER_SFX: Record<HouseId, VoiceName> = {
  dunphy: 'chime',
  pritchett: 'marimba',
  'tucker-pritchett': 'glissando',
};
const GLOW: Record<HouseId, string> = { dunphy: '#F6D9A0', pritchett: '#F3C97A', 'tucker-pritchett': '#FFE0DC' };

export function streetView(): View {
  const cleanups: Array<() => void> = [];
  let entering = false;
  let hovered: HTMLButtonElement | null = null;

  return {
    house: 'street',
    title: 'The Street · A Modern Family Collectible Zone',
    mount(el) {
      injectDefs();
      el.innerHTML = `
        <section class="street" aria-labelledby="street-title">
          <div class="street__stage">
            <div class="scene__layer scene__layer--sky" data-depth="4">${skySvg}</div>
            <div class="scene__layer scene__layer--clouds" data-depth="10">${cloudsSvg}</div>

            <header class="street__copy" data-fade data-depth="6">
              <p class="label">A collectible zone for fans of</p>
              <h1 id="street-title" class="display street__title">Modern <em>Family</em></h1>
              <p class="street__cta tagline">Pick a door to enter the house.</p>
            </header>

            <div class="scene__layer scene__layer--hills" data-depth="16">${hillsSvg}</div>
            <div class="scene__layer scene__layer--street" data-depth="22">${streetSvg}</div>
            <div class="scene__layer scene__layer--lamps" data-depth="26">${lampsSvg}</div>
            <div class="scene__fireflies" aria-hidden="true">${firefliesHtml}</div>

            <div class="street__houses" data-depth="30" role="list">
              ${HOUSE_ORDER.map((id) => {
                const h = HOUSES[id];
                return `
                <div class="lot" role="listitem">
                  <span class="house__key" aria-hidden="true"><span class="house__key-cap">Enter <kbd>↵</kbd></span></span>
                  <button type="button" class="house" data-house-id="${id}" aria-label="Enter ${h.name}">
                    ${HOUSE_ART[id]}
                  </button>
                  <div class="house__label" aria-hidden="true">
                    <span class="label">${h.family}</span>
                    <span class="tagline">${h.tagline}</span>
                  </div>
                </div>`;
              }).join('')}
            </div>

            <div class="scene__layer scene__layer--fg" data-depth="44">${foregroundSvg}</div>
          </div>
        </section>`;

      floodOut(0.1);

      const layers = Array.from(el.querySelectorAll<HTMLElement>('[data-depth]')).map((n) => ({ el: n, depth: Number(n.dataset.depth) }));
      cleanups.push(pointerParallax(layers));

      if (!prefersReducedMotion()) {
        el.querySelectorAll('.cloud').forEach((c, i) => {
          gsap.to(c, { x: 40 + i * 18, duration: 22 + i * 6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        });
        el.querySelectorAll('.lamp__glow').forEach((g, i) => {
          gsap.to(g, { attr: { r: 56 }, opacity: 0.2, duration: 2.6 + i * 0.4, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        });
        gsap.from(el.querySelectorAll('.street__copy > *'), { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 });
        gsap.from(el.querySelectorAll('.lot'), { y: 80, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.3 });
      }

      el.querySelectorAll<HTMLButtonElement>('.house').forEach((btn) => {
        const id = btn.dataset.houseId as HouseId;
        const house = HOUSES[id];
        const lot = btn.parentElement as HTMLElement;
        const wins = btn.querySelectorAll('.win');
        const glow = btn.querySelector('[data-part="glow"]');
        const smoke = btn.querySelectorAll('[data-part="smoke"] circle');
        const label = lot.querySelector('.house__label') as HTMLElement;
        const key = lot.querySelector('.house__key') as HTMLElement;

        // Hidden-until-hover only when the houses sit in a row; stacked (mobile) keeps them visible.
        const stacked = window.matchMedia('(max-width: 899px)').matches;
        if (!stacked && !isTouch()) { gsap.set(label, { opacity: 0, y: 8 }); gsap.set(key, { opacity: 0, y: 14, scale: 0.9 }); }
        const hoverTl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });
        hoverTl.to(wins, { fill: GLOW[id], duration: 0.45, stagger: { each: 0.05, from: 'random' } }, 0)
          .to(glow, { opacity: 1, duration: 0.6 }, 0)
          .to(btn, { y: -10, scale: 1.03, duration: 0.6, ease: 'power3.out' }, 0)
          .to(label, { opacity: 1, y: 0, duration: 0.45 }, 0.05)
          .to(key, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(2.2)' }, 0.08);
        let smokeTl: gsap.core.Tween | null = null;

        const on = () => {
          if (entering) return;
          hoverTl.play();
          play(HOVER_SFX[id]);
          if (!prefersReducedMotion() && smoke.length) {
            smokeTl?.kill();
            gsap.set(smoke, { opacity: 0, y: 0, scale: 0.6 });
            smokeTl = gsap.to(smoke, { opacity: 0.7, y: -30, scale: 1.2, duration: 2.2, stagger: 0.4, repeat: -1, ease: 'power1.out', transformOrigin: '50% 50%' });
          }
        };
        const off = () => {
          if (entering) return;
          hoverTl.reverse();
          smokeTl?.kill(); smokeTl = null;
          if (smoke.length) gsap.to(smoke, { opacity: 0, duration: 0.4 });
        };
        // Hover lives on the whole lot so moving onto the keycap keeps the house lit.
        lot.addEventListener('pointerenter', () => { hovered = btn; on(); });
        lot.addEventListener('pointerleave', () => { if (hovered === btn) hovered = null; off(); });
        btn.addEventListener('focus', () => { hovered = btn; on(); });
        btn.addEventListener('blur', () => { if (hovered === btn) hovered = null; off(); });
        key.addEventListener('click', () => btn.click());
        btn.addEventListener('click', () => {
          if (entering) return;
          entering = true;
          hoverTl.play();
          gsap.to(key.firstElementChild, { y: 4, duration: 0.08, yoyo: true, repeat: 1 });
          const siblings = Array.from(el.querySelectorAll('.lot')).filter((l) => l !== lot);
          const fade = [...el.querySelectorAll('[data-fade]'), label, key, ...el.querySelectorAll('.scene__layer--fg, .scene__fireflies')];
          void enterHouse(btn, house, { siblings, fade });
        });
      });

      // Physical Enter key enters the highlighted house.
      const onKey = (e: KeyboardEvent) => {
        if (e.key !== 'Enter' || !hovered || entering) return;
        if (document.activeElement === hovered) return; // native button activation handles it
        e.preventDefault();
        hovered.click();
      };
      window.addEventListener('keydown', onKey);
      cleanups.push(() => window.removeEventListener('keydown', onKey));
    },
    unmount() { cleanups.forEach((c) => c()); cleanups.length = 0; hovered = null; },
  };
}
