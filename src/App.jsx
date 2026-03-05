import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import FocusSection from './components/FocusSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import ScrollToTop from './components/ScrollToTop';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
import MontazaDetail from './pages/MontazaDetail';
import MedicalCabinetDetail from './pages/MedicalCabinetDetail';
import MedicalCabinetWebDetail from './pages/MedicalCabinetWebDetail';
import './index.css';

const Home = () => (
  <>
    <ScrollReveal />
    <Navbar />
    <Hero />
    <FeaturesGrid />
    <FocusSection />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/montaza" element={<MontazaDetail />} />
          <Route path="/projects/medical-cabinet" element={<MedicalCabinetDetail />} />
          <Route path="/projects/medical-cabinet-web" element={<MedicalCabinetWebDetail />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
