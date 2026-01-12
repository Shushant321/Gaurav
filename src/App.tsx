import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import CaseStudyGlammonn from './pages/CaseStudyGlammonn';
import CaseStudyEntrepreneurship from './pages/CaseStudyEntrepreneurship';
import CaseStudyEducation from './pages/CaseStudyEducation';
// import Blog from './pages/Blog';
import AnkitKumar from './pages/AnkitKumar';
import PrakashManipuri from './pages/PrakashManipuri';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/case-study/glammonn" element={<CaseStudyGlammonn />} />
              <Route path="/case-study/entrepreneurship" element={<CaseStudyEntrepreneurship />} />
              <Route path="/case-study/education" element={<CaseStudyEducation />} />
              <Route path="/team/ankit-kumar" element={<AnkitKumar />} />
              <Route path="/team/prakash-manipuri" element={<PrakashManipuri />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;