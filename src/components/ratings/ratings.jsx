import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

const Ratings = () => {
  const reviews = [
    {
      text: "Emelie sang our first dance song at our wedding and made a special moment even more beautiful with her gorgeous singing. We were so pleased and would recommend her to anyone.",
      author: "Henri & Rebecca, Oxford",
      rating: 5,
    },
    {
      text: "Highly recommend Emelie, a beautiful voice and a joy to have at our event.",
      author: "Lisa, Guildford",
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
  const intervalRef = useRef(null);

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

  // Swipe support
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      resetAutoSlide();
      handleNextReview();
    },
    onSwipedRight: () => {
      resetAutoSlide();
      handlePrevReview();
    },
    trackMouse: true,
  });

  // Auto slide every 3 seconds
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNextReview();
    }, 3000); // Change every 3 seconds
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="bg-white py-20 px-8 md:px-20">
      <h2 className="text-3xl font-elegant font-bold mb-12 text-center text-[#FF69B4]">
        My Testimonials
      </h2>

      <div
        className="review-container flex items-center justify-center relative"
        {...swipeHandlers}
      >
        {/* Left Arrow — hidden on small screens */}
        <button
          className="review-button absolute left-0 text-4xl px-4 hidden sm:block"
          onClick={() => {
            resetAutoSlide();
            handlePrevReview();
          }}
        >
          &#10094;
        </button>

        <div
          key={currentReviewIndex}
          className={`review-slide transition-all duration-500 ease-in-out max-w-3xl text-center px-4 ${
            direction === 'next' ? 'slide-left' : 'slide-right'
          }`}
        >
<p className="sm:text-xl mb-4 px-4 line-clamp-5 h-[8rem] flex items-center justify-center text-center">
  “{reviews[currentReviewIndex].text}”
</p>
          <div className="text-yellow-500 mb-4 text-lg sm:text-2xl">
            {'★'.repeat(reviews[currentReviewIndex].rating)}
          </div>
          <p className="text-base sm:text-lg text-gray-500">
            {reviews[currentReviewIndex].author}
          </p>
        </div>

        {/* Right Arrow — hidden on small screens */}
        <button
          className="review-button absolute right-0 text-4xl px-4 hidden sm:block"
          onClick={() => {
            resetAutoSlide();
            handleNextReview();
          }}
        >
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentReviewIndex ? 'bg-[#FF69B4]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Ratings;
