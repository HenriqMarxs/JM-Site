import type { Service } from "../../types/service";
import "./style.css";

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      image: "../../../img/tecnicoJM.png",
      title: "Execução Técnica Nacional",
      description: "Field Service, instalações, manutenção preventiva e corretiva com cobertura em todo o Brasil."
    },
    {
      id: 2,
      image: "../../../img/operacaoTecnica.png",
      title: "Operação Técnica Corporativa",
      description: "Gestão de chamados, controle operacional e acompanhamento técnico com responsabilidade contratual."
    },
    {
      id: 3,
      image: "../../../img/SistemaEmprearial.png",
      title: "Sistemas Empresariais",
      description: "Implantação, parametrização, treinamento e suporte de sistemas de gestão administrativa e financeira."
    },
  ];

  return (
    <section id="services" className="services-container">
      <div className="services-container">
        <h2  className="text-3xl font-bold text-center text-blue-900">
          Nossos Serviços
        </h2>

        <div className="containerGrid">
          {services.map((service) => (
            <div
              key={service.id}
              className="serviceItem"
            >
              <img className="imgService" src={service.image} />
              <h4 className="text-xl font-semibold text-blue-800">
                {service.title}
              </h4>

              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;