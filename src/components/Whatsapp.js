import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/+5491169392299" // Coloca aquí tu número de WhatsApp en formato internacional
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/whatsapp-icon.png" // Asegúrate de tener el icono de WhatsApp en la carpeta public/img/
          alt="WhatsApp"
          width={60} // Ancho del botón
          height={60} // Alto del botón
        />
      </a>
    </div>
  );
}
