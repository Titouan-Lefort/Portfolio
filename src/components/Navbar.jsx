import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import profilePhoto from '../assets/profile-photo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Détecter la section active seulement sur la page d'accueil
      if (location.pathname === '/') {
        const competencesSection = document.getElementById('competences');

        if (competencesSection) {
          const rect = competencesSection.getBoundingClientRect();
          const scrollPosition = window.scrollY;
          const sectionTop = competencesSection.offsetTop;
          const sectionBottom = sectionTop + competencesSection.offsetHeight;
          const viewportMiddle = scrollPosition + window.innerHeight / 2;

          // La section est active si le milieu du viewport est dans la section
          // OU si on est proche du haut de la section (dans les 200px)
          if ((viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom) ||
            (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + 100)) {
            setActiveSection('competences');
          } else {
            setActiveSection('');
          }
        } else {
          setActiveSection('');
        }
      } else {
        setActiveSection('');
      }
    };

    handleScroll(); // Appeler au montage
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isPhotoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup au démontage du composant
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPhotoModalOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCompetencesClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer d'abord vers l'accueil
      navigate('/');
      // Attendre que la navigation soit terminée, puis faire défiler
      setTimeout(() => {
        scrollToSection('competences');
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, juste faire défiler
      scrollToSection('competences');
    }
  };



  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img
            src={profilePhoto}
            alt="Titouan Lefort"
            className="logo-icon"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsPhotoModalOpen(true);
            }}
            style={{ cursor: 'pointer' }}
          />
          <span className="logo-text">Titouan Lefort</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={location.pathname === '/' && !activeSection ? 'active' : ''}
          >
            Accueil
          </Link>
          <a
            href="#competences"
            onClick={handleCompetencesClick}
            className={activeSection === 'competences' ? 'active' : ''}
          >
            Compétences
          </a>
          <Link
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projets
          </Link>
          <Link
            to="/experience"
            onClick={() => setIsMobileMenuOpen(false)}
            className={location.pathname === '/experience' ? 'active' : ''}
          >
            Expérience
          </Link>
          <button
            className="btn btn-primary mobile-only-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate('/contact');
            }}
          >
            Me Contacter
          </button>
        </div>

        <div className="nav-actions">
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Modal pour afficher la photo en grand */}
      {isPhotoModalOpen && (
        <div
          className="photo-modal-overlay"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div className="photo-modal-content">
            <img
              src={profilePhoto}
              alt="Titouan Lefort"
              className="photo-modal-image"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="photo-modal-close"
              onClick={() => setIsPhotoModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
