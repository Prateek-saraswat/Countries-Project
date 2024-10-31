const { createContext, useState } = require("react");

export const ThemeContext = createContext("hello");

export function ThemeProvider({ children }) {
  console.log(children);
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("IsDarkMode"))
  );
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}
