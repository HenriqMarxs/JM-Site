import { useTheme } from "../../context/ThemeContext";
import "./index.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className={`theme-toggle-track ${isLight ? "light" : ""}`}
      onClick={toggleTheme}
      aria-label="Alternar tema"
      role="switch"
      aria-checked={isLight}
    >
      <span className="theme-toggle-stars">
        <span className="star" />
        <span className="star" />
        <span className="star" />
      </span>
      <span className="theme-toggle-thumb">
        <svg className="icon-moon" viewBox="0 0 12 12" fill="none">
          <path d="M10 6.5A4.5 4.5 0 015.5 2a4.5 4.5 0 100 9A4.5 4.5 0 0010 6.5z" fill="#1a1a2e"/>
        </svg>
        <svg className="icon-sun" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="2.5" fill="#b0a0d0"/>
          <g stroke="#b0a0d0" strokeWidth="1" strokeLinecap="round">
            <line x1="6" y1="1" x2="6" y2="2.2"/>
            <line x1="6" y1="9.8" x2="6" y2="11"/>
            <line x1="1" y1="6" x2="2.2" y2="6"/>
            <line x1="9.8" y1="6" x2="11" y2="6"/>
            <line x1="2.4" y1="2.4" x2="3.3" y2="3.3"/>
            <line x1="8.7" y1="8.7" x2="9.6" y2="9.6"/>
            <line x1="9.6" y1="2.4" x2="8.7" y2="3.3"/>
            <line x1="3.3" y1="8.7" x2="2.4" y2="9.6"/>
          </g>
        </svg>
      </span>
    </button>
  );
}