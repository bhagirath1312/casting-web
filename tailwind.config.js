<<<<<<< HEAD
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "\"./app/**/*.{js,ts,jsx,tsx}\",",
//     "./node_modules/@heroui/theme/dist/components/navbar.js"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#5B408C", // Purple
//         secondary: "#8D8B3A", // Olive Green
//         accent: "#8E3F67", // Dark Pink
//         neutral: "#F3F1F8", // Light background
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
>>>>>>> 9d719e0 (add dark mode functionlity)
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        // Light Mode Colors
        primary: "#5B408C", // Purple
        secondary: "#8D8B3A", // Olive Green
        accent: "#8E3F67", // Dark Pink
        neutral: "#F4F0F9", // Light background
        text: "#222222", // Dark text for light mode
        cardBg: "#FFFFFF", // Card background color for light mode
        
        // Dark Mode Colors
        darkBg: "#121212", // Dark mode background
        darkText: "#EAEAEA", // Light text in dark mode
        darkPrimary: "#3E2A6C", // Darker shade of primary
        darkSecondary: "#5F5C2E", // Darker olive green
        darkAccent: "#6A2B4C", // Darker shade of accent
        darkCardBg: "#1E1E1E", // Dark mode card background
        darkBorder: "#2D2D2D", // Dark mode border color

        // Additional Grays for UI contrast
        grayLight: "#D1D5DB", // Light gray for borders
        grayDark: "#4B5563", // Dark gray for text in dark mode
=======
        primary: "#5B408C",
        secondary: "#8D8B3A",
        accent: "#8E3F67",
        neutral: {
          DEFAULT: "#F4F0F9",
          200: "#F4F0F9",
        },
        text: "#222222",
        cardBg: "#FFFFFF",
        darkBg: "#0a0a0a",
        darkText: "#ededed",
        darkCardBg: "#1a1a1a",
>>>>>>> 9d719e0 (add dark mode functionlity)
      },
    },
  },
  plugins: [],
};