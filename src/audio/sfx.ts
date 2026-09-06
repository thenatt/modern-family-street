/**
 * Synthesized sound effects. No audio files. One AudioContext, unlocked on the
 * first user gesture, master gain with a persisted mute toggle, and a per-voice
 * rate limiter so rapid hovering never stacks.
 */
export type VoiceName =
  | 'tick' | 'chime' | 'creak' | 'pageFlip' | 'honk' | 'bark' | 'flute' | 'thunk'
  | 'whistle' | 'fanfare' | 'whoosh' | 'sizzle' | 'twinkle' | 'slide' | 'cello'
  | 'door' | 'hit' | 'pop' | 'doorbell' | 'shimmer' | 'marimba' | 'glissando';

const STORAGE_KEY = 'mf:muted';
let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let muted = false;
try { muted = localStorage.getItem(STORAGE_KEY) === '1'; } catch { /* private mode */ }
const listeners = new Set<(m: boolean) => void>();
const lastPlayed = new Map<string, number>();

function ensure(): AudioContext | null {
  if (ctx) return ctx;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = muted ? 0 : 0.6;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -18; comp.ratio.value = 6;
  master.connect(comp).connect(ctx.destination);
  return ctx;
}

export function unlock(): void {
  const c = ensure();
  if (c && c.state === 'suspended') void c.resume();
}

export function isMuted(): boolean { return muted; }
export function setMuted(m: boolean): void {
  muted = m;
  try { localStorage.setItem(STORAGE_KEY, m ? '1' : '0'); } catch { /* ignore */ }
  if (master && ctx) master.gain.setTargetAtTime(m ? 0 : 0.6, ctx.currentTime, 0.02);
  listeners.forEach((l) => l(m));
}
export function toggleMuted(): boolean { setMuted(!muted); return muted; }
export function onMuteChange(cb: (m: boolean) => void): () => void {
  listeners.add(cb); return () => listeners.delete(cb);
}

// ---- helpers -------------------------------------------------------------
type Osc = OscillatorType;
function env(_c: AudioContext, node: GainNode, t: number, a: number, d: number, peak = 1, sustain = 0) {
  const g = node.gain;
  g.cancelScheduledValues(t);
  g.setValueAtTime(0.0001, t);
  g.exponentialRampToValueAtTime(peak, t + a);
  g.exponentialRampToValueAtTime(Math.max(sustain, 0.0001), t + a + d);
}
function tone(c: AudioContext, out: AudioNode, type: Osc, f0: number, f1: number, t: number, a: number, d: number, peak = 0.5) {
  const o = c.createOscillator(); const g = c.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t);
  if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + a + d);
  env(c, g, t, a, d, peak);
  o.connect(g).connect(out); o.start(t); o.stop(t + a + d + 0.05);
}
function noise(c: AudioContext, out: AudioNode, t: number, dur: number, filter: BiquadFilterType, f0: number, f1: number, peak = 0.4, q = 1) {
  const len = Math.ceil(c.sampleRate * dur);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource(); src.buffer = buf;
  const bp = c.createBiquadFilter(); bp.type = filter; bp.Q.value = q;
  bp.frequency.setValueAtTime(f0, t); bp.frequency.exponentialRampToValueAtTime(Math.max(f1, 20), t + dur);
  const g = c.createGain(); env(c, g, t, Math.min(0.01, dur / 4), dur - Math.min(0.01, dur / 4), peak);
  src.connect(bp).connect(g).connect(out); src.start(t); src.stop(t + dur + 0.02);
}

const PENTA = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];

