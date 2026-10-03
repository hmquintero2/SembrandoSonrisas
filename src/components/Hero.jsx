import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHeart, FaArrowDown } from 'react-icons/fa';
import '../styles/custom.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <Container className="hero-container">
        <Row className="align-items-center w-100">
          <Col lg={7} xl={6} data-aos="fade-up">
            <div className="hero-content">
              <span className="eyebrow">FUNDACIÓN SEMBRANDO SONRISAS</span>
              <h1 className="hero-title">
                Una mano extendida
                <span>puede cambiar una vida.</span>
              </h1>
              <p className="hero-subtitle">
                Nacimos para acompañar, apoyar y generar oportunidades para quienes más lo necesitan.
              </p>
              <div className="hero-buttons">
                <Button href="#como-ayudar" className="btn-custom">
                  Empieza a ayudar <FaHeart />
                </Button>
                <Button href="#quienes-somos" className="btn-custom-outline">
                  Conoce nuestra historia
                </Button>
              </div>
              <a href="#programas" className="hero-scroll">
                <span>Descubre nuestro trabajo</span>
                <FaArrowDown />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
