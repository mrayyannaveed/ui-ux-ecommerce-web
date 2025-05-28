
"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import Heading from './heading';

interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

const Testimonals = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Samantha D.',
      role: 'Designer',
      content: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',
      rating: 5,
      date: 'Posted on August 14, 2023'
    },
    {
      id: 2,
      name: 'Alex M.',
      role: 'UI/UX Designer',
      content: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
      rating: 4,
      date: 'Posted on August 15, 2023'
    },
    {
      id: 3,
      name: 'Ethan R.',
      role: 'Designer',
      content: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt.',
      rating: 4,
      date: 'Posted on August 16, 2023'
    },
    {
      id: 4,
      name: 'Olivia P.',
      role: 'UI/UX Enthusiast',
      content: 'As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out.',
      rating: 4,
      date: 'Posted on August 17, 2023'
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'CEO',
      content: 'As a business owner, I appreciate tools that just work. This one delivers on its promises without any hassle.',
      rating: 4,
      date: 'Posted on August 18, 2023'
    },
    {
      id: 6,
      name: 'Emily Davis',
      role: 'Content Creator',
      content: 'The intuitive interface makes it easy to create professional content without a steep learning curve.',
      rating: 5,
      date: 'Posted on August 19, 2023'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  const heading = "RATING & REVIEWS";

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-14">
      <div className="flex justify-between items-center mb-8">
        <h2 className=""><Heading hname={heading}/></h2>
        <div className="flex items-center">
          <span className="text-gray-600 mr-4">All Reviews ({reviews.length})</span>
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Previous reviews"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Next reviews"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} w-5 h-5`}
                  />
                ))}
              </div>
            </div>
            <div className="relative mb-6">
              <FaQuoteLeft className="text-gray-200 text-3xl absolute -top-2 -left-1" />
              <p className="text-gray-600 pl-8">{review.content}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;