// ---- voices --------------------------------------------------------------
const voices: Record<VoiceName, (c: AudioContext, out: AudioNode, t: number) => void> = {
  tick: (c, o, t) => noise(c, o, t, 0.035, 'bandpass', 2400, 1800, 0.35, 2),
  pop: (c, o, t) => tone(c, o, 'sine', 520, 180, t, 0.005, 0.09, 0.4),
  chime: (c, o, t) => { tone(c, o, 'sine', 880, 880, t, 0.01, 0.6, 0.25); tone(c, o, 'sine', 1320, 1320, t + 0.02, 0.01, 0.45, 0.12); tone(c, o, 'triangle', 440, 440, t, 0.01, 0.5, 0.12); },
  shimmer: (c, o, t) => { [1046, 1318, 1568, 2093].forEach((f, i) => tone(c, o, 'sine', f, f, t + i * 0.05, 0.01, 0.35, 0.12)); },
  twinkle: (c, o, t) => { [1568, 1976, 2349, 2794, 3136].forEach((f, i) => tone(c, o, 'sine', f, f * 1.01, t + i * 0.045, 0.005, 0.22, 0.14)); },
  creak: (c, o, t) => { tone(c, o, 'sawtooth', 140, 210, t, 0.05, 0.3, 0.08); noise(c, o, t, 0.32, 'bandpass', 600, 1400, 0.12, 6); },
  door: (c, o, t) => { tone(c, o, 'sawtooth', 90, 160, t, 0.08, 0.55, 0.07); noise(c, o, t, 0.6, 'bandpass', 400, 1200, 0.1, 5); tone(c, o, 'sine', 660, 660, t + 0.5, 0.01, 0.4, 0.14); },
  pageFlip: (c, o, t) => { noise(c, o, t, 0.12, 'bandpass', 900, 3200, 0.35, 1.5); noise(c, o, t + 0.09, 0.1, 'highpass', 1500, 4000, 0.2, 1); },
  honk: (c, o, t) => { tone(c, o, 'square', 392, 380, t, 0.01, 0.16, 0.16); tone(c, o, 'square', 466, 450, t + 0.17, 0.01, 0.22, 0.16); },
  bark: (c, o, t) => { tone(c, o, 'sawtooth', 520, 220, t, 0.008, 0.11, 0.22); noise(c, o, t, 0.1, 'lowpass', 1800, 500, 0.18); },
  flute: (c, o, t) => { [0, 2, 4, 3, 5].forEach((n, i) => tone(c, o, 'sine', PENTA[n] * 2, PENTA[n] * 2, t + i * 0.16, 0.03, 0.22, 0.16)); },
  cello: (c, o, t) => { tone(c, o, 'sawtooth', 130.8, 130.8, t, 0.08, 0.7, 0.1); tone(c, o, 'triangle', 261.6, 261.6, t, 0.08, 0.6, 0.06); },
  thunk: (c, o, t) => { tone(c, o, 'sine', 120, 50, t, 0.005, 0.18, 0.5); noise(c, o, t, 0.06, 'lowpass', 900, 200, 0.25); },
  hit: (c, o, t) => { noise(c, o, t, 0.25, 'highpass', 5000, 9000, 0.25, 0.7); tone(c, o, 'sine', 180, 60, t, 0.005, 0.12, 0.35); },
  whistle: (c, o, t) => { tone(c, o, 'sine', 2200, 2400, t, 0.02, 0.25, 0.14); tone(c, o, 'sine', 2260, 2450, t, 0.02, 0.25, 0.08); },
  whoosh: (c, o, t) => noise(c, o, t, 0.4, 'bandpass', 300, 2600, 0.28, 1.2),
  sizzle: (c, o, t) => noise(c, o, t, 0.35, 'highpass', 3000, 6000, 0.18, 0.8),
  slide: (c, o, t) => noise(c, o, t, 0.28, 'bandpass', 500, 1600, 0.16, 2),
  doorbell: (c, o, t) => { tone(c, o, 'sine', 659.3, 659.3, t, 0.01, 0.7, 0.25); tone(c, o, 'sine', 523.3, 523.3, t + 0.32, 0.01, 0.9, 0.25); },
  marimba: (c, o, t) => { [[523.3, 0], [659.3, 0.11], [392, 0.22]].forEach(([f, d]) => { tone(c, o, 'sine', f, f * 0.995, t + d, 0.004, 0.28, 0.28); tone(c, o, 'triangle', f * 2, f * 2, t + d, 0.004, 0.12, 0.08); }); noise(c, o, t, 0.03, 'bandpass', 1800, 900, 0.12, 3); },
  glissando: (c, o, t) => { [1046.5, 1174.7, 1318.5, 1568, 1760, 2093].forEach((f, i) => tone(c, o, 'sine', f, f, t + i * 0.05, 0.01, 0.4, 0.11)); tone(c, o, 'triangle', 523.3, 523.3, t, 0.02, 0.7, 0.07); },
  fanfare: (c, o, t) => { ([[523.3, 0], [659.3, 0.12], [784, 0.24], [1046.5, 0.36]] as [number, number][]).forEach(([f, d]) => { tone(c, o, 'triangle', f, f, t + d, 0.01, 0.5, 0.18); tone(c, o, 'sine', f / 2, f / 2, t + d, 0.01, 0.6, 0.1); }); },
};

const MIN_GAP: Partial<Record<VoiceName, number>> = { tick: 40, pop: 60, chime: 250, marimba: 300, glissando: 400, flute: 900, fanfare: 1500, door: 800, doorbell: 1200 };

export function play(name: VoiceName): void {
  if (muted) return;
  const c = ensure();
  if (!c || !master) return;
  if (c.state === 'suspended') { void c.resume(); }
  const now = performance.now();
  const gap = MIN_GAP[name] ?? 120;
  if (now - (lastPlayed.get(name) ?? -Infinity) < gap) return;
  lastPlayed.set(name, now);
  try { voices[name](c, master, c.currentTime + 0.005); } catch { /* never let audio break UI */ }
}

// Unlock on first gesture anywhere.
const gestureUnlock = () => { unlock(); window.removeEventListener('pointerdown', gestureUnlock); window.removeEventListener('keydown', gestureUnlock); };
window.addEventListener('pointerdown', gestureUnlock, { passive: true });
window.addEventListener('keydown', gestureUnlock);
