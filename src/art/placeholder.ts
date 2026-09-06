/** Temporary stand-in art used while real illustrations are built. */
export const placeholderSvg = (label: string, tone = '#8F8A80'): string => `
<svg viewBox="0 0 240 240" aria-hidden="true">
  <ellipse cx="120" cy="214" rx="86" ry="10" fill="#000" opacity=".18"/>
  <rect x="50" y="70" width="140" height="120" rx="10" fill="${tone}"/>
  <rect x="50" y="70" width="140" height="28" rx="10" fill="#000" opacity=".15"/>
  <text x="120" y="150" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" fill="#fff" letter-spacing="2">${label.toUpperCase()}</text>
</svg>`;
