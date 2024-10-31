import {  Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const [isDark, setIsDark] = useTheme();

  // if (isDark) {
  //   document.body.classList.add("dark");
  // } else {
  //   document.body.classList.remove("dark");
  // }

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to="/">Where in the world?</Link>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("IsDarkMode", !isDark);
          }}
        >
          <i className={`fa-regular fa-${!isDark ? "moon" : "sun"}`}></i>
          &nbsp;&nbsp;{`${isDark ? "Light" : "Dark"}`} Mode
        </p>
      </div>
    </header>
  );
}
