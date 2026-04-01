import { useState, useEffect } from "react";
import './style.css'
import logo from '/img/JM logo.svg';
import { ThemeToggle } from "../themeButton/ThemeToggle";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">

        <div className="logo-section">
          <img src={logo} alt="JM Logo" className="logo" />
          <h1>Informática</h1>
        </div>

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#values">Valores</a></li>
            <li><ThemeToggle /></li>
          </ul>
        </nav>

        {/* BOTÃO HAMBURGUER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* MENU MOBILE */}
      <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>

        {/* BOTÃO FECHAR */}
        <button
          className="nav-mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          ✕
        </button>

        <a href="#about"    onClick={() => setMenuOpen(false)}>Sobre nós</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a>
        <a href="#values"   onClick={() => setMenuOpen(false)}>Valores</a>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;