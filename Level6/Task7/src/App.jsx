import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import "./App.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Switcher</h1>
      <p>The current theme is: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
