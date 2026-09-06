import { gsap } from 'gsap';
import type { View } from '../router';
import { HOUSES, type House } from '../data/houses';
import { CONTENT } from '../data/collectibles';
import { HOUSE_ART } from '../art/houses';
import { injectDefs } from '../art/defs';
import { chapterHeader } from '../components/chapter-header';
import { collectibleCardHtml, bindCollectibleCards } from '../components/collectible-card';
import { posterHtml, bindPosters } from '../components/poster';
import { momentHtml, bindMoments } from '../components/moment-cell';
import { portraitHtml, bindPortraits } from '../components/portrait-card';
import { revealOnScroll, scrollParallax } from '../motion/parallax';
import { floodOut, floodTo } from '../motion/transitions';
import { prefersReducedMotion } from '../motion/reduced-motion';
import { play } from '../audio/sfx';

const TEXTURE: Record<House['id'], string> = {
  dunphy: 'p-linen',
  pritchett: 'p-terrazzo',
  'tucker-pritchett': 'p-damask',
};

function splitTitle(name: string): string {
  const words = name.replace(/^The /, '').split(' ');
  const last = words.pop();
  return `${words.join(' ')} <em>${last}</em>`;
}

export function houseView(h: House): View {
  const content = CONTENT[h.id];
  const next = HOUSES[h.next];
  const cleanups: Array<() => void> = [];

  return {
    house: h.id,
    title: `${h.name} · Modern Family Collectibles`,
    mount(el) {
      injectDefs();
      el.innerHTML = `
        <div class="hv" data-house-id="${h.id}">
          <div class="hv__texture" aria-hidden="true">
            <svg class="hv__pattern" width="100%" height="100%"><rect width="100%" height="100%" fill="url(#${TEXTURE[h.id]})"/></svg>
            <span class="hv__blob hv__blob--a"></span><span class="hv__blob hv__blob--b"></span>
          </div>

          <header class="hv__hero wrap">
            <a class="hv__back" href="#/"><span aria-hidden="true">←</span> Back to the street</a>
            <div class="hv__hero-grid">
              <div class="hv__hero-copy">
                <p class="label">${h.address}</p>
                <h1 class="display hv__title">${splitTitle(h.name)}</h1>
                <p class="tagline hv__tagline">${h.tagline}</p>
                <p class="hv__intro">${h.intro}</p>
                <p class="label hv__members">${h.members.join(' · ')}</p>
              </div>
              <div class="hv__hero-art" data-speed="1.12">${HOUSE_ART[h.id]}</div>
            </div>
          </header>

          <section class="hv__section wrap" aria-labelledby="ch-shelf">
            ${chapterHeader('01', 'The shelf', content.chapters.shelf)}
            <div class="shelf">${content.objects.map(collectibleCardHtml).join('')}</div>
          </section>

          <section class="hv__section wrap" aria-labelledby="ch-posters">
            ${chapterHeader('02', 'Said out loud', content.chapters.posters)}
            <div class="posters">${content.posters.map(posterHtml).join('')}</div>
          </section>

          <section class="hv__section wrap" aria-labelledby="ch-moments">
            ${chapterHeader('03', 'Scenes', content.chapters.moments)}
            <div class="moments">${content.moments.map(momentHtml).join('')}</div>
          </section>

          <section class="hv__section wrap" aria-labelledby="ch-portraits">
            ${chapterHeader('04', 'Trading cards', content.chapters.portraits)}
            <div class="portraits" style="--n:${content.portraits.length}">${content.portraits.map(portraitHtml).join('')}</div>
          </section>

          <footer class="hv__door wrap" data-reveal>
            <div class="hv__doormat">
              <p class="label">Next door</p>
              <button type="button" class="hv__next display">${next.family}<em>→</em></button>
              <p class="tagline">${next.tagline}</p>
            </div>
            <a class="btn btn--light hv__quiz" href="#/quiz">Which household are you?</a>
          </footer>
        </div>`;

      // Light up the hero house
      const heroArt = el.querySelector('.hv__hero-art') as HTMLElement;
      const glowColor = h.id === 'dunphy' ? '#F6D9A0' : h.id === 'pritchett' ? '#F3C97A' : '#FFE0DC';
      gsap.set(heroArt.querySelectorAll('.win'), { fill: glowColor });
      gsap.set(heroArt.querySelector('[data-part="glow"]'), { opacity: 1 });
      const smoke = heroArt.querySelectorAll('[data-part="smoke"] circle');
      if (smoke.length && !prefersReducedMotion()) {
        gsap.set(smoke, { opacity: 0, scale: 0.6, transformOrigin: '50% 50%' });
        gsap.to(smoke, { opacity: 0.7, y: -30, scale: 1.2, duration: 2.6, stagger: 0.5, repeat: -1, ease: 'power1.out' });
      }

      floodOut(0.05);
      if (!prefersReducedMotion()) {
        gsap.from(el.querySelectorAll('.hv__hero-copy > *'), { y: 26, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out', delay: 0.25 });
        gsap.from(heroArt, { y: 60, opacity: 0, scale: 0.94, duration: 1.2, ease: 'power3.out', delay: 0.2 });
        gsap.to(el.querySelectorAll('.hv__blob'), { x: 'random(-60, 60)', y: 'random(-60, 60)', duration: 14, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 2 });
      }

      const hero = el.querySelector('.hv__hero') as HTMLElement;
      cleanups.push(scrollParallax(hero, [{ el: heroArt, speed: 1.18 }, { el: el.querySelector('.hv__hero-copy')!, speed: 0.92 }]));
      cleanups.push(revealOnScroll(Array.from(el.querySelectorAll('[data-reveal]'))));

      bindCollectibleCards(el, content.objects);
      bindPosters(el);
      bindMoments(el);
      bindPortraits(el);

      const nextBtn = el.querySelector('.hv__next') as HTMLButtonElement;
      nextBtn.addEventListener('pointerenter', () => play('tick'));
      nextBtn.addEventListener('click', (e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        floodTo(next.path, next.flood, r.left + r.width / 2, r.top + r.height / 2);
      });
      el.querySelector('.hv__back')!.addEventListener('pointerenter', () => play('tick'));
    },
    unmount() { cleanups.forEach((c) => c()); cleanups.length = 0; },
  };
}
