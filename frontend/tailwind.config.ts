import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        miningDark: '#0D0E11',
        miningGray: '#1F222A',
        miningGold: '#D4AF37',
        miningGoldHover: '#AA882C',
      },
    },
  },
  plugins: [],
}

export default config