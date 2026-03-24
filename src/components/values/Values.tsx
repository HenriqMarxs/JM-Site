import "./style.css";
const values = [
  {
    title: "Execução com precisão",
    desc: "Operações técnicas com controle e padronização em todo o Brasil.",
  },
  {
    title: "Escala nacional",
    desc: "Rede ativa de técnicos garantindo cobertura ampla e rápida.",
  },
  {
    title: "Transparência operacional",
    desc: "Acompanhamento completo e comunicação clara com o cliente.",
  },
];

export function Values() {
  return (
    <section className="values">
      <div className="values-header">
        <h2>Princípios que guiam nossa operação</h2>
        <p>
          Nossa atuação é baseada em eficiência, controle e escala para atender
          demandas corporativas com excelência.
        </p>
      </div>

      <div className="values-grid">
        {values.map((item, i) => (
          <div key={i} className="value-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;