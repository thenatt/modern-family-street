import { gsap } from 'gsap';
import type { Collectible } from '../data/collectibles/types';
import { buildHover } from '../motion/hovers';
import { play } from '../audio/sfx';
import { isTouch } from '../motion/reduced-motion';

export function collectibleCardHtml(c: Collectible, i: number): string {
  return `
    <article class="card" data-id="${c.id}" data-reveal style="--i:${i}">
      <button type="button" class="card__art" aria-label="${c.title}. ${c.tagline}" aria-expanded="false" aria-controls="drawer-${c.id}">
        <span class="card__halo" aria-hidden="true"></span>
        <span class="card__svg">${c.svg}</span>
      </button>
      <div class="card__meta">
        <p class="label">${c.label}</p>
        <h3 class="card__title tagline">${c.title}</h3>
      </div>
      <div class="card__drawer" id="drawer-${c.id}" hidden><p>${c.blurb}</p></div>
    </article>`;
}

export function bindCollectibleCards(root: Element, items: Collectible[]): void {
  const byId = new Map(items.map((c) => [c.id, c]));
  root.querySelectorAll<HTMLElement>('.card').forEach((card) => {
    const c = byId.get(card.dataset.id!)!;
    const btn = card.querySelector('.card__art') as HTMLButtonElement;
    const svgRoot = card.querySelector('.card__svg') as HTMLElement;
    const drawer = card.querySelector('.card__drawer') as HTMLElement;
    const tl = buildHover(c.hover, svgRoot);
    const touch = isTouch();

    const on = () => { tl.play(); play(c.sfx); };
    const off = () => { tl.reverse(); };
    if (!touch) {
      btn.addEventListener('pointerenter', on);
      btn.addEventListener('pointerleave', off);
    }
    btn.addEventListener('focus', on);
    btn.addEventListener('blur', off);

    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (touch) { tl.restart(); play(c.sfx); }
      else { play('pop'); }
      if (!open) {
        drawer.hidden = false;
        gsap.fromTo(drawer, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.45, ease: 'power3.out', clearProps: 'height' });
        card.classList.add('is-open');
      } else {
        gsap.to(drawer, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => { drawer.hidden = true; gsap.set(drawer, { clearProps: 'all' }); } });
        card.classList.remove('is-open');
      }
    });
  });
}
