/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purple-1': { DEFAULT: '#703BF7', dark: '#703BF7' },
        'gray-1': { DEFAULT: '#1A1A1A', dark: '#1A1A1A' },
        'gray-2': { DEFAULT: '#141414', dark: '#141414' }

        
      },
      borderColor: {
        'purple-1': { DEFAULT: '#703BF7', dark: '#00A1A7' },
        'gray-1': { DEFAULT: '#262626', dark: '#262626' },
        'gray-2': { DEFAULT: '#141414', dark: '#141414' },
      }
    }
  },
  plugins: [],
}

