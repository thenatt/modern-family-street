import { gsap } from 'gsap';
import { prefersReducedMotion } from './reduced-motion';

type Factory = (root: Element, tl: gsap.core.Timeline) => void;
const q = (root: Element, part: string) => Array.from(root.querySelectorAll(`[data-part="${part}"]`));

const registry: Record<string, Factory> = {
  bob: (root, tl) => {
    tl.to(root.querySelector('svg'), { y: -8, rotation: -2, duration: 0.5, ease: 'power2.out' });
  },
};

export function registerHovers(map: Record<string, Factory>): void { Object.assign(registry, map); }

/** Build a paused hover timeline for a collectible's SVG root. */
export function buildHover(name: string, root: Element): gsap.core.Timeline {
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out', transformOrigin: '50% 50%' } });
  if (prefersReducedMotion()) {
    tl.to(root, { opacity: 0.85, duration: 0.2 });
    return tl;
  }
  (registry[name] ?? registry.bob)(root, tl);
  return tl;
}

export { q as parts };
