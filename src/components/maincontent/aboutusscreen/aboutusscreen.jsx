import React from 'react';
import './aboutusscreen.css';
import emeliehomescreenphoto from '../../../assets/emeliehomescreenphotoofficial.webp';
import kingsaboutusmiddle from '../../../assets/emeliesingingwhite.jpg';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

const AboutUsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
{/* Section 1 */}
<div className="relative w-full h-[60vh] text-center text-white overflow-hidden">
  <img
    src={emeliehomescreenphoto}
    alt="Emelie Hallett performing"
    loading="lazy"
    className="absolute inset-0 w-full h-full object-cover object-[center_80%] z-0"
  />
  <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h1 className="text-5xl font-romantic mb-4 flex items-center justify-center gap-2">
      About Me
    </h1>
    <p className="text-2xl font-elegant mb-4">Professional singer for your special days</p>

    {/* Social Icons */}
    <div className="flex gap-6">
      <a
        href="https://www.instagram.com/emeliehallett/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-300 transition-colors"
      >
        <FaInstagram size={28} />
      </a>
      <a
        href="https://www.tiktok.com/@emeliehallettmusic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="hover:text-pink-300 transition-colors"
      >
        <FaTiktok size={28} />
      </a>
    </div>
  </div>
</div>

      {/* Combined About Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Column */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-bold mb-8 text-pink-300">Hey, I'm Emelie</h2>
            <p className="text-lg mb-4">
              I'm a professional singer based in Hampshire (and surrounding areas), and I absolutely love bringing live music to life’s most special moments.
            </p>
            <p className="text-lg mb-4">
              Whether I’m singing you down the aisle, setting the mood during your reception, or making your first dance one to remember, I tailor every performance to fit your vision.
            </p>
            <p className="text-lg mb-4">
              I also perform at pub and restaurants for relaxed acoustic evenings.
            </p>
            <p className="text-lg mb-6">
              Over the years, I’ve performed at weddings, birthdays, corporate events, and cozy local evenings. I bring great music, good energy, and a relaxed, professional vibe to every event.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="text-pink-400 underline hover:text-pink-600 transition-colors text-lg"
            >
              Contact me for a quote
            </button>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2 w-full h-full">
            <img
              src={kingsaboutusmiddle}
              alt="Emelie Singing"
              className="w-full h-auto max-h-[500px] object-cover object-[center_20%] rounded-[24px] shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <hr className="border-t-2 border-black shadow-lg" />
    </div>
  );
};

export default AboutUsScreen;