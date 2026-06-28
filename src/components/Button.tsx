import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
};

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
  const styles = {
    primary: 'bg-zinc-50 text-zinc-950 shadow-glow hover:bg-white',
    secondary: 'border border-line bg-white/5 text-zinc-50 hover:border-white/20 hover:bg-white/10',
    ghost: 'text-zinc-200 hover:text-white',
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
