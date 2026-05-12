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
        dark: {
          900: '#020617',
          800: '#081120',
          700: '#0B1220',
          600: '#0F172A',
        },
        accent: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          emerald: '#10B981',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': 'radial-gradient(at 0% 0%, hsla(210,100%,10%,1) 0%, transparent 50%), radial-gradient(at 100% 100%, hsla(190,100%,10%,1) 0%, transparent 50%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.7, filter: 'brightness(1.5)' },
        },
      },
    },
  },
  plugins: [],
}
