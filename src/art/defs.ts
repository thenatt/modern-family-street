/** Shared SVG defs injected once into <body>: filters + textures referenced by url(#id). */
export const SHARED_DEFS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <defs>
    <filter id="f-shadow" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="14" flood-color="#000" flood-opacity="0.35"/>
    </filter>
    <filter id="f-shadow-sm" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity="0.3"/>
    </filter>
    <filter id="f-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="f-grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="n"/>
      <feColorMatrix in="n" type="saturate" values="0"/>
      <feBlend in="SourceGraphic" mode="multiply"/>
    </filter>
    <pattern id="p-linen" width="6" height="6" patternUnits="userSpaceOnUse">
      <rect width="6" height="6" fill="transparent"/>
      <path d="M0 3h6M3 0v6" stroke="#000" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
    <pattern id="p-terrazzo" width="60" height="60" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="12" r="3" fill="#E5B25D" opacity=".35"/>
      <ellipse cx="34" cy="8" rx="4" ry="2.5" fill="#D63384" opacity=".3" transform="rotate(20 34 8)"/>
      <circle cx="50" cy="30" r="2.4" fill="#7BC8C4" opacity=".35"/>
      <ellipse cx="18" cy="40" rx="3.5" ry="2" fill="#F3EBDD" opacity=".25" transform="rotate(-30 18 40)"/>
      <circle cx="42" cy="52" r="2" fill="#E5B25D" opacity=".3"/>
      <ellipse cx="6" cy="56" rx="2.5" ry="1.5" fill="#D63384" opacity=".25"/>
    </pattern>
    <pattern id="p-damask" width="80" height="80" patternUnits="userSpaceOnUse">
      <g fill="none" stroke="#F2C6C2" stroke-opacity=".12" stroke-width="1.2">
        <path d="M40 4c8 10 8 22 0 32-8-10-8-22 0-32zM40 44c8 10 8 22 0 32-8-10-8-22 0-32z"/>
        <path d="M4 40c10-8 22-8 32 0-10 8-22 8-32 0zM44 40c10-8 22-8 32 0-10 8-22 8-32 0z"/>
        <circle cx="40" cy="40" r="4"/>
        <circle cx="0" cy="0" r="4"/><circle cx="80" cy="0" r="4"/><circle cx="0" cy="80" r="4"/><circle cx="80" cy="80" r="4"/>
      </g>
    </pattern>
    <pattern id="p-stripes" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)">
      <rect width="12" height="24" fill="#E6473C"/><rect x="12" width="12" height="24" fill="#FBF1EC"/>
    </pattern>
    <pattern id="p-blinds" width="100%" height="14" patternUnits="userSpaceOnUse">
      <rect width="100%" height="7" fill="#000" fill-opacity=".05"/>
    </pattern>
  </defs>
</svg>`;

let injected = false;
export function injectDefs(): void {
  if (injected) return;
  injected = true;
  const wrap = document.createElement('div');
  wrap.innerHTML = SHARED_DEFS;
  document.body.prepend(wrap.firstElementChild!);
}
