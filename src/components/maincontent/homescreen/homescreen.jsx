import React from 'react';
import './homescreen.css';
import emeliehomescreenphoto from '../../../assets/emeliehomescreenphoto.jpg';
import kingshandymanworkphoto from '../../../assets/kingshandyman.jpg';
import kingspaintingdecoratingphoto from '../../../assets/kingspaintingdecorating.jpg';
import kingsgardeningphoto from '../../../assets/kingsgardening.jpg';
import lovelyemeliesinging from '../../../assets/LovelyEmelieSinging.jpg';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen bg-[#FFF8F9]">
      {/* Section 1 */}
<div
  className="relative w-full h-[50vh] bg-[center_80%] bg-cover text-center text-white"
  style={{ backgroundImage: `url(${emeliehomescreenphoto})` }}
>
  <div className="absolute inset-0 bg-black opacity-10"></div>
  <div className="relative z-10 flex flex-col items-center justify-center h-full">
    <h1 className="text-5xl font-romantic mb-4">Emelie Hallett Music</h1>
    <p className="text-2xl font-elegant">Professional singer for your special days</p>
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
        Hi! My names Emelie. I am a professional singer who started singing at events in 2021. 
      </p>
      <p className="text-lg mb-4">
        Mainly operating around Hampshire, Surrey and Sussex, I regularly do weddings, corporate events and pub evenings.
      </p>
      <p className="text-lg">
        I can make sure your special day even more special, or make your poopoo.
      </p>
    </div>
  </div>
</div>

<hr className="border-t-2 border-black shadow-lg" />

      <hr className="border-t-2 border-black shadow-lg" />

      {/* Section 3 */}
      <div className="py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-500">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="service-card">
            <img src={kingshandymanworkphoto} alt="Handyman Work" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Handyman Work</h3>
            <p className="text-lg mb-4">If you need handyman work, we've got you covered. From floorboards to tiling, we can do it.</p>
          </div>
          <div className="service-card">
            <img src={kingspaintingdecoratingphoto} alt="Painting & Decorating" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Painting & Decorating</h3>
            <p className="text-lg mb-4">Professional painting and decorating for homes and offices.</p>
          </div>
          <div className="service-card">
            <img src={kingsgardeningphoto} alt="Landscaping & Gardens" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Landscaping & Gardens</h3>
            <p className="text-lg mb-4">Transform your garden into a beautiful outdoor space.</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/about')}
          className="mt-8 bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-all"
        >
          Read More
        </button>
      </div>

      {/* Section 4: Stats Section */}
<div className="bg-black text-orange-400 py-16 px-8 md:px-20">
  <div className="grid gap-12 md:grid-cols-3 text-center">
    <div>
      <h3 className="text-4xl font-extrabold mb-2">30+</h3>
      <p className="text-lg">Years of Experience</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold mb-2">500+</h3>
      <p className="text-lg">Completed Projects</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold mb-2">1000+</h3>
      <p className="text-lg">Satisfied Clients</p>
    </div>
  </div>
</div>


      <hr className="border-t-2 border-black shadow-lg" />
   
      </div>
  );
};

export default HomeScreen;