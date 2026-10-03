import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaHeart,
  FaQuoteLeft,
  FaGraduationCap,
  FaChartLine,
  FaSeedling,
  FaHandHoldingHeart
} from 'react-icons/fa';
import Navbar from './Navbar';
import '../styles/custom.css';


const formaciones = [
  {
    titulo: 'Tecnóloga Superior en Administración Financiera',
    descripcion: 'Gestión, emprendimiento y liderazgo financiero.',
    estado: 'Título obtenido',
    icono: <FaChartLine />
  },
  {
    titulo: 'Técnica Agropecuaria',
    descripcion: 'Desarrollo rural y agricultura sostenible.',
    estado: 'Título obtenido',
    icono: <FaSeedling />
  },
  {
    titulo: 'Estudiante de Fisioterapia',
    descripcion: 'Compromiso con la salud integral comunitaria.',
    estado: 'En curso',
    enCurso: true,
    icono: <FaHandHoldingHeart />
  }
];

export default function Fundador() {
  return (
    <div className="founder-page">
      <Navbar />

      <main className="founder-main">
        <Container>
          <Row className="align-items-start g-5">
            {/* IMAGEN */}
            <Col lg={5} data-aos="fade-right">
              <div className="founder-image-sticky">
                <div className="founder-image-frame">
                  <img
                    src="/img/Fundadora.png"
                    alt="Fundadora de Sembrando Sonrisas"
                  />
                </div>
                <p className="founder-image-caption">Fundadora de Sembrando Sonrisas</p>
              </div>
            </Col>

            {/* CONTENIDO */}
            <Col lg={7} data-aos="fade-left">
              <span className="section-kicker">Nuestra historia</span>
              <h1 className="founder-title">Nuestra Fundadora</h1>
              <div className="founder-rule" />

              <p className="founder-lead">
                Una mujer luchadora con metas claras que transformó la adversidad en propósito.
                Una visión de solidaridad convertida en iniciativa para acompañar, apoyar y
                generar oportunidades.
              </p>

              {/* TESTIMONIO PERSONAL */}
              <section className="founder-testimony">
                <div className="founder-block-header">
                  <span className="founder-block-icon"></span>
                  <h2>Mi razón de ser</h2>
                </div>

                <p className="testimony-text">
                  Crecí en la pobreza. Hubo noches en las que mi familia no sabía qué comer,
                  días donde faltaba todo. Pero siempre supe que quería más, que tenía metas que
                  alcanzar y sueños que cumplir. En medio de esa oscuridad, alguien creyó en mí.
                  Una mano extendida, una palabra de aliento, un pequeño gesto cambiaron el rumbo
                  de mi vida.
                </p>

                <p className="testimony-text">
                  He sido siempre una mujer luchadora. A pesar del hambre, del frío y de las noches
                  oscuras, nunca dejé de luchar por mis metas. Estudié, trabajé, me esforcé cada día
                  porque sabía que el sacrificio de hoy sería la libertad de mañana. Esa solidaridad
                  que recibí en mis momentos más difíciles, sumada a mi determinación y coraje, me
                  permitió salir adelante. Y hoy, por la gracia de Dios, tengo el privilegio de hacer
                  por otros lo que un día hicieron por mí.
                </p>

                <p className="testimony-text">
                  Sembrando Sonrisas nace de esa convicción profunda: que con determinación, amor y
                  solidaridad podemos transformar vidas. Que nadie merece sentirse solo en la
                  oscuridad. Que todos, sin excepción, merecemos una oportunidad de cumplir nuestras
                  metas y ser mejores cada día. Que juntos, con valentía, esperanza y amor, podemos
                  sembrar esperanza en donde hay desesperación.
                </p>

                <blockquote className="founder-quote">
                  <FaQuoteLeft />
                  <p>“La solidaridad también se contagia; seamos la razón de una sonrisa más.”</p>
                </blockquote>
              </section>

              {/* FORMACIÓN ACADÉMICA */}
              <section className="academic-section">
                <div className="founder-block-header">
                  <span className="founder-block-icon"><FaGraduationCap /></span>
                  <h2>Mi formación académica</h2>
                </div>

                <ul className="academic-cards">
                  {formaciones.map((item) => (
                    <li key={item.titulo} className="academic-card">
                      <span className="academic-icon" aria-hidden="true">{item.icono}</span>

                      <div className="academic-body">
                        <h3 className="academic-title">{item.titulo}</h3>
                        <p className="academic-desc">{item.descripcion}</p>

                        <div className="academic-footer">
                          <span className={`academic-badge${item.enCurso ? ' is-current' : ''}`}>
                            {item.estado}
                          </span>
                          <span className="academic-line" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}