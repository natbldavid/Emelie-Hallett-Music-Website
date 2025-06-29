import React from 'react';
import './homescreen.css';
import emeliehomescreenphoto from '../../../assets/emeliehomescreenphotoofficial.webp';
import emelieweddingphoto from '../../../assets/weddingphoto.jpg';
import emeliepubphoto from '../../../assets/pubphoto.jpg';
import emeliecorporatephoto from '../../../assets/corporateeventsphoto.jpg';
import lovelyemeliesinging from '../../../assets/LovelyEmelieSinging.jpg';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen bg-[#FFF8F9]">
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
      Emelie Hallett Music
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


{/* Section 2 */}
<div className="py-20 px-8 md:px-20">
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2">
<img
  src={lovelyemeliesinging}
  alt="Emelie performing"
  className="w-96 h-96 md:w-120 md:h-120 object-cover rounded-full shadow-lg mx-auto"
/>
    </div>

    {/* Right Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-elegant font-bold mb-6 text-[#FF69B4]">About Me</h2>
      <p className="text-lg mb-4">
        Hi! My names Emelie. I am a professional singer who started singing at events in 2021. I began my career by busking in nearby High Streets which I started due to a love of performing, but I didn't know how to get myself out there. In 2021 I took the leap to create my own company and start doing singing professionally at events - a decision I'm so, so grateful I made.
      </p>
      <p className="text-lg mb-4">
        Mainly operating around Hampshire, Surrey and Sussex, I regularly do weddings, corporate events and pub evenings.
      </p>
      <p className="text-lg">
        I can make sure your special day is even more special with a varied and vast songs list to suit your needs. Over the years, I've sung the bride down the aisle; sung married couples first dance song; performed at corporate events; sung at restaurants and much, much more.
      </p>
    </div>
  </div>
</div>

      <hr className="border-t-2 border-[#FF69B4] shadow-lg" />

      {/* Section 2.5: YouTube Video */}
<div className="flex justify-center px-4 md:px-20 py-12">
  <div className="w-full max-w-4xl aspect-video shadow-lg rounded-lg overflow-hidden">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/4TmLRU5gP_8?si=NyZVj77a73raY2Oi" // Replace with your YouTube link
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

<hr className="border-t-2 border-[#FF69B4] shadow-lg" />

      {/* Section 3 */}
      <div className="py-20 px-8 md:px-20">
        <h2 className="text-3xl font-elegant font-bold mb-12 text-center text-[#FF69B4]">What I do</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="service-card">
            <img src={emelieweddingphoto} alt="Handyman Work" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Weddings</h3>
            <p className="text-lg mb-4">I can perform during your wedding reception; the first dance song; or walking down the aisle. I will do what you request and how you request it.</p>
          </div>
          <div className="service-card">
            <img src={emeliepubphoto} alt="Painting & Decorating" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Pubs & Restaurants</h3>
            <p className="text-lg mb-4">Want a relaxed atmosphere with melodic and chilled background singing? I've got you covered.</p>
          </div>
          <div className="service-card">
            <img src={emeliecorporatephoto} alt="Landscaping & Gardens" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Corporate & Social Events</h3>
            <p className="text-lg mb-4">Whether it's a birthday party, or a corporate gathering, I can sing the songs you request to create the environment you wish for.</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/about')}
          className="mt-8 bg-[#FF69B4] text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-all"
        >
          Read More
        </button>
      </div>

      {/* Section 4: Stats Section */}
<div className="bg-pink-300 text-[#fff] py-16 px-8 md:px-20">
  <div className="grid gap-12 md:grid-cols-3 text-center">
    <div>
      <h3 className="text-4xl font-extrabold mb-2">4+</h3>
      <p className="text-lg">Years of Experience</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold mb-2">100+</h3>
      <p className="text-lg">Songs in Repertoire</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold mb-2">250+</h3>
      <p className="text-lg">Satisfied Guests</p>
    </div>
  </div>
</div>
   
      </div>
  );
};

export default HomeScreen;