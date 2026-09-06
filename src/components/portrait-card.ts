import { gsap } from 'gsap';
import type { Portrait } from '../data/collectibles/types';
import { isTouch, prefersReducedMotion } from '../motion/reduced-motion';
import { play } from '../audio/sfx';

export function portraitHtml(p: Portrait, i: number): string {
  return `
    <div class="pcard" data-id="${p.id}" data-reveal style="--i:${i}">
      <button type="button" class="pcard__inner" aria-label="${p.name}, ${p.role}. Flip for stats" aria-pressed="false">
        <span class="pcard__face pcard__front">
          <span class="pcard__foil" aria-hidden="true"></span>
          <span class="pcard__flip" aria-hidden="true">Flip <span class="pcard__flip-icon">↻</span></span>
          <span class="pcard__art">${p.svg}</span>
          <span class="pcard__name">${p.name}</span>
          <span class="label pcard__role">${p.role}</span>
        </span>
        <span class="pcard__face pcard__back">
          <span class="pcard__flip pcard__flip--back" aria-hidden="true">Back <span class="pcard__flip-icon">↺</span></span>
          <span class="label">Stat</span>
          <span class="pcard__stat">${p.stat}</span>
          <span class="label">On record</span>
          <span class="pcard__quote tagline">${p.quote}</span>
        </span>
      </button>
    </div>`;
}

export function bindPortraits(root: Element): void {
  const touch = isTouch(); const reduced = prefersReducedMotion();
  root.querySelectorAll<HTMLElement>('.pcard').forEach((card) => {
    const inner = card.querySelector('.pcard__inner') as HTMLButtonElement;
    const foil = card.querySelector('.pcard__foil') as HTMLElement;
    let flipped = false;
    const rx = gsap.quickTo(inner, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    const ry = gsap.quickTo(inner, 'rotationY', { duration: 0.5, ease: 'power3.out' });
    if (!touch && !reduced) {
      card.addEventListener('pointerenter', () => play('shimmer'));
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1; const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
        rx(-ny * 10); ry(nx * 12 + (flipped ? 180 : 0));
        foil.style.setProperty('--mx', `${(nx + 1) * 50}%`); foil.style.setProperty('--my', `${(ny + 1) * 50}%`);
      });
      card.addEventListener('pointerleave', () => { rx(0); ry(flipped ? 180 : 0); });
    }
    inner.addEventListener('click', () => {
      flipped = !flipped;
      inner.setAttribute('aria-pressed', String(flipped));
      play('pageFlip');
      gsap.to(inner, { rotationY: flipped ? 180 : 0, rotationX: 0, duration: reduced ? 0.01 : 0.7, ease: 'power3.inOut' });
    });
  });
}
