import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/custom.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section id="contacto" className="contacto-section py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <h2 className="section-title mb-3">Ponte en Contacto</h2>
            <p className="section-subtitle">
              ¿Tienes preguntas o deseas colaborar? Nos encantaría escucharte
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Información de contacto */}
          <Col lg={4} md={6} data-aos="fade-right">
            <div className="contact-info mb-4">
              <div className="contact-item mb-4">
                <div className="contact-icon mb-3">
                  <FaPhone style={{ fontSize: '24px', color: '#2d5016' }} />
                </div>
                <h6 style={{ color: '#2d5016' }}>WhatsApp</h6>
                <p className="text-muted mb-0">
                  <a href="https://wa.me/593969252357" target="_blank" rel="noopener noreferrer">
                    +593 969 252 357
                  </a>
                </p>
              </div>


              <div className="contact-item">
                <div className="contact-icon mb-3">
                  <FaMapMarkerAlt style={{ fontSize: '24px', color: '#2d5016' }} />
                </div>
                <h6 style={{ color: '#2d5016' }}>Ubicación</h6>
                <p className="text-muted mb-0">
                  Quito, Ecuador
                </p>
              </div>
            </div>

          
          </Col>

          {/* Formulario */}
          <Col lg={8} data-aos="fade-left">
            {enviado && (
              <Alert variant="success" dismissible onClose={() => setEnviado(false)}>
                ¡Mensaje enviado exitosamente! Pronto nos comunicaremos contigo.
              </Alert>
            )}
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="form-control-custom"
                />
              </Form.Group>

            

              <Form.Group className="mb-3">
                <Form.Label>Asunto</Form.Label>
                <Form.Control
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  required
                  className="form-control-custom"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  className="form-control-custom"
                />
              </Form.Group>

              <Button type="submit" className="btn-custom w-100">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
