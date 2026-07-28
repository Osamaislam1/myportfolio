import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  lenisInstance = lenis;
};

export const getLenis = () => lenisInstance;

export const scrollToId = (id: string) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(`#${id}`, { offset: -64, duration: 1.2 });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTop = () => {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
