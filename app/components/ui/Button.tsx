'use client';

import { type ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className = '', variant = 'primary', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none';

    const styles: Record<Variant, string> = {
      primary:
        'px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-black shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5',
      secondary:
        'px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-emerald-500/40 backdrop-blur-sm',
      ghost:
        'px-4 py-2 text-zinc-300 hover:text-emerald-400 hover:bg-emerald-500/10',
    };

    return (
      <button
        ref={ref}
        className={`${base} ${styles[variant]} ${className}`}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
