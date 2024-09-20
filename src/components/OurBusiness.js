import React from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const OurBusiness = () => {
  return (
    <section className="our-business py-5">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Image
              src="/patrimonio.jpeg"
              alt="Nuestro Negocio"
              width={500} // Ancho en píxeles
              height={300} // Altura en píxeles
              priority
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2>Conocimiento del cliente</h2>
            <div className="decorative-line mb-3" />
            <p>
              Evaluación del perfil financiero del cliente. Se busca entender
              sus necesidades, objetivos y tolerancia al riesgo.
            </p>
            <ul>
              <li className="pb-2">
                <strong>Análisis de situación actual:</strong> Revisar los
                activos, pasivos, ingresos y gastos del cliente, tanto en el
                ámbito personal como empresarial, si corresponde.
              </li>
              <li className="pb-2">
                <strong>Definición de objetivos:</strong> Establecer metas
                claras, ya sea para crecimiento patrimonial, seguridad
                financiera, diversificación de inversiones, etc.
              </li>
              <li className="pb-2">
                <strong>Evaluación de tolerancia al riesgo:</strong> Determinar
                el nivel de riesgo que el cliente está dispuesto a asumir en sus
                inversiones.
              </li>
              <li className="pb-2">
                <strong>Horizonte temporal:</strong> Identificar si el cliente
                busca resultados a corto, mediano o largo plazo.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={{ span: 6, order: 2 }}>
            <Image
              src="/gestiondeinversiones.jpeg"
              alt="Gestión de Inversiones"
              width={500} // Ancho en píxeles
              height={300} // Altura en píxeles
              className="img-fluid"
            />
          </Col>
          <Col md={{ span: 6, order: 1 }}>
            <h2>Armado de la Estrategia de Inversión </h2>
            <div className="decorative-line mb-3" />
            <p>
              Definidos los objetivos del cliente, se procede a diseñar una
              estrategia de inversión personalizada que maximice las
              oportunidades y minimice los riesgos.
            </p>
            <ul>
              <li className="pb-2">
                <strong> Selección de activos:</strong> Proponer una combinación
                de activos que se alineen con los objetivos del cliente, desde
                acciones, bonos, fondos de inversión, bienes raíces o productos
                alternativos.
              </li>
              <li className="pb-2">
                <strong>Diversificación:</strong> Asegurar que la cartera esté
                diversificada para reducir el riesgo asociado a mercados o
                sectores específicos.
              </li>
              <li className="pb-2">
                <strong>
                  Evaluación continua de riesgos y oportunidades:{' '}
                </strong>{' '}
                Establecer mecanismos para ajustar la estrategia según las
                condiciones del mercado y los cambios en las circunstancias
                personales del cliente.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Image
              src="/mercados.jpeg"
              alt="Mercados"
              width={500} // Ancho en píxeles
              height={300} // Altura en píxeles
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2>Seguimiento y Ajustes Continuos</h2>
            <div className="decorative-line mb-3" />
            <p>
              El seguimiento es clave para asegurar que la estrategia de
              inversión esté en línea con los objetivos planteados y las
              condiciones de mercado.
            </p>
            <ul>
              <li className="pb-2">
                <strong> Revisión periódica del portafolio: </strong> Evaluar el
                desempeño de las inversiones de manera regular (mensual,
                trimestral o anual), y hacer ajustes cuando sea necesario.
              </li>
              <li className="pb-2">
                <strong>Reportes de rendimiento: </strong> Proveer al cliente
                con informes detallados y comprensibles que muestren la
                evolución de sus inversiones y el cumplimiento de sus metas.
              </li>
              <li className="pb-2">
                <strong>Reuniones de seguimiento:</strong> Mantener reuniones
                regulares con el cliente para discutir los resultados obtenidos
                y adaptar la estrategia si es necesario.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={{ span: 6, order: 2 }}>
            <Image
              src="/Alianzas.jpg"
              alt="Alianzas"
              width={500} // Ancho en píxeles
              height={300} // Altura en píxeles
              priority
              style={{ height: 'auto' }}
              className="img-fluid"
            />
          </Col>
          <Col md={{ span: 6, order: 1 }}>
            <h2>Alianzas</h2>
            <div className="decorative-line mb-3" />
            <p>
              Nos asociamos con empresas líderes de todo el mundo para ampliar
              nuestro alcance con clientes en mercados de alto crecimiento.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurBusiness;
