import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CareSection = () => {
  return (
    <section id="services" className="care-section py-5 bg-light">
      <Container>
        <Row className="text-center m-4">
          <Col>
            <h2>
              Nos comprometemos a proteger tu patrimonio y a garantizar que tus
              objetivos financieros estén siempre en el centro de nuestras
              decisiones.
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CareSection;
