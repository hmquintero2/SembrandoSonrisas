
import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import {
  FaPlay,
  FaFacebook,
  FaExternalLinkAlt,
  FaImage,
  FaVideo,
} from 'react-icons/fa';
import '../styles/custom.css';

// Convierte el enlace normal de Facebook en un reproductor
const fbEmbed = (url) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    url
  )}&show_text=false&width=734`;

// Entrevista
const ENTREVISTA = {
  url: 'https://www.facebook.com/reel/2810625412642442/?app=fbl',
  titulo: 'Entrevista a nuestra fundadora',
  medio: 'Por Luis Duchi',
  descripcion:
    'Conversamos sobre el origen de Sembrando Sonrisas y el trabajo junto a las familias de la comunidad.',
};

// Inauguración
const INAUGURACION = {
  url: 'https://www.facebook.com/watch/?v=1728459735035547',
  titulo: 'Inauguración de la Fundación Sembrando Sonrisas',
  medio: 'Por Luis Duchi',
  descripcion:
    'Conoce algunos momentos de la inauguración de la Fundación Sembrando Sonrisas y el inicio de nuestro trabajo con la comunidad.',
};

// Galería
const items = [
    {
    id: 1,
    type: 'video',
    src: '/img/Inaguracion.mp4',
    title: 'Fundación Sembrando Sonrisas',
    description: 'Inaguración',
  },
  {
    id: 2,
    type: 'video',
    src: '/img/Saludo.mp4',
    title: 'Fundación Sembrando Sonrisas',
    description: 'Historias de vidas transformadas',
  },
  {
    id: 3 ,
    type: 'video',
    src: '/img/Presentacion.mp4',
    title: 'Día de Voluntariado',
    description: 'Presentación',
  },
  {
    id: 4,
    type: 'video',
    src: '/img/Sembrando.mp4',
    title: 'Mensaje de la Fundadora',
    description: 'Reflexión sobre nuestro propósito',
  },
  {
    id: 5,
    type: 'image',
    src: '/img/1.jpeg',
    title: 'Fundación Sembrando Sonrisas',
    description: '',
  },
  {
    id: 6,
    type: 'image',
    src: '/img/2.jpeg',
    title: 'Mujeres Luchadoras',
    description: '',
  },
  {
    id: 7,
    type: 'image',
    src: '/img/4.jpeg',
    title: 'Colaboradores de la Fundación',
    
  },
  {
    id: 8,
    type: 'image',
    src: '/img/5.jpeg',
    title: 'Entrega de Alimentos',
    description: 'Distribución de víveres en la comunidad',
  },
  {
    id: 9,
    type: 'image',
    src: '/img/6.jpeg',
    title: 'Colaboradores de la Fundación',

  },
  {
    id: 10,
    type: 'image',
    src: '/img/7.jpeg',
    title: 'Equipo de trabajo',
   
  },
];

export default function Galeria() {
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleShow = (item) => {
    setCurrentItem(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="galeria" className="galeria-section section-space">
      <Container>

        {/* ENCABEZADO */}
        <div className="section-heading" data-aos="fade-up">
          <span className="section-kicker">NUESTRAS ACCIONES</span>

          <h2 className="section-title">
            Galería de fotos y videos
          </h2>

          <p className="section-subtitle">
            Conoce nuestras acciones a través de imágenes y testimonios.
          </p>
        </div>

        {/* ============================= */}
        {/* ENTREVISTA */}
        {/* ============================= */}

        <div className="entrevista-card" data-aos="fade-up">

          <div className="entrevista-media">
            <div className="entrevista-player">

              <iframe
                src={fbEmbed(ENTREVISTA.url)}
                title={ENTREVISTA.titulo}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>
          </div>

          <div className="entrevista-body">

            <span className="entrevista-source">
              <FaFacebook /> Entrevista en Facebook
            </span>

            <h3>{ENTREVISTA.titulo}</h3>

            <p className="entrevista-medio">
              {ENTREVISTA.medio}
            </p>

            <p className="entrevista-desc">
              {ENTREVISTA.descripcion}
            </p>

            <div className="entrevista-actions">

              <a
                href={ENTREVISTA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-custom"
              >
                Ver en Facebook <FaExternalLinkAlt />
              </a>

            </div>

          </div>
        </div>

        {/* ============================= */}
        {/* INAUGURACIÓN */}
        {/* ============================= */}

        <div className="entrevista-card" data-aos="fade-up">

          <div className="entrevista-media">
            <div className="entrevista-player">

              <iframe
                src={fbEmbed(INAUGURACION.url)}
                title={INAUGURACION.titulo}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>
          </div>

          <div className="entrevista-body">

            <span className="entrevista-source">
              <FaFacebook /> Inauguración en Facebook
            </span>

            <h3>{INAUGURACION.titulo}</h3>

            <p className="entrevista-medio">
              {INAUGURACION.medio}
            </p>

            <p className="entrevista-desc">
              {INAUGURACION.descripcion}
            </p>

            <div className="entrevista-actions">

              <a
                href={INAUGURACION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-custom"
              >
                Ver en Facebook <FaExternalLinkAlt />
              </a>

            </div>

          </div>
        </div>

        {/* ============================= */}
        {/* GRILLA */}
        {/* ============================= */}

        <Row className="g-4">

          {items.map((item, index) => (

            <Col
              lg={4}
              md={6}
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >

              <button
                type="button"
                className="galeria-item"
                onClick={() => handleShow(item)}
              >

                <div className="galeria-image-wrapper">

                  {item.type === 'image' ? (

                    <img
                      src={item.src}
                      alt={item.title}
                      className="galeria-image"
                    />

                  ) : (

                    <video
                      src={`${item.src}#t=0.5`}
                      className="galeria-image"
                      preload="metadata"
                      muted
                      playsInline
                    />

                  )}

                  <div className="galeria-overlay" />

                  <span className={`galeria-type is-${item.type}`}>

                    {item.type === 'image' ? (
                      <>
                        <FaImage /> Foto
                      </>
                    ) : (
                      <>
                        <FaVideo /> Video
                      </>
                    )}

                  </span>

                  {item.type === 'video' && (
                    <span className="galeria-play-icon">
                      <FaPlay />
                    </span>
                  )}

                </div>

                <div className="galeria-content">

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </button>

            </Col>

          ))}

        </Row>

      </Container>

      {/* ============================= */}
      {/* MODAL */}
      {/* ============================= */}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
      >

        <Modal.Header closeButton>

          <Modal.Title>
            {currentItem?.title}
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          {currentItem?.type === 'image' && (

            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="galeria-modal-image"
            />

          )}

          {currentItem?.type === 'video' && (

            <div className="galeria-video-frame">

              <video
                src={currentItem.src}
                title={currentItem.title}
                controls
                autoPlay
                playsInline
              />

            </div>

          )}

          <p className="galeria-modal-text">
            {currentItem?.description}
          </p>

        </Modal.Body>

      </Modal>

    </section>
  );
}
