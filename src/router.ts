import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface View {
  /** data-house value for palette switching */
  house: string;
  title: string;
  mount(el: HTMLElement): void | Promise<void>;
  unmount(): void;
}

export type ViewFactory = () => View;
const routes = new Map<string, ViewFactory>();
let current: View | null = null;
let currentPath = '';
const listeners = new Set<(path: string) => void>();

export function route(path: string, factory: ViewFactory): void { routes.set(path, factory); }
export function onRoute(cb: (path: string) => void): () => void { listeners.add(cb); return () => listeners.delete(cb); }
export function currentRoute(): string { return currentPath; }

export function parseHash(): string {
  const h = location.hash.replace(/^#/, '') || '/';
  return h.startsWith('/') ? h : `/${h}`;
}

export function navigate(path: string): void {
  if (parseHash() === path) return;
  location.hash = path;
}

async function render(): Promise<void> {
  const path = parseHash();
  const factory = routes.get(path) ?? routes.get('/')!;
  const main = document.getElementById('main')!;
  if (current) {
    current.unmount();
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.globalTimeline.getChildren(true, true, true).forEach((t) => t.kill());
    main.replaceChildren();
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
  current = factory();
  currentPath = path;
  document.documentElement.dataset.house = current.house;
  document.title = current.title;
  await current.mount(main);
  ScrollTrigger.refresh();
  listeners.forEach((l) => l(path));
}

export function startRouter(): void {
  window.addEventListener('hashchange', () => { void render(); });
  void render();
}
