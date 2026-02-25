import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E2A47',
        sand: '#E9DCCB',
        ink: '#1E1E1E',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(14, 42, 71, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
