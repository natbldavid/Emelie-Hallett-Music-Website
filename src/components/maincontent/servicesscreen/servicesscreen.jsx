import React, { useState } from 'react';
import heroImage from '../../../assets/kingshomescreenphoto.jpg';
import handyman from '../../../assets/kingshandyman.jpg';
import painting from '../../../assets/kingspaintingdecorating.jpg';
import gardening from '../../../assets/kingsgardening.jpg';

const ServicesScreen = () => {
  const [showMore, setShowMore] = useState({
    handyman: false,
    painting: false,
    gardening: false,
  });

  const toggle = (type) => {
    setShowMore((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="services-screen">
      {/* Section 1: Hero */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center text-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-2xl">Hassle-free home improvements</p>
        </div>
      </div>

      {/* Section 2: Service Cards */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Handyman */}
          <div className="service-card">
            <img src={handyman} alt="Handyman Work" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2">Handyman Work</h2>
            <p className="text-lg mb-2">
              We take care of everyday tasks around your home — whether it’s fixing shelves, assembling furniture, or handling odd jobs.
            </p>
            {showMore.handyman && (
              <p className="text-lg mb-2">
                Our handyman service is ideal for general maintenance, carpentry, minor plumbing or electrical repairs, floorboard replacement, tiling, and more.
              </p>
            )}
            <button
              onClick={() => toggle('handyman')}
              className="text-orange-500 underline hover:text-orange-700 transition-colors"
            >
              {showMore.handyman ? 'Show Less' : 'Show More'}
            </button>
          </div>

          {/* Painting */}
          <div className="service-card">
            <img src={painting} alt="Painting & Decorating" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2">Painting & Decorating</h2>
            <p className="text-lg mb-2">
              Freshen up your walls, ceilings, doors, and more with our painting & decorating service.
            </p>
            {showMore.painting && (
              <p className="text-lg mb-2">
                We use high-quality materials and deliver precision work for interior & exterior painting, wallpapering, and decorative finishes tailored to your home’s look.
              </p>
            )}
            <button
              onClick={() => toggle('painting')}
              className="text-orange-500 underline hover:text-orange-700 transition-colors"
            >
              {showMore.painting ? 'Show Less' : 'Show More'}
            </button>
          </div>

          {/* Gardening */}
          <div className="service-card">
            <img src={gardening} alt="Landscaping & Gardens" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2">Landscaping & Gardens</h2>
            <p className="text-lg mb-2">
              From general garden maintenance to larger landscaping projects, we do it all.
            </p>
            {showMore.gardening && (
              <p className="text-lg mb-2">
                Services include lawn care, hedge trimming, decking, fencing, raised beds, turf laying, and more — all designed to transform your outdoor space.
              </p>
            )}
            <button
              onClick={() => toggle('gardening')}
              className="text-orange-500 underline hover:text-orange-700 transition-colors"
            >
              {showMore.gardening ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;