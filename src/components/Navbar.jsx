import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import profilePhoto from '../assets/profile-photo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const competencesSection = document.getElementById('competences');
        const veilleSection = document.getElementById('veille');

        let newActiveSection = '';

        if (veilleSection) {
          const sectionTop = veilleSection.offsetTop;
          const sectionBottom = sectionTop + veilleSection.offsetHeight;
          const viewportMiddle = window.scrollY + window.innerHeight / 2;

          if ((viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom) ||
            (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + 100)) {
            newActiveSection = 'veille';
          }
        }

        if (!newActiveSection && competencesSection) {
          const scrollPosition = window.scrollY;
          const sectionTop = competencesSection.offsetTop;
          const sectionBottom = sectionTop + competencesSection.offsetHeight;
          const viewportMiddle = scrollPosition + window.innerHeight / 2;

          if ((viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom) ||
            (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + 100)) {
            newActiveSection = 'competences';
          }
        }

        setActiveSection(newActiveSection);
      } else {
        setActiveSection('');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);




  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCompetencesClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => { scrollToSection('competences'); }, 100);
    } else {
      scrollToSection('competences');
    }
  };

  const handleVeilleClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => { scrollToSection('veille'); }, 100);
    } else {
      scrollToSection('veille');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={handleHomeClick}>
          <img
            src={profilePhoto}
            alt="Titouan Lefort"
            className="logo-icon"
          />
          <span className="logo-text">titouan.lefort</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="/"
            onClick={handleHomeClick}
            className={location.pathname === '/' && !activeSection ? 'active' : ''}
          >
            accueil
          </Link>
          <a
            href="#competences"
            onClick={handleCompetencesClick}
            className={activeSection === 'competences' ? 'active' : ''}
          >
            compétences
          </a>
          <a
            href="#veille"
            onClick={handleVeilleClick}
            className={activeSection === 'veille' ? 'active' : ''}
          >
            veille
          </a>
          <Link
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            projets
          </Link>
          <Link
            to="/experience"
            onClick={() => setIsMobileMenuOpen(false)}
            className={location.pathname === '/experience' ? 'active' : ''}
          >
            expérience
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={location.pathname === '/contact' ? 'active' : ''}
          >
            contact
          </Link>
        </div>

        <div className="nav-actions">
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
