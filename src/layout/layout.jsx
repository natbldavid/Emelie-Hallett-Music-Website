import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HomeScreen from '../components/maincontent/homescreen/homescreen';
import AboutUsScreen from '../components/maincontent/aboutusscreen/aboutusscreen';
import ContactUsScreen from '../components/maincontent/contactusscreen/contactusscreen';
import ServicesScreen from '../components/maincontent/servicesscreen/servicesscreen';
import ScrollToTop from '../components/scrolltop';
import ReviewSection from '../components/ratings/ratings';
import './layout.css';

const Layout = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutUsScreen />} />
            <Route path="/contact" element={<ContactUsScreen />} />
            <Route path="/services" element={<ServicesScreen />} />
            <Route path="*" element={<HomeScreen />} /> {/* Fallback to Home */}
          </Routes>
        </main>
        <ReviewSection />
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;