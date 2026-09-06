import { gsap } from 'gsap';
import { setMuted, unlock, play } from '../audio/sfx';
import { prefersReducedMotion } from '../motion/reduced-motion';

const KEY = 'mf:gate-seen';

/** One-time doorbell gate: choose sound on/off before entering the street. Resolves when dismissed. */
export function showSoundGate(overlay: HTMLElement): Promise<void> {
  let seen = false;
  try { seen = sessionStorage.getItem(KEY) === '1'; } catch { /* ignore */ }
  if (seen) return Promise.resolve();

  return new Promise((resolve) => {
    overlay.innerHTML = `
      <div class="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
        <div class="gate__card">
          <div class="gate__bell" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs><radialGradient id="gbell" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#F6D9A0"/><stop offset="1" stop-color="#B8782E"/></radialGradient></defs>
              <circle cx="60" cy="60" r="46" fill="#2A3450"/>
              <rect x="36" y="22" width="48" height="76" rx="10" fill="#E0A458"/>
              <rect x="42" y="28" width="36" height="64" rx="7" fill="#1B2233" opacity=".35"/>
              <circle class="gate__button" cx="60" cy="60" r="12" fill="url(#gbell)"/>
              <circle class="gate__ring" cx="60" cy="60" r="12" fill="none" stroke="#F6D9A0" stroke-width="2" opacity="0"/>
            </svg>
          </div>
          <p class="label">Before you come in</p>
          <h2 id="gate-title" class="display gate__title">Ring the <em>doorbell?</em></h2>
          <p class="gate__body">This street has sound: page flips, honks, a bark or two. Nothing loud. You can change your mind from the bottom bar any time.</p>
          <div class="gate__actions">
            <button type="button" class="btn" data-choice="sound">Ring it, with sound</button>
            <button type="button" class="btn btn--ghost" data-choice="quiet">Enter quietly</button>
          </div>
        </div>
      </div>`;

    const card = overlay.querySelector('.gate__card') as HTMLElement;
    const ring = overlay.querySelector('.gate__ring') as SVGCircleElement;
    if (!prefersReducedMotion()) {
      gsap.from(card, { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 });
    }

    const finish = (withSound: boolean) => {
      try { sessionStorage.setItem(KEY, '1'); } catch { /* ignore */ }
      unlock();
      setMuted(!withSound);
      if (withSound) {
        play('doorbell');
        gsap.fromTo(ring, { attr: { r: 12 }, opacity: 0.9 }, { attr: { r: 40 }, opacity: 0, duration: 0.9, ease: 'power2.out' });
      }
      gsap.to(overlay.firstElementChild, {
        opacity: 0, duration: prefersReducedMotion() ? 0.01 : 0.6, delay: withSound ? 0.45 : 0, ease: 'power2.inOut',
        onComplete: () => { overlay.replaceChildren(); resolve(); },
      });
    };
    overlay.querySelectorAll<HTMLButtonElement>('[data-choice]').forEach((b) => {
      b.addEventListener('click', () => finish(b.dataset.choice === 'sound'));
    });
    (overlay.querySelector('[data-choice="sound"]') as HTMLButtonElement).focus();
  });
}
