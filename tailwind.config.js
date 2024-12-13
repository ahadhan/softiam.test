/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondaryColor: "#246BFD"
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      boxShadow: {
        neon: "0 0 15px #00bfff, 0 0 30px #00bfff",
      },
      backgroundImage: {
        "gradient-light": "linear-gradient(to bottom, #246BFD, #246aDC)",
      },
    },
  },
  plugins: [],
};
