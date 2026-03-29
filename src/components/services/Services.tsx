import { useRef } from "react";
import type { Service } from "../../types/service";
import "./style.css";

const Services: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth * 0.8;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const services: Service[] = [
    {
      id: 1,
      image: "../../../img/tecnicoJM.png",
      title: "Execução Técnica Nacional",
      description:
        "Field Service, instalações, manutenção preventiva e corretiva com cobertura em todo o Brasil.",
    },
    {
      id: 2,
      image: "../../../img/operacaoTecnica.png",
      title: "Operação Técnica Corporativa",
      description:
        "Gestão de chamados, controle operacional e acompanhamento técnico com responsabilidade contratual.",
    },
    {
      id: 3,
      image: "../../../img/SistemaEmprearial.png",
      title: "Sistemas Empresariais",
      description:
        "Implantação, parametrização, treinamento e suporte de sistemas de gestão administrativa e financeira.",
    },
  ];

  return (
    <section id="services" className="services-container">
      <h2>Nossos Serviços</h2>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          ◀
        </button>

        <div className="containerGrid" ref={carouselRef}>
          {services.map((service) => (
            <div key={service.id} className="serviceItem">
              <img className="imgService" src={service.image} />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>
    </section>
  );
};

export default Services;