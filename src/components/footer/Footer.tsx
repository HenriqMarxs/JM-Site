const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} JM Informática — Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;