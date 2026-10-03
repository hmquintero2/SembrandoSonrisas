import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaEye, FaHeart, FaQuoteLeft } from 'react-icons/fa';
import '../styles/custom.css';

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="quienes-somos-section section-space">
      <Container>
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">NUESTRA ESENCIA</span>
          <h2 className="section-title">Quiénes somos</h2>
          <p className="section-subtitle">Conoce el propósito que mueve a Fundación Sembrando Sonrisas.</p>
        </div>

        <Row className="g-4 align-items-stretch">
          <Col lg={7} data-aos="fade-right">
            <div className="history-panel">
              <div className="history-label">DESDE EL 14 DE DICIEMBRE DE 2023</div>
              <h3>Sembramos esperanza, construimos oportunidades.</h3>
              <p>
                Fundación Sembrando Sonrisas es una iniciativa social creada para ayudar de manera solidaria y desinteresada a personas y familias que atraviesan momentos difíciles.
              </p>
              <p>
                Nacimos con la convicción de que cada persona merece una oportunidad para prosperar y que una mano extendida puede transformar una vida.
              </p>
              <div className="quote-box">
                <FaQuoteLeft />
                <em>“Porque detrás de cada necesidad hay una historia y un sueño que vale la pena.”</em>
              </div>
            </div>
          </Col>

          <Col lg={5} data-aos="fade-left">
            <div className="values-panel">
              <div className="value-item">
                <span><FaBullseye /></span>
                <div><h4>Nuestra misión</h4><p>Brindar apoyo y acompañamiento a personas en situación de vulnerabilidad, promoviendo la dignidad, la solidaridad y la inclusión.</p></div>
              </div>
              <div className="value-item">
                <span><FaEye /></span>
                <div><h4>Nuestra visión</h4><p>Construir una sociedad más humana, con más oportunidades para todos, donde cada persona pueda desarrollar su potencial.</p></div>
              </div>
              <div className="value-item">
                <span><FaHeart /></span>
                <div><h4>Nuestros valores</h4><p>Solidaridad · Empatía · Respeto · Compromiso · Esperanza</p></div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="founder-teaser" data-aos="fade-up">
          <div>
            <span className="section-kicker">CONOCE MÁS</span>
            <h3>Una visión que comenzó con una persona.</h3>
            <p>Conoce la historia y el propósito de nuestro fundador en una página independiente.</p>
          </div>
          <a href="#fundador" target="_blank" rel="noopener noreferrer" className="btn-custom">Conocer al fundador</a>
        </div>
      </Container>
    </section>
  );
}
