import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
     href="https://wa.me/593969252357?text=Hola%2C%20me%20gustaría%20conocer%20más%20sobre%20la%20Fundación%20Sembrando%20Sonrisas."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button whatsapp-pulse"
      title="Contactanos por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}