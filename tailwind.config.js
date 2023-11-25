/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "15px",
          lg: "15px",
          xl: "15px",
          "2xl": "15px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
      colors : {
        "primary" : "#309255",
        "secondary": "#FFA200",
        "gray" : "#747474",
        "lightGray" : "#56616F",
        "dark" : "#1D2733"


      },
      fontFamily : {
        "urbanist" : `'Urbanist', sans-serif`,
        "hindSiliguri" : `'Hind Siliguri', sans-serif`
      }
    },
  },
  plugins: [],
}

