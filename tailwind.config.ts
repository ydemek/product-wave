// import type { Config } from 'tailwindcss'
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
// export default {
//   content: ['./app/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config

