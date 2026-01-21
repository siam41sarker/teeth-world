/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter"],
        "outfit": ["Outfit"]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        expand: {
          "0%": {
            opacity: "0",
            transform: "scale(0.97)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        expand: "expand 0.35s ease-out forwards",
      },
      boxShadow: {
        mint: '0 8px 24px #d8f3ee',
        lite: '0 8px 24px rgba(26, 188, 156, 0.08)',
      },
    }
  },
  plugins: [require('daisyui')],
}

