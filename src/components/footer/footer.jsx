import React from 'react';
import logo from '../../assets/OfficialEmelieHallettLogo.png';
import manateeicon from '../../assets/TeamManateeLogo.png';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-100 text-black px-8 pt-16 pb-6">
      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left justify-items-center md:justify-items-start">
        {/* Section 1: Get In Touch */}
        <div className="w-full max-w-xs">
          <h3 className="text-xl font-semibold mb-2 relative inline-block footer-title">Get In Touch</h3>
                    <div className="footercontact-detail contact-text flex items-center gap-2">
                      <FaPhoneAlt className="text-pink-500"/>
                      <span>07799634410</span>
                    </div>
                    <div className="footercontact-detail contact-text flex items-center gap-2">
                      <MdMail className="text-pink-500"/>
                      <span>emelie.hallett@yahoo.com</span>
                    </div>
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
          <button
            onClick={() => navigate('/contact')}
            className="mt-3 text-[#FF69B4] underline hover:text-pink-600 transition-colors text-sm"
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
            <li>Surrey</li>
            <li>Sussex</li>
          </ul>
        </div>

        {/* Section 3: Logo + Copyright */}
        <div className="w-full max-w-xs flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-24 h-auto mb-2" />
          <p className="text-sm text-center md:text-left mt-2">
            © 2025 | Emelie Hallett Music<br />
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
