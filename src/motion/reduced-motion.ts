const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
export const prefersReducedMotion = (): boolean => mq.matches;
export const onReducedMotionChange = (cb: (reduced: boolean) => void) => {
  const handler = () => cb(mq.matches);
  mq.addEventListener('change', handler);
  return () => mq.removeEventListener('change', handler);
};
export const isTouch = (): boolean => window.matchMedia('(hover: none), (pointer: coarse)').matches;
