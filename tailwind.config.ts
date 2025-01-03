import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lightBlue: '#EAEFF9',
        normalBlue: '#2A5CBF',
        mediumBlue: '#4a74c9',
        borderBlue: '#9abae3',
        turquoiseBlue: '#50D4F2',
        pinky: '#F29BCB',
        gray: '#7E7E7E',
      },
    },
  },
  plugins: [],
} satisfies Config;
