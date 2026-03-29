import { useEffect, useRef, useState } from "react";
import "./style.css";

type CounterProps = {
  end: number;
  start: boolean;
};

const Counter = ({ end, start }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / 120;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return <h3>+{count}</h3>;
};

export default function Stats() {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // roda só uma vez
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="overlay-top"></div>

      <div className="stats-grid">
        <div className="stat-item">
          <Counter end={600} start={startAnimation} />
          <p>Clientes confiam na Jm Informática</p>
        </div>

        <div className="stat-item">
          <Counter end={1000} start={startAnimation} />
          <p>Projetos executados</p>
        </div>

        <div className="stat-item">
          <Counter end={20} start={startAnimation} />
          <p>Estados atendidos</p>
        </div>
      </div>
    </section>
  );
}