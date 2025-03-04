/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'number': 'number-increment 0.3s ease-out forwards',
      },
    },
  },
  safelist: [
    'from-purple-600',
    'to-purple-500',
    'from-yellow-600',
    'to-yellow-500',
    'from-blue-600',
    'to-blue-500',
    'from-cyan-600',
    'to-cyan-500',
    'from-green-600',
    'to-green-500',
    'from-pink-600',
    'to-pink-500',
    'from-red-600',
    'to-red-500',
    'from-rose-600',
    'to-rose-500',
    'shadow-purple-500/20',
    'shadow-yellow-500/20',
    'shadow-blue-500/20',
    'shadow-cyan-500/20',
    'shadow-green-500/20',
    'shadow-pink-500/20',
    'shadow-red-500/20',
    'shadow-rose-500/20',
    'bg-purple-400',
    'bg-yellow-400',
    'bg-blue-400',
    'bg-cyan-400',
    'bg-green-400',
    'bg-pink-400',
    'bg-red-500',
    'bg-rose-500',
    'text-red-500',
    'text-rose-500',
  ],
  plugins: [],
};