/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // textColor: "#F1DFDF",
          // 'primarycolor': "#ffff00",

        // myfontcolor: "#F1DFDF",
        // backgroundcolor: "#000000",
        // primarycolor: "#BEBAB7",
      
        // secondarycolor: "#111313",
        // accentcolor: "#72787E",
        myfontcolor: 'var(--text)',
        backgroundcolor: 'var(--background)',
        primarycolor: 'var(--primary)',
      
        secondarycolor: 'var(--secondary)',
        accentcolor: 'var(--accent)',
      },
      fontFamily: {
        montserratsemibold: ["MontserratSemibold", "sans-serif"],
        montserratmedium: ["MontserratMedium", "sans-serif"],
        montserratregular: ["MontserratRegular", "sans-serif"],
        robotoregular: ["RobotoRegular", "sans-serif"],
        robotomedium: ["RobotoMedium", "sans-serif"],
      },
     
    },
  },
  plugins: [],
  darkMode:"class"
};
