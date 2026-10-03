import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import '../styles/custom.css';

export default function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: "María González",
      rol: "Beneficiaria",
      foto: "",
      texto: "Sembrando Sonrisas cambió mi vida. No solo recibí ayuda económica, sino también el apoyo emocional que necesitaba. ¡Gracias!",
      calificacion: 5
    },
    {
      id: 2,
      nombre: "Carlos Mendez",
      rol: "Voluntario",
      foto: "",
      texto: "Ser voluntario aquí me ha enseñado el verdadero valor de la solidaridad. Cada día me inspira más para seguir ayudando.",
      calificacion: 5
    },
    {
      id: 3,
      nombre: "Ana López",
      rol: "Donante",
      foto: "",
      texto: "Me encanta ver cómo mis donaciones realmente impactan a las personas. La transparencia de Sembrando Sonrisas es admirable.",
      calificacion: 5
    }
  ];

  return (
    <section className="testimonios-section py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <Container>
        <Row className="mb-5 text-center">
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <h2 className="section-title mb-3">Testimonios de Impacto</h2>
            <p className="section-subtitle">
              Historias reales de personas que han sido tocadas por nuestra misión
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonios.map((testimonio, index) => (
            <Col lg={4} md={6} key={testimonio.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="card-testimonio border-0 shadow-sm h-100">
                <Card.Body className="p-4 d-flex flex-column">
                  {/* Calificación */}
                  <div className="mb-3">
                    {[...Array(testimonio.calificacion)].map((_, i) => (
                      <FaStar key={i} style={{ color: '#ffc107', marginRight: '4px' }} />
                    ))}
                  </div>

                  {/* Texto */}
                  <p className="card-text text-muted mb-4 flex-grow-1">
                    "{testimonio.texto}"
                  </p>

                  {/* Perfil */}
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonio.foto} 
                      alt={testimonio.nombre}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="mb-0" style={{ color: '#2d5016' }}>
                        {testimonio.nombre}
                      </h6>
                      <small className="text-muted">{testimonio.rol}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
