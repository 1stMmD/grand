/** @type {import('tailwindcss').Config} */
import { neutral, cyan, white} from "tailwindcss/colors"

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode : ["class"],
  theme: {
    extend: {
      colors : {
        neutral : neutral[900],
        background : white,
        primary : cyan[500],
      }
    },
  },
  plugins: [],
}
