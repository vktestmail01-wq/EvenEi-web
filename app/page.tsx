'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [heroStep, setHeroStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setHeroStep(1), 1000);
    const timer2 = setTimeout(() => setHeroStep(2), 3500);
    const timer3 = setTimeout(() => setHeroStep(3), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="bg-black text-zinc-200 min-h-screen">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 relative">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* First text */}
          <div className={`transition-opacity duration-1000 ${heroStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              You forget more than you remember.
            </p>
          </div>

          {/* Second text */}
          <div className={`transition-opacity duration-1000 ${heroStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              What if you didn&apos;t have to?
            </p>
          </div>

          {/* Main content */}
          <div className={`transition-opacity duration-1000 delay-500 ${heroStep >= 3 ? 'opacity-100' : 'opacity-0'} space-y-6 pt-8`}>
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
              Project Specular
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400">
              by EvenEi
            </p>
            <p className="text-3xl md:text-4xl font-light text-emerald-500 pt-4">
              Your memory, upgraded.
            </p>
            <p className="text-lg text-zinc-500 pt-4">
              Everyday Intelligence — designed to live with you.
            </p>
          </div>

          {/* Scroll CTA */}
          <div className={`transition-opacity duration-1000 delay-1000 ${heroStep >= 3 ? 'opacity-100' : 'opacity-0'} pt-16`}>
            <p className="text-sm text-zinc-600 animate-pulse">
              Scroll to continue
            </p>
            <div className="mt-4">
              <svg className="w-6 h-6 mx-auto text-zinc-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Hook */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <p className="text-3xl md:text-4xl font-light text-zinc-300 leading-relaxed">
            You&apos;ve lived thousands of moments today.
          </p>
          <p className="text-3xl md:text-4xl font-light text-zinc-400 leading-relaxed">
            Most of them are already gone.
          </p>
          <div className="space-y-6 pt-8">
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              You didn&apos;t lose them.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              No one stole them.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              They were never saved.
            </p>
          </div>
          <p className="text-3xl md:text-4xl font-medium text-emerald-500 pt-12">
            Project Specular exists to change that.
          </p>
        </div>
      </section>

      {/* Section 2: What This Is */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            This is not another smart device.
          </h2>
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              It doesn&apos;t wait for commands.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              It doesn&apos;t need constant attention.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              It doesn&apos;t live inside a screen.
            </p>
          </div>
          <div className="space-y-8 pt-12">
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              It watches quietly.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              It understands context.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              It remembers for you.
            </p>
          </div>
          <p className="text-4xl md:text-5xl font-semibold text-emerald-500 pt-16">
            This is Project Specular.
          </p>
        </div>
      </section>

      {/* Section 3: Everyday Intelligence */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            What is Everyday Intelligence?
          </h2>
          <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-relaxed">
            Artificial intelligence today lives in prompts, dashboards, and apps.
          </p>
          <p className="text-3xl md:text-4xl font-light text-emerald-500 leading-relaxed">
            Everyday Intelligence lives in moments.
          </p>
          <div className="space-y-6 pt-8">
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              It understands life as it happens —
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              when your hands are busy,
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              when your mind is distracted,
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              when you forget small things that matter.
            </p>
          </div>
          <div className="space-y-6 pt-12">
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              Everyday Intelligence doesn&apos;t interrupt life.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              It supports it.
            </p>
          </div>
          <p className="text-sm text-emerald-500 pt-8">
            Built by EvenEi.
          </p>
        </div>
      </section>

      {/* Section 4: The Problem */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Why current technology feels wrong
          </h2>
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              It forgets everything the moment ends.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              It needs you to ask.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              It depends on another device to think.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              It speaks too much or not at all.
            </p>
          </div>
          <div className="space-y-8 pt-12">
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              Most technology wants attention.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              Life doesn&apos;t.
            </p>
          </div>
          <p className="text-3xl md:text-4xl font-medium text-emerald-500 pt-12">
            Project Specular was built for life.
          </p>
        </div>
      </section>

      {/* Section 5: The Shift */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Tools react.<br />Companions remember.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-zinc-400">
            Most AI reacts after you speak.
          </p>
          <p className="text-3xl md:text-4xl font-light text-emerald-500">
            Project Specular notices before you do.
          </p>
          <div className="space-y-8 pt-12">
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              It doesn&apos;t answer questions.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              It recalls experiences.
            </p>
          </div>
          <p className="text-xl md:text-2xl font-light text-zinc-400 pt-12">
            This is the shift from assistance to awareness.
          </p>
        </div>
      </section>

      {/* Section 6: Memory */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
            Memory is the core feature.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-zinc-400 text-center">
            Project Specular builds a private, contextual memory of your life.
          </p>
          <div className="space-y-6 text-center pt-8">
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              Not recordings.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              Not logs.
            </p>
            <p className="text-3xl md:text-4xl font-medium text-emerald-500">
              Memories.
            </p>
          </div>
          <div className="space-y-6 pt-12 text-left">
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              It remembers:
            </p>
            <ul className="space-y-4 text-lg md:text-xl text-zinc-400 pl-8">
              <li>• Where you placed things</li>
              <li>• What you were doing earlier</li>
              <li>• Who you interacted with</li>
              <li>• What caught your attention</li>
            </ul>
          </div>
          <div className="space-y-4 pt-12 text-center">
            <p className="text-2xl md:text-3xl font-medium text-emerald-500">
              Specular doesn&apos;t search.
            </p>
            <p className="text-2xl md:text-3xl font-medium text-emerald-500">
              It remembers.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Asking Questions */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            You don&apos;t ask it questions.<br />You talk to your memory.
          </h2>
          <div className="space-y-8 pt-12">
            <p className="text-xl md:text-2xl font-light text-emerald-400">
              &ldquo;Where did I keep my charger?&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-light text-emerald-400">
              &ldquo;What was I doing before lunch?&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-light text-emerald-400">
              &ldquo;Have I met this person before?&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-light text-emerald-400">
              &ldquo;What did I read last night?&rdquo;
            </p>
          </div>
          <div className="space-y-6 pt-12">
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              The answers already exist.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              Specular simply brings them back.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Live Companion Mode */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            It speaks — on its own terms.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-zinc-400">
            Project Specular can speak independently.
          </p>
          <div className="space-y-6 pt-8">
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              Not constantly.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              Not randomly.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              Only when context demands it.
            </p>
          </div>
          <div className="space-y-8 pt-12">
            <p className="text-lg md:text-xl text-emerald-400">
              &ldquo;You usually take your keys now.&rdquo;
            </p>
            <p className="text-lg md:text-xl text-emerald-400">
              &ldquo;You&apos;ve already checked this place.&rdquo;
            </p>
            <p className="text-lg md:text-xl text-emerald-400">
              &ldquo;This person looks familiar.&rdquo;
            </p>
          </div>
          <div className="space-y-6 pt-12">
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              This is not conversation.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-300">
              This is awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Control & Trust */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-white text-center">
            You are always in control.
          </h2>
          <p className="text-2xl md:text-3xl font-light text-zinc-400 text-center">
            Specular never owns your memory.<br />You do.
          </p>
          <div className="space-y-6 pt-12">
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              Through the app, you control:
            </p>
            <ul className="space-y-4 text-lg md:text-xl text-zinc-400 pl-8">
              <li>• What is remembered</li>
              <li>• How long it&apos;s stored</li>
              <li>• When it speaks</li>
              <li>• What stays private</li>
            </ul>
          </div>
          <p className="text-xl md:text-2xl font-light text-zinc-300 text-center pt-12">
            If you delete a memory, it&apos;s gone.
          </p>
          <div className="space-y-6 pt-12 text-center">
            <p className="text-2xl md:text-3xl font-medium text-emerald-500">
              Privacy is not a feature.
            </p>
            <p className="text-2xl md:text-3xl font-medium text-emerald-500">
              It&apos;s a rule.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: How It Works */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            How it works — quietly
          </h2>
          <div className="space-y-8 pt-8 text-left">
            <p className="text-lg md:text-xl font-light text-zinc-400">
              The glasses observe context using low-power sensing.
            </p>
            <p className="text-lg md:text-xl font-light text-zinc-400">
              On-device intelligence filters what matters.
            </p>
            <p className="text-lg md:text-xl font-light text-zinc-400">
              Meaningful moments become memory nodes.
            </p>
            <p className="text-lg md:text-xl font-light text-zinc-400">
              The app syncs for deeper recall and control.
            </p>
            <p className="text-lg md:text-xl font-light text-zinc-400">
              Over time, Specular adapts to you.
            </p>
          </div>
          <div className="space-y-6 pt-12 text-center">
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              No constant uploads.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              No surveillance behavior.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              No noise.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: The Products */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-5xl w-full space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Choose your Specular
            </h2>
            <p className="text-sm text-zinc-500">
              Prices are estimated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Specular Basic</h3>
                  <p className="text-3xl font-bold text-emerald-500 mt-4">₹8,999</p>
                </div>
                <p className="text-zinc-400">
                  For everyday memory and awareness.
                </p>
                <div className="space-y-3 pt-4">
                  <p className="text-sm font-semibold text-zinc-300">Features:</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Contextual memory capture</li>
                    <li>• Object and location recall</li>
                    <li>• Phone-assisted intelligence</li>
                    <li>• Manual voice interaction</li>
                    <li>• Essential app control</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro */}
            <div className="border border-emerald-500 bg-zinc-900/50 p-8 rounded-lg shadow-lg shadow-emerald-500/20 relative">
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                RECOMMENDED
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Specular Pro</h3>
                  <p className="text-3xl font-bold text-emerald-500 mt-4">₹14,999</p>
                </div>
                <p className="text-zinc-300">
                  For deeper intelligence and independence.
                </p>
                <div className="space-y-3 pt-4">
                  <p className="text-sm font-semibold text-zinc-300">Everything in Basic, plus:</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Independent speaking ability</li>
                    <li>• On-device intelligence layer</li>
                    <li>• Faster recall</li>
                    <li>• Advanced memory search</li>
                    <li>• Behavior profiles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Max */}
            <div className="border border-zinc-800 bg-zinc-900/30 p-8 rounded-lg hover:border-emerald-500/50 transition-colors">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">Specular Max</h3>
                  <p className="text-3xl font-bold text-emerald-500 mt-4">₹19,999</p>
                </div>
                <p className="text-zinc-400">
                  The full Specular experience.
                </p>
                <div className="space-y-3 pt-4">
                  <p className="text-sm font-semibold text-zinc-300">Everything in Pro, plus:</p>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li>• Maximum on-device processing</li>
                    <li>• Deeper memory retention</li>
                    <li>• Premium audio and capture</li>
                    <li>• Advanced contextual awareness</li>
                    <li>• Priority updates and features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Why This Exists */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Why Project Specular exists
          </h2>
          <div className="space-y-8 pt-8">
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              Life is fragmented.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              Attention is overloaded.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-400">
              Memory is stretched thin.
            </p>
          </div>
          <p className="text-3xl md:text-4xl font-medium text-emerald-500 pt-12">
            Project Specular exists to restore continuity.
          </p>
          <div className="space-y-8 pt-12">
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              Not to replace thinking.
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300">
              Not to automate living.
            </p>
            <p className="text-2xl md:text-3xl font-light text-zinc-200">
              But to support being human.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-3xl space-y-16 text-center">
          <div className="space-y-12">
            <p className="text-3xl md:text-4xl font-light text-zinc-300">
              This is not smart eyewear.
            </p>
            <p className="text-4xl md:text-5xl font-semibold text-emerald-500">
              This is Everyday Intelligence.
            </p>
          </div>
          <p className="text-xl text-zinc-400 pt-8">
            Project Specular by EvenEi
          </p>
          <button className="mt-12 px-12 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-lg rounded-lg transition-colors shadow-lg shadow-emerald-500/30">
            Join the waitlist
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>© 2024 EvenEi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
