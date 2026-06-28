import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#09090B',
        panel: '#111111',
        primary: '#6366F1',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        muted: '#A1A1AA',
        line: 'rgba(255,255,255,0.08)',
      },
      borderRadius: {
        brand: '20px',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(99, 102, 241, 0.22)',
        card: '0 24px 70px rgba(0, 0, 0, 0.36)',
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at 50% 0%, rgba(99,102,241,0.22), transparent 35%)',
        'brand-gradient': 'linear-gradient(135deg, #6366F1, #8B5CF6 48%, #06B6D4)',
      },
    },
  },
  plugins: [],
} satisfies Config;
