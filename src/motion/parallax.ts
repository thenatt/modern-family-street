import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isTouch, prefersReducedMotion } from './reduced-motion';

export interface PointerLayer { el: Element; depth: number; }

/** Pointer-driven parallax: depth is in px of travel at the viewport edge. */
export function pointerParallax(layers: PointerLayer[]): () => void {
  if (isTouch() || prefersReducedMotion()) return () => {};
  const setters = layers.map((l) => ({
    x: gsap.quickTo(l.el, 'x', { duration: 0.9, ease: 'power3.out' }),
    y: gsap.quickTo(l.el, 'y', { duration: 0.9, ease: 'power3.out' }),
    depth: l.depth,
  }));
  const onMove = (e: PointerEvent) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    setters.forEach((s) => { s.x(-nx * s.depth); s.y(-ny * s.depth * 0.5); });
  };
  const onLeave = () => setters.forEach((s) => { s.x(0); s.y(0); });
  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerleave', onLeave);
  return () => { window.removeEventListener('pointermove', onMove); document.removeEventListener('pointerleave', onLeave); };
}

export interface ScrollLayer { el: Element; speed: number; }

/** Scroll-driven parallax over a trigger element; speed 1 = static, <1 lags, >1 leads. */
export function scrollParallax(trigger: Element, layers: ScrollLayer[]): () => void {
  if (prefersReducedMotion()) return () => {};
  const triggers = layers.map((l) => {
    const tween = gsap.fromTo(l.el, { y: () => (l.speed - 1) * -160 }, {
      y: () => (l.speed - 1) * 160,
      ease: 'none',
      scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: 0.4, invalidateOnRefresh: true },
    });
    return tween.scrollTrigger as ScrollTrigger;
  });
  return () => triggers.forEach((t) => t.kill());
}

/** Reveal-on-scroll for a set of elements with a stagger. */
export function revealOnScroll(els: Element[], opts: { y?: number; stagger?: number; start?: string } = {}): () => void {
  if (!els.length) return () => {};
  if (prefersReducedMotion()) { gsap.set(els, { opacity: 1, y: 0 }); return () => {}; }
  const st = ScrollTrigger.batch(els, {
    start: opts.start ?? 'top 88%',
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: opts.stagger ?? 0.08, overwrite: true }),
  });
  gsap.set(els, { opacity: 0, y: opts.y ?? 40 });
  return () => st.forEach((t) => t.kill());
}
