import './style.css';
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };
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
      {showArrow && (
      <ChevronDown className="scroll-arrow" onClick={scrollToNext} />
      )}
      <div className="overlay-top"></div>
    </section>
    
  );
};

export default Hero;