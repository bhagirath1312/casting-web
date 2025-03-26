import { create } from "zustand";

<<<<<<< HEAD
// Function to load the theme immediately before rendering
export const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const useThemeStore = create((set) => ({
  darkMode: false,

  // Initialize theme after React mounts
  initializeTheme: () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      set({ darkMode: true });
    } else {
      set({ darkMode: false });
    }
  },

  // Toggle dark mode
  toggleDarkMode: () => {
    set((state) => {
      const newTheme = !state.darkMode;
      localStorage.setItem("theme", newTheme ? "dark" : "light");

      if (newTheme) {
=======
const useThemeStore = create((set) => ({
  darkMode: false,

  // Load and apply the stored theme on mount
  initializeTheme: () => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const isDarkMode = storedTheme === "dark";
      
      set({ darkMode: isDarkMode });

      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  },

  // Toggle dark mode and update localStorage
  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.darkMode;
      
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newMode ? "dark" : "light");
      }

      if (newMode) {
>>>>>>> 9d719e0 (add dark mode functionlity)
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

<<<<<<< HEAD
      return { darkMode: newTheme };
=======
      return { darkMode: newMode };
>>>>>>> 9d719e0 (add dark mode functionlity)
    });
  },
}));

export default useThemeStore;