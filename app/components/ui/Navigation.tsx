'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="backdrop-blur-xl bg-black/80 border-b border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="font-semibold text-white text-lg">
              Project Specular
            </span>
          </div>
          <div className="flex gap-8 items-center">
            <a
              href="#features"
              className="text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#products"
              className="text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
            >
              Products
            </a>
            <a
              href="#mission"
              className="text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
            >
              Mission
            </a>
            <a
              href="#waitlist"
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm rounded-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
