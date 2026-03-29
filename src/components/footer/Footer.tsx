import './style.css'
const Footer: React.FC = () => {
  return (
    <footer className="footerContent">
      <p>© {new Date().getFullYear()} JM Informática — Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;