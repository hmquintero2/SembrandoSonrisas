import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';
import '../styles/custom.css';

export default function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand href="#home" onClick={closeMenu} className="brand-custom">
          <span className="brand-mark"><FaLeaf /></span>
          <span>
            <strong>Sembrando</strong>
            <small>Sonrisas</small>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" className="navbar-toggle-custom" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center navbar-nav-custom">
            <Nav.Link href="#home" onClick={closeMenu} className="nav-link-custom">Inicio</Nav.Link>
            <Nav.Link href="#programas" onClick={closeMenu} className="nav-link-custom">Programas</Nav.Link>
            <Nav.Link href="#como-ayudar" onClick={closeMenu} className="nav-link-custom">Cómo Ayudar</Nav.Link>
            <Nav.Link href="#galeria" onClick={closeMenu} className="nav-link-custom">Galería</Nav.Link>
            <Nav.Link href="#quienes-somos" onClick={closeMenu} className="nav-link-custom">Quiénes Somos</Nav.Link>
            <Nav.Link
              href="#fundador"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="nav-link-custom founder-link"
            >
              Nuestra Fundadora
            </Nav.Link>
            <Nav.Link href="#contacto" onClick={closeMenu} className="nav-cta">
              Contacto <FaArrowRight />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
