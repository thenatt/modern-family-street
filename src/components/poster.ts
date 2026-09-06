import { gsap } from 'gsap';
import type { Poster } from '../data/collectibles/types';
import { play } from '../audio/sfx';
import { prefersReducedMotion } from '../motion/reduced-motion';

function splitWords(text: string): string {
  return text.split(' ').map((w) => `<span class="poster__w">${Array.from(w).map((ch) => `<span class="poster__ch">${ch}</span>`).join('')}</span>`).join(' ');
}

export function posterHtml(p: Poster, i: number): string {
  return `
    <figure class="poster poster--${p.style}" data-id="${p.id}" data-reveal style="--i:${i}${p.span ? `;--span:${p.span}` : ''}" tabindex="0" role="group" aria-label="${p.text}, ${p.by}">
      <blockquote class="poster__text" aria-hidden="true">${splitWords(p.text)}</blockquote>
      <figcaption class="poster__cap"><span class="label">${p.by}</span><span class="poster__note">${p.note}</span></figcaption>
    </figure>`;
}

export function bindPosters(root: Element): void {
  root.querySelectorAll<HTMLElement>('.poster').forEach((el) => {
    const chars = el.querySelectorAll('.poster__ch');
    const on = () => {
      play('tick');
      if (prefersReducedMotion()) return;
      gsap.fromTo(chars, { y: 0 }, { y: -6, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.inOut', stagger: { each: 0.018, from: 'start' }, overwrite: true });
      const hi = getComputedStyle(el).getPropertyValue('--poster-hi').trim() || '#E0A458';
      gsap.to(chars, { color: hi, duration: 0.2, stagger: 0.012, overwrite: 'auto' });
    };
    const base = getComputedStyle(el).color;
    const off = () => { gsap.to(chars, { color: base, duration: 0.5, overwrite: 'auto', clearProps: 'color' }); };
    el.addEventListener('pointerenter', on);
    el.addEventListener('pointerleave', off);
    el.addEventListener('focus', on);
    el.addEventListener('blur', off);
  });
}
