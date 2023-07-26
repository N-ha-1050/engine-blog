/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      jp: ['var(--font-noto-sans-jp)'],
      mono: ['var(--font-noto-sans-mono)'],
      emoji: ['var(--font-noto-color-emoji)'],
      // sans: ['var(--font-noto-sans)'],
      // body: ['Noto Sans JP', 'Noto Color Emoji', 'Noto Sans', 'Noto Sans Mono'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
