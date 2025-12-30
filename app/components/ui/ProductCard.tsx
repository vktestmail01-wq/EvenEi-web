'use client';

import { type ReactNode } from 'react';

type Props = {
  title: string;
  price: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
  children?: ReactNode;
};

export default function ProductCard({
  title,
  price,
  description,
  features,
  isRecommended = false,
}: Props) {
  return (
    <div
      className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 will-change-transform ${
        isRecommended
          ? 'border-2 border-emerald-500 bg-gradient-to-br from-zinc-900/90 to-emerald-950/30 shadow-2xl shadow-emerald-500/30'
          : 'border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500/50 backdrop-blur-sm'
      }`}
    >
      {isRecommended && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-emerald-400 text-black text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl shadow-lg">
          RECOMMENDED
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              {price}
            </p>
          </div>
        </div>

        <p
          className={`text-base ${isRecommended ? 'text-zinc-300' : 'text-zinc-400'}`}
        >
          {description}
        </p>

        <div className="space-y-4 pt-4">
          <p className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
            Features
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors"
              >
                <span className="text-emerald-500 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-black font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5">
          Select Plan
        </button>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}
