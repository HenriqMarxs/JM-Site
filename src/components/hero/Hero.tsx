import './style.css';
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/img/background.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1 className="text-4xl font-bold">
          Field Service e Execução Técnica Corporativa
        </h1>
        <p className="mt-4 text-lg">
          Empresa brasileira com rede técnica ativa e estrutura operacional própria atendendo contratos corporativos em todo o Brasil.
        </p>
      </div>
    </section>
    
  );
};

export default Hero;