"use client";
import { createContext, useContext } from "react";

// Create theme context
type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#3180ea",
    secondary: "#33afff",
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
