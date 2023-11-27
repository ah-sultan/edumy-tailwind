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
        "primary-50" : "#F5FFF9",
        "primary-100" : "#EEFBF3",
        "primary-200" : "#D6FFE5",
        "primary-300" : "#C5FFDC",
        "secondary": "#FFA200",
        "gray" : "#747474",
        "lightGray" : "#56616F",
        "dark" : "#1D2733"


      },
      fontFamily : {
        "urbanist" : `'Urbanist', sans-serif`,
        "hindSiliguri" : `'Hind Siliguri', sans-serif`
      },
      lineHeight : {
        "22px" : "22px",
        "30px" : "30px",
        "48px" : "48px"
      },
      fontSize : {
        "22px" : "22px",
        "34px" : "34px",
        "40px" : "40px",
        "42px" : "42px",
      }, 
      spacing: {
        "5px" : "5px",
        "7px" : "7px",
        "11px" : "11px",
        "13px" : "13px",
        "15px" : "15px",
        "18px" : "18px",
        "19px" : "19px",
        "21px" : "21px",
        "25px" : "25px",
        "30px" : "30px",
        "38px" : "38px",
        "45px" : "45px",
        "50px" : "50px",
        "55px" : "55px",
        "65px" : "65px",
        "90px" : "90px",
        "70px" : "70px",
        "85px" : "85px",
        "88px" : "88px",
        "100px" : "100px",
     
      },
      zIndex : {
        1 : 1
      },
      borderRadius : {
        "10px" : "10px",
        "15px" : "15px",
        "25px" : "25px",
      },

      keyframes : {
        stickyNav : {
          "0%" : { transform: 'translateY(-100%)' },
          "1000%" : { transform: 'translateY(0%)' },
        }
      },

      animation : {
        stickyNav: 'stickyNav 1s ease-in-out',
      },
    },
  },
  plugins: [],
}

