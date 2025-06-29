import React, { useState } from 'react';
import emeliehomescreenphoto from '../../../assets/emeliehomescreenphotoofficial.webp';
import niceemeliesitting from '../../../assets/niceemeliechair.jpg';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import songCategories from '../../../config/songListConfig'; // <- Import config

const SongListScreen = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="services-screen bg-[#FFF8F9]">

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
            Songs List
          </h1>
          <p className="text-2xl font-elegant mb-4">Professional singer for your special days</p>

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

      {/* Section 2 */}
      <div className="py-20 px-8 md:px-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Here's a list of the songs I can sing for your events.</h2>
          <p className="text-lg text-gray-600">
            These aren't fixed, and any song can be requested for any event. Also, I'm always happy to learn new songs, so request whatever you want.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Accordion List */}
          <div className="md:w-1/2 w-full space-y-4">
            {songCategories.map(({ key, title, songs }) => (
              <div key={key} className="border rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full text-left px-8 py-6 bg-pink-300 hover:bg-pink-400 text-white text-xl md:text-2xl font-semibold transition-all duration-300"
                >
                  {title}
                </button>
                <div
                  className={`px-6 overflow-scroll transition-all duration-300 ${
                    openSections[key]
                      ? 'max-h-[500px] py-4 opacity-100'
                      : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <ul className="text-md space-y-2">
                    {songs.map((song, i) => (
                      <li key={i}>{song}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={niceemeliesitting}
              alt="Emelie Sitting"
              className="w-full h-auto rounded-2xl shadow-lg object-cover max-h-[700px]"
            />
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-black shadow-lg" />
    </div>
  );
};

export default SongListScreen;