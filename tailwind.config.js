module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-blue": "#2104D8",
        "cust-grayy": "#B0B0B0",
        "cust-black": "#242424",
      },
      backgroundImage: {
        "gradient-radial-blue":
          "radial-gradient(at left center, rgb(28,32,69), rgb(25,28,53), rgb(21,22,32))",
        "gradient-radial-black":
          "radial-gradient(at left center, rgb(22,23,35), rgb(19,20,23),  rgb(19,19,19))",
      },
    },
  },
  plugins: [],
};
