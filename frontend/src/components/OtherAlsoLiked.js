import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OtherAlsoLiked = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate(); // Use the useNavigate hook from react-router-dom

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/bookthreads');
        const data = response.data;
        if (data.success && Array.isArray(data.data)) {
          setBooks(data.data); // Access the array inside the data object
        } else {
          console.error('Data is not an array or success flag is false:', data);
        }
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };
  
    fetchBooks();
  }, []);

  const handleClick = (url) => {
    navigate(url);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Responsive carousel settings
  const settings = {
    dots: false, // Enable dots for navigation
    infinite: true, // Enable infinite scrolling
    speed: 500,
    slidesToShow: 2, // Default to 5 slides
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280, // Extra-large screens (xl)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Large screens (lg)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium screens (md)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Small screens (sm)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile screens (xs)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-4 bg-gray-200 px-4 pt-4 pb-[25px] h-auto"> {/* Set carousel height */}
      <div className="flex justify-center items-center mb-4">
        <FaStar className="text-red-500 mr-2" />
        <h2 className="text-red-500 font-bold text-lg">OTHERS ALSO LIKED</h2>
      </div>

      <Slider {...settings} className="mx-4">
        {books.map((book) => (
          <div key={book._id} className="px-2"> {/* Add padding or margin for gap */}
            <div className="bg-white shadow-lg flex flex-row gap-4 h-[182px] w-full p-2 text-[12px] font-bold overflow-hidden"> {/* Set card height */}
              <img
                src={book.image}
                alt={book.title}
                className="w-[100px] h-[150px] object-cover rounded-sm"
              />
              <div className='flex flex-col gap-2'>
                <h1>
                  <span
                    onClick={() => handleClick(`/fiction/${book._id}/${book.title}`)}
                    className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer"
                  >
                    {book.title}
                  </span>
                </h1>
                <p className='text-[10px] font-thin'>The Administrator class crest has been shattered. The hunt for the shards is on.
                Leo is no stranger to suffering.</p>
              </div>
            </div>
            <div className='bg-blue-950 w-full h-[28px] flex justify-center items-center'>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < book.stats.rating.overall
                        ? "text-orange-500"
                        : "text-gray-400"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OtherAlsoLiked;