// src/components/navbar/navbar.jsx

import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/OfficialEmelieHallettLogo.png';
import smallLogo from '../../assets/realsmalllogo.png';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      if (isScrolled) {
        document.body.classList.add('navbar-overlay-mode');
      } else {
        document.body.classList.remove('navbar-overlay-mode');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Song List', path: '/songslist' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <NavLink to="/" end>
          <img
            src={scrolled ? smallLogo : logo}
            alt="Logo"
            className="navbar-logo"
          />
        </NavLink>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.path} className="navbar-item">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                }
                end={item.path === '/'}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-contact">
          <p className="contact-text flex items-center gap-2">
            <FaPhoneAlt className="text-pink-500" /> 07799634410
          </p>
          <p className="contact-text flex items-center gap-2">
            <MdMail className="text-pink-500" /> emelie.hallett@yahoo.com
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/emeliehallett/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-3 text-pink-500 hover:text-pink-300 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@emeliehallettmusic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="mt-3 text-pink-500 hover:text-pink-300 transition-colors"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="navbar-overlay">
          <div className="overlay-content">
            <ul className="overlay-links">
              {navItems.map((item) => (
                <li key={item.path} className="overlay-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'overlay-link overlay-link-active' : 'overlay-link'
                    }
                    end={item.path === '/'}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              className="overlay-close-button"
              onClick={() => setMenuOpen(false)}
            >
              Close ✕
            </button>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/emeliehallett/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="mt-3 text-pink-500 hover:text-pink-300 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@emeliehallettmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="mt-3 text-pink-500 hover:text-pink-300 transition-colors"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
