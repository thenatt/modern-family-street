import { play } from '../audio/sfx';

/** Persistent "made by" credit, mounted once outside the router. */
export function mountCredit(root: HTMLElement): void {
  root.innerHTML = `
    <a class="credit" href="https://sudarshansrinivas.com" target="_blank" rel="noopener noreferrer" aria-label="Made with love by Sudarshan (opens sudarshansrinivas.com)">
      <span>Made with</span>
      <svg class="credit__heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 4.5 6.4 4.1c2.1-.2 3.9.9 5.6 2.9 1.7-2 3.5-3.1 5.6-2.9 3.7.4 5.5 4.3 4 7.7C19.5 16.4 12 21 12 21z"/></svg>
      <span>by <strong>Sudarshan</strong></span>
    </a>`;
  root.querySelector('.credit')!.addEventListener('pointerenter', () => play('pop'));
}
