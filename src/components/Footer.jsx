import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import '../styles/custom.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="py-5">
          {/* Información de la Fundación */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3 d-flex align-items-center">
              <FaLeaf className="me-2" />
              <span>Sembrando Sonrisas</span>
            </h5>
            <p>
              Una iniciativa social comprometida con transformar vidas a través de la solidaridad y las oportunidades.
            </p>
            <p>
              <span className="founding-date">Fundada: 14 de diciembre de 2023</span>
            </p>
          </Col>

          {/* Enlaces Rápidos */}
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="mb-3">Enlaces Rápidos</h5>
            <ul className="footer-links">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#quienes-somos">Quiénes Somos</a></li>
              <li><a href="#programas">Programas</a></li>
              <li><a href="#como-ayudar">Cómo Ayudar</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </Col>

          {/* Síguenos */}
          <Col lg={4} md={12}>
            <h5 className="mb-3">Síguenos</h5>
            <div className="footer-social mb-4">
              <a 
                href="https://www.facebook.com/share/1bDp4p5D3x/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                title="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Ffundacionsembrandosonrisas7&h=AUAwFuD5T2NVcUkyfnx5gRAJ_U1RwvpsDHKY2kR2g1w5UgwQepvTDbEVtT5EuWz_r2YhwYLL6LN8z9bAxSsgFxZkC2vwTT513j0ifB68Elzi2FYdnWbH2mlMQHhgZj5PJLPYMcChNeeZi7XHUFgY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftiktok.com%2F%40sembrandosonrisasecu&h=AUCYp9dXOY6ybXw7hUGP4cVChG7_WQZz4q87DXe1wXkFqhUJJvfUXil-FjQoyihbP-Z28atyXeLlPCunt4aHqvnOGUAoevZ_MzW9iXkdjYHJnKWbs10rBnWbrpLr-_wMq75qcFq9gD_NmHX0H-Ap" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                title="TikTok"
              >
                <FaTiktok />
              </a>
            </div>

            <h5 className="mb-3">WhatsApp</h5>
            <p>
              <a 
                href="https://wa.me/593969252357" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#8BC34A', fontWeight: '600' }}
              >
                <FaWhatsapp className="me-2" />
                +593 969 252 357
              </a>
            </p>
          </Col>
        </Row>

        {/* Divider */}
        <div className="footer-divider">
          {/* Copyright */}
          <Row className="py-3">
            <Col md={6} className="footer-bottom mb-3 mb-md-0">
              <p className="mb-0">
                &copy; {currentYear} Fundación Sembrando Sonrisas. Todos los derechos reservados.
              </p>
            </Col>
            <Col md={6} className="footer-bottom text-md-end">
              <p className="mb-0">
                <strong>"La solidaridad también se contagia, ¡seamos la razón de una sonrisa más!"</strong>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}