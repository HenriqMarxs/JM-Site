import './style.css'
import logo from '/img/JM logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img src={logo} alt="JM Logo" className="logo"></img>
          <h1>informática</h1>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#about">Sobre nós</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#values">Valores</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;