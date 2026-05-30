let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer!.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
  }
  return observer;
}

export function observeReveal(el: Element | null) {
  if (!el) return;
  getObserver().observe(el);
}

export function unobserveReveal(el: Element | null) {
  if (!el || !observer) return;
  observer.unobserve(el);
}

export function destroyRevealObserver() {
  observer?.disconnect();
  observer = null;
}
