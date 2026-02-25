/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        body: 'var(--color-body)',
        caption: 'var(--color-caption)',
        whiteText: 'var(--color-whiteText)',
        border: 'var(--color-border)',
        button: 'var(--color-button)',
        onButton: 'var(--color-on-button)',
        accent: 'var(--color-accent)',
        icon: 'var(--color-icon)',
      },
      backgroundImage: {
        gradient: 'var(--gradient-underline)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
