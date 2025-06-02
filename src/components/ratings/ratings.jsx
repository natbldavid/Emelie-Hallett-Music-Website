import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Ratings = () => {
  const reviews = [
    {
      text: "Kings was great. He did everything I wanted and more.",
      author: "Mark, Staines",
      rating: 5,
    },
    {
      text: "Excellent service! Will definitely recommend.",
      author: "Sarah, London",
      rating: 5,
    },
    {
      text: "Professional and reliable. A pleasure to work with.",
      author: "John, Reading",
      rating: 5,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleNextReview = () => {
    setDirection('next');
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setDirection('prev');
    setCurrentReviewIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextReview,
    onSwipedRight: handlePrevReview,
    trackMouse: true,
  });

   return (
   <div className="bg-white py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-orange-500">What Our Customers Think</h2>
       <div className="review-container" {...swipeHandlers}>
  <button className="review-button" onClick={handlePrevReview}>
    &#10094;
  </button>

  {/* Animate only this box */}
  <div
    key={currentReviewIndex}
    className={`review-slide ${direction === 'next' ? 'slide-left' : 'slide-right'}`}
  >
    <p className="text-xl sm:text-2xl mb-4 text-center px-4">“{reviews[currentReviewIndex].text}”</p>
    <div className="text-yellow-500 mb-4 text-center text-lg sm:text-2xl">
      {'★'.repeat(reviews[currentReviewIndex].rating)}
    </div>
    <p className="text-base sm:text-lg text-gray-500 text-center">{reviews[currentReviewIndex].author}</p>
  </div>

  <button className="review-button" onClick={handleNextReview}>
    &#10095;
  </button>
</div>

{/* ✅ Move dots here — OUTSIDE the animated slide */}
<div className="mt-6 flex justify-center gap-2">
  {reviews.map((_, i) => (
    <div
      key={i}
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        i === currentReviewIndex ? 'bg-orange-500' : 'bg-gray-300'
      }`}
    />
  ))}
</div>
      </div>
  );
};

export default Ratings;