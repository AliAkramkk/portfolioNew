/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 50s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        playwrite: ['"Playwrite RO"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        signika: ['Signika', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
