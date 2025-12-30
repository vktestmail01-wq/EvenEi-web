'use client';

import { useMemo, useState } from 'react';
import Button from './Button';

type Status = 'idle' | 'submitting' | 'success';

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const canSubmit = useMemo(
    () => status !== 'submitting' && email.trim().length > 3,
    [email, status],
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('submitting');

    window.setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  if (status === 'success') {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-transparent border border-emerald-500/30 backdrop-blur-sm">
        <p className="text-xl md:text-2xl font-semibold text-white">
          You&apos;re on the list.
        </p>
        <p className="text-sm text-zinc-400 mt-3">
          We&apos;ll reach out to <span className="text-zinc-200">{email}</span>{' '}
          when early access opens.
        </p>
        <div className="mt-6">
          <Button
            variant="secondary"
            onClick={() => {
              setStatus('idle');
              setName('');
              setEmail('');
            }}
          >
            Add another email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-zinc-200">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/40 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-200">
            Email
          </label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            className="mt-2 w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/40 transition"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            disabled={!canSubmit}
            className="flex-1 justify-center"
          >
            {status === 'submitting' ? 'Joining…' : 'Join the waitlist'}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setName('');
              setEmail('');
            }}
          >
            Reset
          </Button>
        </div>

        <p className="text-xs text-zinc-500">
          No spam. No tracking. We&apos;ll only email when there&apos;s something worth
          seeing.
        </p>
      </div>
    </form>
  );
}
