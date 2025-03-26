"use client"; // Required for Zustand

import "../styles/globals.css";
import { useEffect, useCallback } from "react";
import useThemeStore, { loadTheme } from "@/store/themeStore"; // Import Zustand store
import { Inter, Roboto_Mono } from "next/font/google";

// Load Google Fonts
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  const { darkMode, initializeTheme } = useThemeStore();

  // Ensure initializeTheme doesn't change on re-renders
  const initTheme = useCallback(() => {
    loadTheme(); // Load from localStorage before Zustand sync
    initializeTheme(); // Sync Zustand state
  }, [initializeTheme]);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </body>
    </html>
  );
}