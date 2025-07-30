/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      diagonal: {
  "0%": { transform: "translate(10%, -10%)" },
  "100%": { transform: "translate(-20%, -90%)" },
},
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        'border-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(248, 117, 255, 0.7)' },
          '50%': { boxShadow: '0 0 0 6px rgba(248, 117, 255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(248, 117, 255, 0.7)' },
        },
        'border-spin': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '400% 50%' },
        },
        spinGradient: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        borderSweep: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
        float: "float 5s ease-in-out infinite",
        'border-pulse': 'border-pulse 4.5s infinite',
        'border-spin': 'border-spin 2s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        slide: "slide 20s linear infinite",
        borderSweep: 'borderSweep 2s linear infinite',
        diagonal: "diagonal 4s linear infinite",
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
