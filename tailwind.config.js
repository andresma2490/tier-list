/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export const content = ["./src/**/*.{html,ts}"];
export const theme = {
  extend: {
    colors: {
      primary: colors.blue,
      secondary: colors.gray,
      success: colors.green,
      danger: colors.red,
    },
  },
};
export const plugins = [];
