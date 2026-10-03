import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart, FaBox, FaUsers, FaHandshake, FaArrowRight } from 'react-icons/fa';
import '../styles/custom.css';

export default function ComoAyudar() {
  const formas = [
    { id: 1, icon: FaHeart, titulo: 'Donaciones Económicas', descripcion: 'Contribuye con un aporte monetario para financiar nuestros programas y ayudar directamente a quienes lo necesitan.', color: '#b28a35' },
    { id: 2, icon: FaBox, titulo: 'Alimentos y Ropa', descripcion: 'Ayuda con alimentos básicos, ropa, artículos de higiene y otros productos esenciales para las familias.', color: '#6b8f43' },
    { id: 3, icon: FaUsers, titulo: 'Voluntariado', descripcion: 'Únete a nuestro equipo de voluntarios y dedica tu tiempo a hacer diferencia en la vida de otros.', color: '#4f7355' },
    { id: 4, icon: FaHandshake, titulo: 'Aliados Empresariales', descripcion: 'Las empresas pueden ser nuestras aliadas aportando recursos, servicios o tecnología.', color: '#8c6b36' }
  ];

  return (
    <section id="como-ayudar" className="como-ayudar-section section-space">
      <Container>
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">SÚMATE</span>
          <h2 className="section-title">¿Cómo puedes ayudar?</h2>
          <p className="section-subtitle">Existen muchas formas de ser parte del cambio. Elige la que mejor se adapte a ti.</p>
        </div>

        <Row className="g-4">
          {formas.map((forma, index) => {
            const Icon = forma.icon;
            return (
              <Col lg={3} md={6} key={forma.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <Card className="card-ayuda h-100 border-0">
                  <Card.Body>
                    <span className="ayuda-icon" style={{ '--icon-color': forma.color }}><Icon /></span>
                    <span className="ayuda-index">0{forma.id}</span>
                    <h3>{forma.titulo}</h3>
                    <p>{forma.descripcion}</p>
                    
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Row className="mt-5">
          <Col lg={10} className="mx-auto" data-aos="zoom-in">
            <div className="cta-box">
              <div>
                <span className="section-kicker">HAZLO POSIBLE</span>
                <h3>Juntos podemos llegar más lejos.</h3>
                <p>Tu contribución, sin importar su tamaño, puede convertirse en una oportunidad para alguien más.</p>
              </div>
              <div className="cta-actions">
                <Button href="https://wa.me/593994168350" target="_blank" className="btn-custom">Contactar por WhatsApp</Button>
                <Button href="#contacto" className="btn-custom-outline">Realizar donación</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
