/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0328EE",
        "dark-blue": "#010D50",
        bg: "#010725",
        "hover-blue": "#031FB4",
      },
      maxWidth: {
        container: "1200px",
      },
      
      backgroundImage: {
        "hero-mac": "url('assets/images/mac.svg')",
        "dark-circle": "url('assets/images/darker-circle.svg')",
        "bright-circle": "url('assets/images/brighter-circle.svg')",
      },
      gridTemplateColumns: {        
        'portfolio': '2fr 3fr 2fr',
        
      }
    },
    fontFamily: {
      sans: '"DM Sans"',
    },
    
  },
  plugins: [],
};
