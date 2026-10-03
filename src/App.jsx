import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import Programas from './components/Programas';
import ComoAyudar from './components/ComoAyudar';
import Galeria from './components/Galeria';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Fundador from './components/Fundador';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isFounderPage, setIsFounderPage] = useState(window.location.hash === '#fundador');

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 });

    const handleHashChange = () => {
      setIsFounderPage(window.location.hash === '#fundador');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isFounderPage) {
    return <Fundador />;
  }

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Programas />
        <ComoAyudar />
        <Galeria />
        <Testimonios />
        <QuienesSomos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;