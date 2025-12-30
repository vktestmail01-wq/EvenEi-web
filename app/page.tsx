'use client';

import { useEffect, useState } from 'react';
import AnimatedBackground from './components/background/AnimatedBackground';
import CursorGlow from './components/background/CursorGlow';
import GradientOrbs from './components/background/GradientOrbs';
import GrainOverlay from './components/background/GrainOverlay';
import Button from './components/ui/Button';
import FloatingElement from './components/ui/FloatingElement';
import Navigation from './components/ui/Navigation';
import { IconClock, IconEye, IconLock, IconPin, IconShield, IconSpeaker, IconTimer, IconUsers } from './components/ui/Icons';
import ProductCard from './components/ui/ProductCard';
import Reveal from './components/ui/Reveal';
import Section from './components/ui/Section';

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
    <div className="bg-black text-zinc-200 min-h-screen overflow-x-hidden">
      <GradientOrbs />
      <AnimatedBackground />
      <CursorGlow />
      <GrainOverlay />
      <Navigation />

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-8 relative">
          <div className="max-w-5xl w-full text-center space-y-8">
            <div
              className={`transition-opacity duration-1000 ${heroStep >= 1 ? 'opacity-100' : 'opacity-0'}`}
            >
              <FloatingElement delay={0}>
                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  You forget more than you remember.
                </p>
              </FloatingElement>
            </div>

            <div
              className={`transition-opacity duration-1000 ${heroStep >= 2 ? 'opacity-100' : 'opacity-0'}`}
            >
              <FloatingElement delay={1}>
                <p className="text-2xl md:text-3xl font-light text-zinc-300">
                  What if you didn&apos;t have to?
                </p>
              </FloatingElement>
            </div>

            <div
              className={`transition-opacity duration-1000 delay-500 ${heroStep >= 3 ? 'opacity-100' : 'opacity-0'} space-y-6 pt-8`}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Project Specular
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light">
                by EvenEi
              </p>
              <p className="text-3xl md:text-5xl font-light bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent pt-4">
                Your memory, upgraded.
              </p>
              <p className="text-lg md:text-xl text-zinc-500 pt-4 max-w-2xl mx-auto">
                Everyday Intelligence — designed to live with you.
              </p>
            </div>

            <div
              className={`transition-opacity duration-1000 delay-1000 ${heroStep >= 3 ? 'opacity-100' : 'opacity-0'} pt-16`}
            >
              <p className="text-sm text-zinc-600 animate-pulse">
                Scroll to continue
              </p>
              <div className="mt-4">
                <svg
                  className="w-6 h-6 mx-auto text-emerald-500 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <Section>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <p className="text-3xl md:text-5xl font-light text-zinc-300 leading-relaxed">
                You&apos;ve lived thousands of moments today.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="text-3xl md:text-5xl font-light text-zinc-400 leading-relaxed">
                Most of them are already gone.
              </p>
            </Reveal>
            <div className="space-y-6 pt-8">
              <Reveal delayMs={400}>
                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  You didn&apos;t lose them.
                </p>
              </Reveal>
              <Reveal delayMs={500}>
                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  No one stole them.
                </p>
              </Reveal>
              <Reveal delayMs={600}>
                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  They were never saved.
                </p>
              </Reveal>
            </div>
            <Reveal delayMs={800}>
              <p className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent pt-12">
                Project Specular exists to change that.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section id="features">
          <div className="max-w-3xl mx-auto space-y-16 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                This is not another smart device.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Reveal delayMs={200}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-zinc-400">
                    It doesn&apos;t wait for commands.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={400}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-zinc-400">
                    It doesn&apos;t need constant attention.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={600}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-zinc-400">
                    It doesn&apos;t live inside a screen.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <Reveal delayMs={800}>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-emerald-300">
                    It watches quietly.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={1000}>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-emerald-300">
                    It understands context.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={1200}>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-emerald-300">
                    It remembers for you.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delayMs={1400}>
              <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent pt-16">
                This is Project Specular.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                What is Everyday Intelligence?
              </h2>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-relaxed">
                Artificial intelligence today lives in prompts, dashboards, and
                apps.
              </p>
            </Reveal>
            <Reveal delayMs={400}>
              <p className="text-3xl md:text-5xl font-light bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent leading-relaxed">
                Everyday Intelligence lives in moments.
              </p>
            </Reveal>
            <div className="space-y-6 pt-8">
              <Reveal delayMs={600}>
                <p className="text-xl md:text-2xl font-light text-zinc-400">
                  It understands life as it happens —
                </p>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <Reveal delayMs={800}>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                    <p className="text-lg md:text-xl font-light text-zinc-400">
                      when your hands are busy
                    </p>
                  </div>
                </Reveal>
                <Reveal delayMs={900}>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                    <p className="text-lg md:text-xl font-light text-zinc-400">
                      when your mind is distracted
                    </p>
                  </div>
                </Reveal>
              </div>
              <Reveal delayMs={1000}>
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/20 backdrop-blur-sm">
                  <p className="text-lg md:text-xl font-light text-emerald-300">
                    when you forget small things that matter
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="space-y-6 pt-12">
              <Reveal delayMs={1200}>
                <p className="text-2xl md:text-3xl font-light text-zinc-300">
                  Everyday Intelligence doesn&apos;t interrupt life.
                </p>
              </Reveal>
              <Reveal delayMs={1300}>
                <p className="text-3xl md:text-4xl font-semibold text-emerald-500">
                  It supports it.
                </p>
              </Reveal>
            </div>
            <Reveal delayMs={1400}>
              <p className="text-sm text-emerald-500 pt-8 font-mono">
                Built by EvenEi.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Why current technology feels wrong
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <Reveal delayMs={200}>
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
                  <p className="text-lg md:text-xl font-light text-zinc-400">
                    It forgets everything the moment ends.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={300}>
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
                  <p className="text-lg md:text-xl font-light text-zinc-400">
                    It needs you to ask.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={400}>
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
                  <p className="text-lg md:text-xl font-light text-zinc-400">
                    It depends on another device to think.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={500}>
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
                  <p className="text-lg md:text-xl font-light text-zinc-400">
                    It speaks too much or not at all.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="space-y-8 pt-12">
              <Reveal delayMs={700}>
                <p className="text-2xl md:text-3xl font-light text-zinc-300">
                  Most technology wants attention.
                </p>
              </Reveal>
              <Reveal delayMs={800}>
                <p className="text-2xl md:text-3xl font-light text-zinc-300">
                  Life doesn&apos;t.
                </p>
              </Reveal>
            </div>
            <Reveal delayMs={1000}>
              <p className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent pt-12">
                Project Specular was built for life.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Tools react.
                <br />
                <span className="text-emerald-500">Companions remember.</span>
              </h2>
            </Reveal>
            <Reveal delayMs={300}>
              <p className="text-2xl md:text-3xl font-light text-zinc-400">
                Most AI reacts after you speak.
              </p>
            </Reveal>
            <Reveal delayMs={500}>
              <p className="text-3xl md:text-5xl font-light bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Project Specular notices before you do.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 pt-12">
              <Reveal delayMs={700}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl md:text-3xl font-light text-emerald-200">
                    It doesn&apos;t answer questions.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={900}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl md:text-3xl font-light text-emerald-200">
                    It recalls experiences.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delayMs={1100}>
              <p className="text-xl md:text-2xl font-light text-zinc-400 pt-12">
                This is the shift from{' '}
                <span className="text-zinc-300">assistance</span> to{' '}
                <span className="text-emerald-400 font-semibold">
                  awareness
                </span>
                .
              </p>
            </Reveal>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto space-y-12">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
                Memory is the core feature.
              </h2>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="text-2xl md:text-3xl font-light text-zinc-400 text-center">
                Project Specular builds a private, contextual memory of your
                life.
              </p>
            </Reveal>
            <div className="flex justify-center gap-8 pt-8">
              <Reveal delayMs={400}>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-light text-zinc-400 line-through">
                    Recordings
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={500}>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-light text-zinc-400 line-through">
                    Logs
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={600}>
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                    Memories
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-12">
              <Reveal delayMs={800}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconPin className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                    <p className="text-lg md:text-xl text-zinc-300">
                      Where you placed things
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={900}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconClock className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                    <p className="text-lg md:text-xl text-zinc-300">
                      What you were doing earlier
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={1000}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconUsers className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                    <p className="text-lg md:text-xl text-zinc-300">
                      Who you interacted with
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={1100}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconEye className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                    <p className="text-lg md:text-xl text-zinc-300">
                      What caught your attention
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="text-center pt-12">
              <Reveal delayMs={1300}>
                <p className="text-2xl md:text-4xl font-semibold text-emerald-500">
                  Specular doesn&apos;t search.
                </p>
              </Reveal>
              <Reveal delayMs={1400}>
                <p className="text-2xl md:text-4xl font-semibold text-emerald-500 pt-2">
                  It remembers.
                </p>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                You don&apos;t ask it questions.
                <br />
                <span className="text-emerald-500">
                  You talk to your memory.
                </span>
              </h2>
            </Reveal>
            <div className="space-y-6 pt-12">
              <Reveal delayMs={300}>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-emerald-300">
                    &ldquo;Where did I keep my charger?&rdquo;
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={450}>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-emerald-300">
                    &ldquo;What was I doing before lunch?&rdquo;
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={600}>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-emerald-300">
                    &ldquo;Have I met this person before?&rdquo;
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={750}>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-300">
                  <p className="text-xl md:text-2xl font-light text-emerald-300">
                    &ldquo;What did I read last night?&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="space-y-6 pt-12">
              <Reveal delayMs={900}>
                <p className="text-2xl md:text-3xl font-light text-zinc-300">
                  The answers already exist.
                </p>
              </Reveal>
              <Reveal delayMs={1000}>
                <p className="text-2xl md:text-3xl font-light text-zinc-300">
                  Specular simply brings them back.
                </p>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                It speaks — on its own terms.
              </h2>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="text-2xl md:text-3xl font-light text-zinc-400">
                Project Specular can speak independently.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Reveal delayMs={400}>
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
                  <p className="text-lg font-light text-zinc-400">
                    Not constantly.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={500}>
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
                  <p className="text-lg font-light text-zinc-400">
                    Not randomly.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={600}>
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                  <p className="text-lg font-light text-emerald-300">
                    Only when context demands it.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="space-y-6 pt-12">
              <Reveal delayMs={800}>
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent border-l-4 border-emerald-500">
                  <p className="text-lg md:text-xl text-emerald-300 text-left italic">
                    &ldquo;You usually take your keys now.&rdquo;
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={950}>
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent border-l-4 border-emerald-500">
                  <p className="text-lg md:text-xl text-emerald-300 text-left italic">
                    &ldquo;You&apos;ve already checked this place.&rdquo;
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={1100}>
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent border-l-4 border-emerald-500">
                  <p className="text-lg md:text-xl text-emerald-300 text-left italic">
                    &ldquo;This person looks familiar.&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="space-y-6 pt-12">
              <Reveal delayMs={1300}>
                <p className="text-2xl md:text-3xl font-light text-zinc-300">
                  This is not conversation.
                </p>
              </Reveal>
              <Reveal delayMs={1400}>
                <p className="text-3xl md:text-4xl font-semibold text-emerald-500">
                  This is awareness.
                </p>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto space-y-12">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white text-center">
                You are always in control.
              </h2>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="text-2xl md:text-3xl font-light text-zinc-400 text-center">
                Specular never owns your memory.
                <br />
                <span className="text-emerald-400 font-semibold">You do.</span>
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 pt-12">
              <Reveal delayMs={400}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconLock className="w-10 h-10 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        What is remembered
                      </h3>
                      <p className="text-zinc-400">
                        You control what gets captured and stored
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={550}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconTimer className="w-10 h-10 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        How long it&apos;s stored
                      </h3>
                      <p className="text-zinc-400">
                        Set retention periods for different types of memories
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={700}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconSpeaker className="w-10 h-10 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        When it speaks
                      </h3>
                      <p className="text-zinc-400">
                        Configure when and how Specular communicates
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={850}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <IconShield className="w-10 h-10 text-emerald-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        What stays private
                      </h3>
                      <p className="text-zinc-400">
                        Everything is local by default, encrypted always
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delayMs={1000}>
              <p className="text-xl md:text-2xl font-light text-zinc-300 text-center pt-12">
                If you delete a memory, it&apos;s gone.{' '}
                <span className="text-emerald-400">Forever.</span>
              </p>
            </Reveal>
            <div className="space-y-6 pt-12 text-center">
              <Reveal delayMs={1200}>
                <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500/40">
                  <p className="text-2xl md:text-4xl font-bold text-emerald-400">
                    Privacy is not a feature.
                  </p>
                  <p className="text-2xl md:text-4xl font-bold text-emerald-400 mt-2">
                    It&apos;s a rule.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                How it works — quietly
              </h2>
            </Reveal>
            <div className="space-y-8 pt-8">
              <Reveal delayMs={200}>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm text-left hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    1
                  </div>
                  <p className="text-lg md:text-xl font-light text-zinc-300">
                    The glasses observe context using low-power sensing.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={350}>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm text-left hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    2
                  </div>
                  <p className="text-lg md:text-xl font-light text-zinc-300">
                    On-device intelligence filters what matters.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={500}>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm text-left hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    3
                  </div>
                  <p className="text-lg md:text-xl font-light text-zinc-300">
                    Meaningful moments become memory nodes.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={650}>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm text-left hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    4
                  </div>
                  <p className="text-lg md:text-xl font-light text-zinc-300">
                    The app syncs for deeper recall and control.
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={800}>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/30 backdrop-blur-sm text-left hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/30 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400 font-bold">
                    5
                  </div>
                  <p className="text-lg md:text-xl font-light text-emerald-300">
                    Over time, Specular adapts to you.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="grid md:grid-cols-3 gap-6 pt-12">
              <Reveal delayMs={1000}>
                <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
                  <p className="text-lg font-light text-emerald-300">
                    No constant uploads
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={1100}>
                <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
                  <p className="text-lg font-light text-emerald-300">
                    No surveillance behavior
                  </p>
                </div>
              </Reveal>
              <Reveal delayMs={1200}>
                <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm">
                  <p className="text-lg font-light text-emerald-300">
                    No noise
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section id="products">
          <div className="max-w-6xl w-full space-y-16">
            <div className="text-center space-y-6">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold text-white">
                  Choose your Specular
                </h2>
              </Reveal>
              <Reveal delayMs={200}>
                <p className="text-base text-zinc-500">
                  Prices are estimated and subject to change.
                </p>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delayMs={400}>
                <ProductCard
                  title="Specular Basic"
                  price="₹8,999"
                  description="For everyday memory and awareness."
                  features={[
                    'Contextual memory capture',
                    'Object and location recall',
                    'Phone-assisted intelligence',
                    'Manual voice interaction',
                    'Essential app control',
                  ]}
                />
              </Reveal>

              <Reveal delayMs={500}>
                <ProductCard
                  title="Specular Pro"
                  price="₹14,999"
                  description="For deeper intelligence and independence."
                  isRecommended
                  features={[
                    'All Basic features',
                    'Independent speaking ability',
                    'On-device intelligence layer',
                    'Faster recall',
                    'Advanced memory search',
                    'Behavior profiles',
                  ]}
                />
              </Reveal>

              <Reveal delayMs={600}>
                <ProductCard
                  title="Specular Max"
                  price="₹19,999"
                  description="The full Specular experience."
                  features={[
                    'All Pro features',
                    'Maximum on-device processing',
                    'Deeper memory retention',
                    'Premium audio and capture',
                    'Advanced contextual awareness',
                    'Priority updates and features',
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </Section>

        <Section id="mission">
          <div className="max-w-3xl mx-auto space-y-12 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Why Project Specular exists
              </h2>
            </Reveal>
            <div className="space-y-8 pt-8">
              <Reveal delayMs={200}>
                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  Life is fragmented.
                </p>
              </Reveal>
              <Reveal delayMs={350}>
                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  Attention is overloaded.
                </p>
              </Reveal>
              <Reveal delayMs={500}>
                <p className="text-2xl md:text-3xl font-light text-zinc-400">
                  Memory is stretched thin.
                </p>
              </Reveal>
            </div>
            <Reveal delayMs={700}>
              <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent pt-12">
                Project Specular exists to restore continuity.
              </p>
            </Reveal>
            <div className="space-y-8 pt-12">
              <Reveal delayMs={900}>
                <p className="text-xl md:text-2xl font-light text-zinc-300">
                  Not to replace thinking.
                </p>
              </Reveal>
              <Reveal delayMs={1000}>
                <p className="text-xl md:text-2xl font-light text-zinc-300">
                  Not to automate living.
                </p>
              </Reveal>
              <Reveal delayMs={1100}>
                <p className="text-2xl md:text-3xl font-semibold text-white">
                  But to support being human.
                </p>
              </Reveal>
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto space-y-16 text-center">
            <div className="space-y-12">
              <Reveal>
                <p className="text-3xl md:text-5xl font-light text-zinc-300">
                  This is not smart eyewear.
                </p>
              </Reveal>
              <Reveal delayMs={300}>
                <p className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  This is Everyday Intelligence.
                </p>
              </Reveal>
            </div>
            <Reveal delayMs={600}>
              <p className="text-xl text-zinc-400 pt-8 font-light">
                Project Specular by EvenEi
              </p>
            </Reveal>
            <Reveal delayMs={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button className="min-w-[200px]">Join the Waitlist</Button>
                <Button variant="secondary" className="min-w-[200px]">
                  Learn More
                </Button>
              </div>
            </Reveal>
          </div>
        </Section>

        <footer className="relative z-10 border-t border-zinc-900/50 backdrop-blur-xl bg-black/50 py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="font-bold text-white text-lg">
                    Project Specular
                  </span>
                </div>
                <p className="text-sm text-zinc-500">
                  Everyday Intelligence designed to live with you.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Product</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Specifications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Company</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <a
                      href="#mission"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Legal</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
              <p>© 2024 EvenEi. All rights reserved.</p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-500 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
