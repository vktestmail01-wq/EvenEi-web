'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  const media = window.matchMedia(QUERY);

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', callback);
    return () => media.removeEventListener('change', callback);
  }

  media.addListener(callback);
  return () => media.removeListener(callback);
}

function getSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export default function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
