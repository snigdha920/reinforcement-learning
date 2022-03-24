module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mario': "url('/bg.png')"
      }
    },
  },
  variants: {},
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
}
