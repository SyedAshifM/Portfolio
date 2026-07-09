import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: 'var(--color-ink)',
        panel: 'var(--color-panel)',
        primary: '#6366F1',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        muted: 'var(--color-muted)',
        line: 'var(--color-line)',
      },
      borderRadius: {
        brand: '20px',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        card: 'var(--shadow-card)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.22), transparent 35%)',
        'brand-gradient': 'linear-gradient(135deg, #6366F1, #8B5CF6 48%, #06B6D4)',
      },
    },
  },
  plugins: [],
} satisfies Config;
