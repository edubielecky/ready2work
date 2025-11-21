import { useState, useEffect, useRef } from "react";

export default function FadeInWrapper({ children }) {
const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Cria um Intersection Observer
    const observer = new IntersectionObserver(entries => {
      // entries[0].isIntersecting será true quando o elemento estiver visível
      if (entries[0].isIntersecting) {
        setVisible(true);
        // Desconecta o observer assim que o elemento for visível para otimizar
        observer.unobserve(domRef.current);
      }
    }, {
      // Define a margem para acionar a animação (ex: 15% antes de entrar na tela)
      rootMargin: '0px 0px -15% 0px', 
      threshold: 0.1
    });

    // Observa o elemento DOM
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    // Limpeza (cleanup) quando o componente for desmontado
    return () => {
        if (domRef.current) {
            observer.unobserve(domRef.current);
        }
    };
  }, []); // O array vazio garante que o useEffect só roda uma vez

  return (
    <div
      className={`fade-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}