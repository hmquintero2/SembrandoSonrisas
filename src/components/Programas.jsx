import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaHome, FaUserTie, FaHeartbeat } from 'react-icons/fa';
import '../styles/custom.css';

const programas = [
  { id: 1, icon: FaUsers, titulo: 'Mujeres Vulnerables', descripcion: 'Apoyo integral a mujeres mayores de 40 años que enfrentan situaciones de vulnerabilidad económica y social.', beneficiarios: '+450', accent: '#a8455a' },
  { id: 2, icon: FaHome, titulo: 'Familias de Escasos Recursos', descripcion: 'Asistencia a familias que viven en condiciones de calle o con riesgo de exclusión social.', beneficiarios: '+680', accent: '#3d7a4c' },
  { id: 3, icon: FaUserTie, titulo: 'Jóvenes en Situación de Trabajo', descripcion: 'Programas de capacitación y oportunidades laborales para jóvenes sin acceso a empleo digno.', beneficiarios: '+320', accent: '#b8801f' },
  { id: 4, icon: FaHeartbeat, titulo: 'Apoyo en Situaciones de Salud', descripcion: 'Asistencia médica, medicamentos y seguimiento a personas con necesidades de salud prioritarias.', beneficiarios: '+890', accent: '#2b7a82' }
];

export default function Programas() {
  return (
    <section id="programas" className="programas-section section-space">
      <Container>
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">NUESTRO TRABAJO</span>
          <h2 className="section-title">Nuestros programas</h2>
          <p className="section-subtitle">Trabajamos en diferentes áreas para llegar a quienes más lo necesitan.</p>
        </div>

        <Row className="g-4">
          {programas.map((programa, index) => {
            const Icon = programa.icon;
            return (
              <Col lg={6} key={programa.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <Card
                  className="card-programa h-100 border-0"
                  style={{ '--accent': programa.accent }}
                >
                  <Card.Body>
                    <span className="programa-icon"><Icon /></span>
                    <h3>{programa.titulo}</h3>
                    <p>{programa.descripcion}</p>
                    <div className="programa-footer">
                      <span className="programa-badge">
                        <strong>{programa.beneficiarios}</strong> beneficiarios
                      </span>
                      <span className="programa-line" />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <div className="stats-strip" data-aos="fade-up">
          <div><strong>2,340</strong><span>Personas ayudadas</span></div>
          <div><strong>1,089</strong><span>Donantes activos</span></div>
          <div><strong>847</strong><span>Voluntarios</span></div>
          <div><strong>$245K</strong><span>Distribuidos</span></div>
        </div>
      </Container>
    </section>
  );
}