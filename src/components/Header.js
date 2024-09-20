import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container">
          <Link href="/">
            <Image
              src="/summitlogo.png"
              alt="Summit Logo"
              width={250} // Ancho del logo
              height={110} // Altura del logo (ambos valores deben estar definidos)
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* Enlace que abre el popup */}
                <a href="#" className="nav-link" onClick={openPopup}>
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <Link href="#services" className="nav-link">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contact" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Ventana emergente */}
      {isOpen && (
        <>
          <div className="popup-overlay" onClick={closePopup}></div>
          <div className="popup bg-dark ">
            <h2 className="text-center">Nosotros</h2>
            <h4 className="m-4">
              Somos dos socios con una trayectoria de 15 años en el mercado
              financiero, dedicados a brindar un servicio de excelencia a cada
              uno de nuestros clientes. Nos enfocamos en crear relaciones
              cercanas, donde entendemos a fondo las necesidades y objetivos de
              quienes confían en nosotros. A lo largo de nuestra carrera, hemos
              acompañado a personas y empresas en sus decisiones financieras más
              importantes, guiándolos con soluciones personalizadas y
              estrategias claras. Nuestro compromiso es el éxito de nuestros
              clientes, y trabajamos cada día con transparencia, dedicación y un
              enfoque humano para hacer crecer su patrimonio y alcanzar sus
              metas.
            </h4>
            <button className=" close-btn btn btn-primary" onClick={closePopup}>
              Cerrar
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
