import { useState } from 'react';
import Image from 'next/image';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Enviando...');

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Correo enviado correctamente');
        setFormData({ name: '', email: '', phone: '', comments: '' }); // Limpia el formulario
      } else {
        setStatus('Error al enviar el correo');
      }
    } catch (error) {
      setStatus('Error al enviar el correo');
    }
  };

  return (
    <section id="contact" className="contact-section py-5 bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <Image
              src="/LogoFondoTrans.png"
              alt="logo"
              width={450} // Ancho en píxeles
              height={200} // Altura en píxeles
            />
            <p className="mb-4 lead">
              Ofrecemos un servicio integral e independiente que nos permite
              acompañar a nuestros clientes para planificar y aumentar su
              patrimonio tanto a nivel local como global.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt"></i> CERRITO – 1° Piso B,
                Ciudad Autónoma de Buenos Aires, Argentina
              </li>
              <li className="mb-3">
                <i className="fas fa-phone-alt"></i> 11 - 69392299
              </li>
            </ul>
            <div className="social-icons">
              <a href="#" className="text-light me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <h2 className="mb-3">Potenciamos tu futuro</h2>
            <p className="mb-4 lead">
              Completá el formulario para contactarte con nuestros asesores.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nombre y apellido"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="comments"
                  rows="4"
                  placeholder="Comentarios"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
              <p>{status}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
