import { create } from "zustand";

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
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return { darkMode: newTheme };
    });
  },
}));

export default useThemeStore;