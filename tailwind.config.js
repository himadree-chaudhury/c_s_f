/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure the template paths
  content: ["./index.html"],
  theme: {
    // Custom variables
    extend: {
      colors: {
        primary: "#ee0181",
      },
      fontFamily: {
        'primary': ['Lexend', 'serif']
      }
    },
  },
  plugins: [],
};

