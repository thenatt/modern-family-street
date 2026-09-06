import { HOUSES, HOUSE_ORDER } from '../data/houses';
import { onRoute, currentRoute } from '../router';
import { isMuted, toggleMuted, onMuteChange, play } from '../audio/sfx';

const ICONS: Record<string, string> = {
  street: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19h18"/><path d="M4 19V11l3-3 3 3v8"/><path d="M10 19v-6l3-3 3 3v6"/><path d="M16 19v-8l2-2 2 2v8"/></svg>`,
  dunphy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><rect x="10" y="14" width="4" height="6"/><path d="M7.5 12.5h2M14.5 12.5h2"/></svg>`,
  pritchett: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h18v12H3z"/><path d="M3 8l2-3h14l2 3"/><path d="M8 12h8M8 16h8"/><path d="M12 12v8"/></svg>`,
  'tucker-pritchett': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 12 5l8 7"/><path d="M6 11v9h12v-9"/><path d="M4 20h16"/><circle cx="12" cy="14" r="1.6"/><path d="M8.5 20v-3M15.5 20v-3"/></svg>`,
  quiz: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><circle cx="12" cy="16.5" r=".6" fill="currentColor"/></svg>`,
  soundOn: `<svg class="icon-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a8 8 0 0 1 0 11"/></svg>`,
  soundOff: `<svg class="icon-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l4 6M21 9l-4 6"/></svg>`,
};

export function mountNav(root: HTMLElement): void {
  const links = [
    { href: '#/', label: 'The Street', icon: ICONS.street, path: '/' },
    ...HOUSE_ORDER.map((id) => ({ href: `#${HOUSES[id].path}`, label: HOUSES[id].family, icon: ICONS[id], path: HOUSES[id].path })),
    { href: '#/quiz', label: 'Which household are you?', icon: ICONS.quiz, path: '/quiz' },
  ];
  root.innerHTML = `
    <nav class="nav" aria-label="Neighbourhood">
      ${links.map((l) => `<a href="${l.href}" data-path="${l.path}" aria-label="${l.label}">${l.icon}<span class="nav__tip">${l.label}</span></a>`).join('')}
      <span class="nav__sep" aria-hidden="true"></span>
      <button type="button" class="nav__sound" data-muted="${isMuted()}" aria-pressed="${isMuted()}" aria-label="Toggle sound">${ICONS.soundOn}${ICONS.soundOff}<span class="nav__tip">${isMuted() ? 'Sound off' : 'Sound on'}</span></button>
    </nav>`;

  const nav = root.querySelector('.nav') as HTMLElement;
  const soundBtn = nav.querySelector('.nav__sound') as HTMLButtonElement;
  const setCurrent = (path: string) => {
    nav.querySelectorAll<HTMLAnchorElement>('a').forEach((a) => {
      if (a.dataset.path === path) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  };
  setCurrent(currentRoute() || '/');
  onRoute(setCurrent);

  nav.querySelectorAll('a').forEach((a) => a.addEventListener('pointerenter', () => play('tick')));
  soundBtn.addEventListener('click', () => {
    const m = toggleMuted();
    if (!m) play('pop');
  });
  onMuteChange((m) => {
    soundBtn.dataset.muted = String(m);
    soundBtn.setAttribute('aria-pressed', String(m));
    (soundBtn.querySelector('.nav__tip') as HTMLElement).textContent = m ? 'Sound off' : 'Sound on';
  });
}
