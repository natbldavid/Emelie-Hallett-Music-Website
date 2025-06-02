import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../assets/OfficialEmelieHallettLogo.png';
import smallLogo from '../../assets/realsmalllogo.png';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detect scroll for shrinking navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <NavLink to="/" end>
        <img
          src={scrolled ? smallLogo : logo}
          alt="Logo"
          className="navbar-logo"
        />
      </NavLink>

      <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
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
        <p className="contact-text">Call: 0121doone</p>
        <p className="contact-text">Email: maintenanceman@gmail.com</p>
      </div>

      <button
        className="navbar-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {menuOpen && (
        <div className="navbar-overlay">
          <ul className="overlay-links">
            {navItems.map((item) => (
              <li key={item.path} className="overlay-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'overlay-link navbar-link-active'
                      : 'overlay-link'
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
