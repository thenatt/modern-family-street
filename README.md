# The Street · A Modern Family Collectible Zone

An unofficial fan site: three illustrated houses on one dusk street. Enter a house to browse its
collectibles (objects, catchphrase posters, episode "film cells" and trading-card portraits), then take
the eight-question household quiz.

Everything is hand-coded inline SVG animated with GSAP. Sounds are synthesized in the browser with the
Web Audio API; no audio files, no network logos, no photos.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview    # serve dist/ on http://localhost:4173
```

## Routes

| Hash | View |
|---|---|
| `#/` | The Street (hover a house, click to enter) |
| `#/dunphy` · `#/pritchett` · `#/tucker-pritchett` | A house: shelf, posters, moments, portraits, next door |
| `#/quiz` | Which household are you? |

## Structure

- `src/art/` — SVG modules: street layers, house exteriors, items, moments, portraits, shared `<defs>`
- `src/motion/` — parallax, door transition, hover-timeline registry, reduced-motion helpers
- `src/audio/sfx.ts` — synthesized SFX with mute toggle and rate limiting
- `src/data/` — houses, per-house content, quiz questions and scoring
- `src/components/` — cards, posters, moments, portrait cards, nav, sound gate
- `src/views/` — street, house, quiz
- `src/styles/` — tokens (per-house palettes on `[data-house]`), base, per-view CSS

Respects `prefers-reduced-motion` (parallax off, crossfades instead of the door zoom) and works with
keyboard focus (hover animations also fire on focus).
