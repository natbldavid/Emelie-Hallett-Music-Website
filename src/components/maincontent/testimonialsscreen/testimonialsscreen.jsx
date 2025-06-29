import React, { useState } from 'react';
import './testimonialsscreen.css';
import emeliehomescreenphoto from '../../../assets/emeliehomescreenphotoofficial.webp';
import { GiMicrophone } from "react-icons/gi";
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import reviews from '../../../config/reviewsConfig'; // adjust path as needed

const TestimonialsScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    review: '',
    rating: 5,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [justSubmitted, setJustSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setJustSubmitted(true);

    if (!executeRecaptcha) {
      alert('Recaptcha not ready');
      return;
    }

    const token = await executeRecaptcha('submit_testimonial');

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/testimonials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captcha: token })
      });

      const result = await res.json();

      if (res.ok) {
        setFormData({ name: '', location: '', review: '', rating: 5 });
      } else {
        alert(result.error || 'Submission failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting testimonial');
    }
  };

  return (
    <div className="testimonials-screen bg-[#FFF8F9]">
      {/* Hero Section */}
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
            Testimonials
            <span><GiMicrophone size={40} /></span>
          </h1>
          <p className="text-2xl font-elegant mb-4">Professional singer for your special days</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/emeliehallett/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.tiktok.com/@emeliehallettmusic" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#FF69B4] mb-6">What People Say</h2>
          <div className="overflow-y-auto max-h-[480px] pr-2 space-y-6">
            {currentReviews.map((review, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-sm border border-gray-200">
                <p className="text-lg">“{review.text}”</p>
                <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
                <p className="text-sm text-gray-500 mt-2">- {review.author}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border rounded transition ${
                  currentPage === i + 1
                    ? 'border-pink-500 text-pink-500 font-semibold'
                    : 'border-gray-300 text-gray-500 hover:border-pink-400 hover:text-pink-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Review Submission */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded shadow-md border border-gray-200 h-[520px] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#FF69B4] mb-6">Leave a Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                name="review"
                placeholder="Your Review"
                value={formData.review}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
                rows={4}
                required
              />

              <div>
                <label className="block mb-2 font-medium text-gray-700">Rating:</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                      className={`text-2xl ${
                        star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                      } hover:text-yellow-500 transition`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">{formData.rating} out of 5</p>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded transition"
              >
                Submit Review
              </button>
                        {justSubmitted && (
+             <p className="mt-2 text-green-600">
                Thank you for your submission. It is now being processed.
              </p>
            )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsScreen;