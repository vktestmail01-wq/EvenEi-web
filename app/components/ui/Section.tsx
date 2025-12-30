import { type ReactNode } from 'react';

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'tight';
};

export default function Section({
  id,
  children,
  className = '',
  variant = 'default',
}: Props) {
  const padding = variant === 'tight' ? 'py-20 md:py-28' : 'py-28 md:py-36';

  return (
    <section
      id={id}
      className={`relative min-h-screen flex items-center justify-center px-6 md:px-8 ${padding} ${className}`}
    >
      <div className="max-w-6xl w-full">{children}</div>
    </section>
  );
}
