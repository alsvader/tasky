import { useContext } from "react";
import { ThemeContext, type ThemeContextProps } from "../context/ThemeContext";

export function useTheme() {
  const context = useContext<ThemeContextProps | undefined>(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
