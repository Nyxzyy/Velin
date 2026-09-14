/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        court: {
          bg: '#080C15',
          surface: '#0F1626',
          card: '#162035',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: '#1E293B',
        },
        velin: {
          gold: '#FFB800',
          amber: '#F59E0B',
          cyan: '#06B6D4',
          electric: '#00F2FE',
          purple: '#8B5CF6',
          lavender: '#A78BFA',
          navy: '#0A192F',
        }
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'Impact', 'Montserrat', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 10% 20%, rgba(255, 184, 0, 0.15) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
