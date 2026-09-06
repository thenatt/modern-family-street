import { gsap } from 'gsap';
import type { View } from '../router';
import { HOUSES } from '../data/houses';
import { QUESTIONS, CHARACTERS, score, type CharacterId } from '../data/quiz';
import { injectDefs } from '../art/defs';
import { play } from '../audio/sfx';
import { prefersReducedMotion } from '../motion/reduced-motion';
import { floodOut } from '../motion/transitions';
import { renderShareCard } from '../share/card';
import { track } from '../analytics';

const KEY = 'mf:quiz-result';
const LETTERS = ['A', 'B', 'C', 'D'];

function readLast(): CharacterId | null {
  try { const v = localStorage.getItem(KEY); return v && v in CHARACTERS ? (v as CharacterId) : null; } catch { return null; }
}
function saveLast(id: CharacterId): void { try { localStorage.setItem(KEY, id); } catch { /* ignore */ } }

export function quizView(): View {
  let picks: number[] = [];
  let step = -1; // -1 intro, 0..7 questions, 8 result
  let root: HTMLElement;
  let busy = false;

  const reduced = () => prefersReducedMotion();

  function render(): string {
    if (step === -1) {
      const last = readLast();
      return `
        <div class="qz__panel qz__intro" data-panel>
          <p class="label">Six questions</p>
          <h1 class="display qz__title">Which household are <em>you</em>?</h1>
          <p class="tagline qz__tagline">Answer honestly. The step will not fix itself.</p>
          ${last ? `<p class="qz__last">Last time you got <strong>${CHARACTERS[last].name}</strong>. Feeling different today?</p>` : ''}
          <div class="qz__actions"><button type="button" class="btn" data-action="start">Start</button><a class="btn btn--ghost" href="#/">Back to the street</a></div>
          <div class="qz__fan" aria-hidden="true">
            ${(['gloria', 'phil', 'cam'] as CharacterId[]).map((id, i) => `<div class="qz__fan-card" data-house="${CHARACTERS[id].house}" style="--i:${i}"><span class="pcard__foil"></span>${CHARACTERS[id].svg}<span class="label">${CHARACTERS[id].name.split(' ')[0]}</span></div>`).join('')}
          </div>
        </div>`;
    }
    if (step < QUESTIONS.length) {
      const q = QUESTIONS[step];
      return `
        <div class="qz__panel qz__q" data-panel>
          <div class="qz__progress" aria-label="Question ${step + 1} of ${QUESTIONS.length}">
            ${QUESTIONS.map((_, i) => `<span class="qz__dot${i < step ? ' is-done' : ''}${i === step ? ' is-now' : ''}"></span>`).join('')}
          </div>
          <p class="label">Question ${String(step + 1).padStart(2, '0')} / ${String(QUESTIONS.length).padStart(2, '0')}</p>
          <h2 class="display qz__question">${q.text}</h2>
          <div class="qz__answers" role="group" aria-label="Answers">
            ${q.answers.map((a, i) => `<button type="button" class="qz__answer" data-pick="${i}"><span class="qz__letter">${LETTERS[i]}</span><span class="qz__text">${a.text}</span></button>`).join('')}
          </div>
        </div>`;
    }
    const id = score(picks); const c = CHARACTERS[id]; const h = HOUSES[c.house];
    saveLast(id);
    return `
      <div class="qz__panel qz__result" data-panel>
        <div class="qz__card-wrap" data-house="${c.house}">
          <div class="qz__card">
            <span class="pcard__foil" aria-hidden="true"></span>
            <div class="qz__card-art">${c.svg}</div>
            <p class="label">You are</p>
            <h2 class="display qz__name">${c.name}</h2>
            <p class="label qz__role">${c.role}</p>
          </div>
          <div class="qz__confetti" aria-hidden="true">${Array.from({ length: 26 }, (_, i) => `<span style="--i:${i}"></span>`).join('')}</div>
        </div>
        <div class="qz__result-copy">
          <p class="label">Household</p>
          <h3 class="qz__house">${h.name}</h3>
          <p class="qz__why">${c.why}</p>
          <div class="qz__actions">
            <button type="button" class="btn" data-action="share">Share</button>
            <a class="btn btn--ghost" href="#${h.path}">Visit the house</a>
            <button type="button" class="btn btn--ghost" data-action="copy">Copy result</button>
            <button type="button" class="btn btn--ghost" data-action="retry">Take it again</button>
          </div>
          <p class="qz__copied label" aria-live="polite"></p>
          <div class="qz__share" hidden>
            <img class="qz__share-img" alt="Your shareable result card" />
            <a class="btn btn--ghost qz__share-dl" download>Download PNG</a>
          </div>
        </div>
      </div>`;
  }

  function swap(): void {
    const old = root.querySelector('[data-panel]') as HTMLElement | null;
    const mountNew = () => {
      root.innerHTML = render();
      bind();
      const panel = root.querySelector('[data-panel]') as HTMLElement;
      if (!reduced()) {
        gsap.fromTo(panel, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', onComplete: () => { busy = false; } });
        gsap.from(panel.querySelectorAll('.qz__answer, .qz__actions > *'), { y: 16, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out', delay: 0.15 });
      } else { busy = false; }
      if (step === QUESTIONS.length) celebrate(panel);
      (panel.querySelector('h1, h2') as HTMLElement | null)?.focus?.();
    };
    if (old && !reduced()) gsap.to(old, { opacity: 0, y: -18, duration: 0.3, ease: 'power2.in', onComplete: mountNew });
    else mountNew();
  }

  function animateFan(): void {
    const cards = root.querySelectorAll('.qz__fan-card');
    if (!cards.length || reduced()) return;
    gsap.from(cards, { y: 80, opacity: 0, rotation: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.3, clearProps: 'rotation' });
    cards.forEach((c, i) => gsap.to(c, { y: -8, duration: 2.4 + i * 0.3, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.3 + i * 0.2 }));
  }

  function celebrate(panel: HTMLElement): void {
    const id = score(picks);
    const c = CHARACTERS[id];
    track('quiz_complete', { character: c.name, character_id: id, house: c.house });
    play('fanfare');
    if (reduced()) return;
    const bits = panel.querySelectorAll('.qz__confetti span');
    gsap.fromTo(bits, { x: 0, y: 0, scale: 0, rotation: 0 }, {
      x: () => gsap.utils.random(-260, 260), y: () => gsap.utils.random(-320, 120), scale: () => gsap.utils.random(0.6, 1.4), rotation: () => gsap.utils.random(-540, 540),
      duration: 1.6, ease: 'power3.out', stagger: 0.012,
    });
    gsap.to(bits, { opacity: 0, duration: 0.6, delay: 1.3, stagger: 0.01 });
    gsap.from(panel.querySelector('.qz__card'), { rotationY: -70, y: 40, duration: 1, ease: 'back.out(1.4)' });
  }

  function bind(): void {
    root.querySelector('[data-action="start"]')?.addEventListener('click', () => {
      if (busy) return; busy = true; play('pop'); picks = []; step = 0;
      track('quiz_start', { retry: false });
      swap();
    });
    root.querySelector('[data-action="retry"]')?.addEventListener('click', () => {
      if (busy) return; busy = true; play('pop'); picks = []; step = 0;
      track('quiz_start', { retry: true });
      swap();
    });
    root.querySelectorAll<HTMLButtonElement>('.qz__answer').forEach((b) => {
      b.addEventListener('pointerenter', () => play('tick'));
      b.addEventListener('click', () => {
        if (busy) return; busy = true;
        play('pop');
        b.classList.add('is-picked');
        picks.push(Number(b.dataset.pick));
        step += 1;
        gsap.delayedCall(reduced() ? 0 : 0.22, swap);
      });
    });
    root.querySelector('[data-action="copy"]')?.addEventListener('click', async () => {
      const id = score(picks); const c = CHARACTERS[id];
      const text = `I took the Modern Family household quiz and I'm ${c.name} (${HOUSES[c.house].name}). ${location.href}`;
      const out = root.querySelector('.qz__copied') as HTMLElement;
      try { await navigator.clipboard.writeText(text); out.textContent = 'Copied to clipboard.'; play('chime'); }
      catch { out.textContent = text; }
    });
    root.querySelector('[data-action="share"]')?.addEventListener('click', async (e) => {
      const btn = e.currentTarget as HTMLButtonElement;
      const out = root.querySelector('.qz__copied') as HTMLElement;
      const id = score(picks); const c = CHARACTERS[id]; const h = HOUSES[c.house];
      btn.disabled = true; out.textContent = 'Making your card…';
      try {
        const blob = await renderShareCard(c, h);
        const file = new File([blob], `modern-family-${c.id}.png`, { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        const box = root.querySelector('.qz__share') as HTMLElement;
        (box.querySelector('.qz__share-img') as HTMLImageElement).src = url;
        (box.querySelector('.qz__share-dl') as HTMLAnchorElement).href = url;
        (box.querySelector('.qz__share-dl') as HTMLAnchorElement).download = file.name;
        box.hidden = false;
        if (!reduced()) gsap.from(box, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' });
        play('shimmer');
        const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
        if (nav.canShare?.({ files: [file] }) && nav.share) {
          try { await nav.share({ files: [file], title: `I'm ${c.name}`, text: `I took the Modern Family household quiz and I'm ${c.name}.` }); out.textContent = 'Shared.'; }
          catch { out.textContent = 'Your card is ready below.'; }
        } else {
          out.textContent = 'Your card is ready below. Save it or drop it anywhere.';
        }
      } catch {
        out.textContent = 'Could not render the card in this browser.';
      } finally { btn.disabled = false; }
    });
    root.querySelectorAll('.btn').forEach((b) => b.addEventListener('pointerenter', () => play('tick')));
  }

  return {
    house: 'quiz',
    title: 'Which household are you? · Modern Family Collectibles',
    mount(el) {
      injectDefs();
      el.innerHTML = `<section class="qz wrap" aria-label="Household quiz"><div class="qz__stage"></div></section>`;
      root = el.querySelector('.qz__stage') as HTMLElement;
      root.innerHTML = render();
      bind();
      floodOut(0.05);
      if (!reduced()) {
        gsap.from(root.querySelector('[data-panel]'), { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', delay: 0.1 });
        animateFan();
      }
    },
    unmount() { step = -1; picks = []; },
  };
}
