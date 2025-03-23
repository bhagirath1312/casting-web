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
  ],
  theme: {
    extend: {
      colors: {
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
      },
    },
  },
  plugins: [],
};