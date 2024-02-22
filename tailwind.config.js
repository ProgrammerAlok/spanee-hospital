module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fbff",
          100: "#fbf5f5",
          300: "#e0e0e0",
          500: "#a3a3a3",
          600: "#7f7f7f",
          900: "#161414",
          "600_99": "#7f7f7f99",
          "50_01": "#fff9f9",
          "50_02": "#fffafa",
          "50_03": "#f5fbff",
          "500_01": "#999999",
          "900_00": "#16141400",
          "600_93": "#7f7f7f93",
        },
        black: {
          900: "#000000",
          "900_3a": "#0000003a",
          "900_1e": "#0000001e",
          "900_23": "#00000023",
          "900_0c": "#0000000c",
          "900_33": "#00000033",
          "900_19": "#00000019",
          "900_16": "#00000016",
        },
        blue_gray: {
          100: "#d7d7d7",
          600: "#545f70",
          700: "#3d5783",
          900: "#162e55",
          "100_01": "#cdcdcd",
          "600_01": "#545f71",
          "700_7f": "#3e57847f",
          "700_01": "#3c5783",
        },
        red: { 500: "#ff3e3c", A700: "#fc0606" },
        green: { 400: "#4cd080" },
        blue: { 50: "#e9f7ff", 400: "#5c95e7", "50_01": "#d9e7ff" },
        amber: { 400: "#ffcf26", 600: "#ffb300" },
        indigo: { 900: "#1c396a", "900_01": "#1a3a73", "900_02": "#021c56" },
        white: { A700_01: "#fffcfc", A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", poppins: "Poppins", lato: "Lato" },
      boxShadow: {
        bs2: "0px 0px  4px 0px #0000001e",
        bs4: "0px 0px  4px 0px #0000003a",
        bs1: "0px 0px  4px 0px #00000019",
        bs5: "0px 0px  4px 0px #00000023",
        bs3: "0px 0px  4px 0px #00000033",
        bs: "0px 2px  28px 0px #0000000c",
        bs6: "0px 0px  40px 0px #00000016",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#3e57847f,#3e57847f)",
        gradient1: "linear-gradient(180deg ,#161414,#16141400)",
      },
      lineClamp: {
        1: '1',
        7: '7',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
