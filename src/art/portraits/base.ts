export interface PortraitSpec {
  bg: string;
  skin: string;
  hairBack?: string;
  hairFront: string;
  top: string;
  mouth: string;
  extras?: string;
  brows?: boolean;
}

/** Minimal flat portrait: 200x200, head at (100,88). Hair paths are drawn in that coordinate space. */
export function portrait(s: PortraitSpec): string {
  return `
<svg viewBox="0 0 200 200" aria-hidden="true">
  <circle cx="100" cy="100" r="92" fill="${s.bg}"/>
  <circle cx="100" cy="100" r="92" fill="url(#p-linen)" opacity=".6"/>
  ${s.hairBack ?? ''}
  <rect x="90" y="110" width="20" height="34" rx="6" fill="${s.skin}"/>
  <path d="M34 200c0-38 30-56 66-56s66 18 66 56z" fill="${s.top}"/>
  ${s.extras ?? ''}
  <circle cx="66" cy="90" r="6" fill="${s.skin}"/><circle cx="134" cy="90" r="6" fill="${s.skin}"/>
  <circle cx="100" cy="88" r="34" fill="${s.skin}"/>
  ${s.brows === false ? '' : `<path d="M82 78q6-4 12 0M106 78q6-4 12 0" fill="none" stroke="#1F2A33" stroke-width="2" stroke-linecap="round" opacity=".7"/>`}
  <circle cx="88" cy="90" r="2.8" fill="#1F2A33"/><circle cx="112" cy="90" r="2.8" fill="#1F2A33"/>
  ${s.mouth}
  ${s.hairFront}
</svg>`;
}
