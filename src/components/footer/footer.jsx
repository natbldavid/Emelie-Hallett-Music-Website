import React from 'react';
import logo from '../../assets/OfficalLogo2Real.png';
import manateeicon from '../../assets/TeamManateeLogo.png';
import { FiPhone, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 text-black px-8 pt-16 pb-6">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left justify-items-center md:justify-items-start">
        {/* Section 1: Get In Touch */}
        <div className="w-full max-w-xs">
          <h3 className="text-xl font-semibold mb-2 relative inline-block footer-title">Get In Touch</h3>
                    <div className="footercontact-detail">
                      <FiPhone/>
                      <span>0121doone</span>
                    </div>
                    <div className="footercontact-detail">
                      <FiMail/>
                      <span>maintenanceman@gmail.com</span>
                    </div>
          <button
            onClick={() => navigate('/contact')}
            className="mt-4 text-orange-500 underline hover:text-orange-700 transition-colors text-sm"
          >
            Contact Us
          </button>
        </div>

        {/* Section 2: Locations */}
        <div className="w-full max-w-xs">
          <h3 className="text-xl font-semibold mb-2 relative inline-block footer-title">Locations</h3>
          <ul className="mt-4 space-y-1 text-sm">
            <li>Hampshire</li>
            <li>London</li>
            <li>Durham</li>
          </ul>
        </div>

        {/* Section 3: Logo + Copyright */}
        <div className="w-full max-w-xs flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-24 h-auto mb-2" />
          <p className="text-sm text-center md:text-left mt-2">
            © 2025 | Kings Building and Maintenance<br />
            All Rights Reserved
          </p>
        </div>
      </div>

      {/* Bottom Credit Bar */}
      <div className="mt-12 flex justify-center items-center text-xs text-gray-500 gap-2">
        <img src={manateeicon} alt="Manatee Icon" className="w-5 h-5" />
        <span>Created by Manatee Web Creation</span>
      </div>
    </footer>
  );
};

export default Footer;
