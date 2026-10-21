/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./presentations/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-thai)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        liquidFloat: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
        liquidFloatReverse: {
          '0%, 100%': { opacity: '0.75' },
          '50%': { opacity: '0.95' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        liquid: 'liquidFloat 12s ease-in-out infinite',
        liquidReverse: 'liquidFloatReverse 15s ease-in-out infinite',
      },
      backgroundImage: {
        'liquid-mesh': 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(168, 85, 247, 0.12) 0px, transparent 50%)',
        'liquid-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 35%, #ec4899 70%, #06b6d4 100%)',
        'liquid-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25), rgba(236, 72, 153, 0.15) 30%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
