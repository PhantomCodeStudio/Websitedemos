import Lenis from 'lenis';

let instance: Lenis | null = null;
let rafId: number | null = null;

export function initLenis(): Lenis {
  if (instance) return instance;

  instance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 1.5,
    wheelMultiplier: 1,
    infinite: false,
  });

  function raf(time: number) {
    instance!.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);
  return instance;
}

export function destroyLenis() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  instance?.destroy();
  instance = null;
}

export function getLenis() {
  return instance;
}
