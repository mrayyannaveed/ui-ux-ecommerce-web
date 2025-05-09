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
}

const Testimonals = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Product Manager',
      content: 'This product has completely transformed our workflow. The ease of use and powerful features are unmatched in the market.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'UX Designer',
      content: 'I was skeptical at first, but after using it for a week, I can confidently say this is the best tool for designers.',
      rating: 4
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Developer',
      content: 'The API integration was seamless and the documentation is excellent. Saved us countless hours of development time.',
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Marketing Director',
      content: 'Our campaign performance improved dramatically after implementing this solution. Highly recommended!',
      rating: 5
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'CEO',
      content: 'As a business owner, I appreciate tools that just work. This one delivers on its promises without any hassle.',
      rating: 4
    },
    {
      id: 6,
      name: 'Emily Davis',
      role: 'Content Creator',
      content: 'The intuitive interface makes it easy to create professional content without a steep learning curve.',
      rating: 5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  const heading = "OUR HAPPY CUSTOMERS"
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className=""><Heading hname={heading}/></h2>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
              <p className="text-gray-600 italic pl-8">{review.content}</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {review.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;