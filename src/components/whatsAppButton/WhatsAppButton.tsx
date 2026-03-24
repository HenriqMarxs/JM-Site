import { FaWhatsapp } from 'react-icons/fa6';
import './style.css';

const WhatsAppButton = () => {
  const phone = "5519993063748"; // coloque seu número com DDI + DDD
  const message = "Olá! Gostaria de saber mais sobre os serviços.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} className="whatsapp-button" target="_blank">
    <FaWhatsapp />
</a>
  );
};

export default WhatsAppButton;