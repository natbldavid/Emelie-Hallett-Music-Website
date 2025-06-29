import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HomeScreen from '../components/maincontent/homescreen/homescreen';
import AboutUsScreen from '../components/maincontent/aboutusscreen/aboutusscreen';
import ContactUsScreen from '../components/maincontent/contactusscreen/contactusscreen';
import SongsListScreen from '../components/maincontent/songslistscreen/songslistscreen';
import TestimonialsScreen from '../components/maincontent/testimonialsscreen/testimonialsscreen';
import ScrollToTop from '../components/scrolltop';
import ReviewSection from '../components/ratings/ratings';
import './layout.css';

const Layout = () => {
  return (
   <Router>
  <ScrollToTop />
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow main-content">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUsScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
        <Route path="/songslist" element={<SongsListScreen />} />
        <Route path="/testimonials" element={<TestimonialsScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </main>
    <ReviewSection />
    <Footer />
  </div>
</Router>
  );
};

export default Layout;