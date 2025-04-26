 
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trips = [
  {
    id: 1,
    title: 'Azerbaijan (Baku) Tour',
    image:
      'https://images.unsplash.com/photo-1674857977971-131936c7b5ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/azerbaizan_baku_tour',
  },
  {
    id: 2,
    title: 'Bhutan Tour',
    image:
      'https://images.unsplash.com/photo-1578556881786-851d4b79cb73?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/bhutan_tour',
  },
  {
    id: 3,
    title: 'Dubai Tour',
    image:
      'https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/dubai_tour',
  },
    {
      id: 4,
      title: 'Georgia Tour',
      image:
        'https://images.unsplash.com/photo-1565008576549-57569a49371d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '4 Nights 5 Days',
      price: '₹12,999',
      originalPrice: '₹15,999',
      link: '/international/georgia_tour',
    },
    {
      id: 5,
      title: 'Malaysia Tour',
      image:
        'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      duration: '4 Nights 5 Days',
      price: '₹12,999',
      originalPrice: '₹15,999',
      link: '/international/malaysia_tour',
    },
  {
    id: 6,
    title: 'Russia Tour',
    image:
      'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
]

const InternationalTripsRecommend = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards on screen
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10  bg-gray-100">
      {/* Slick Carousel arrow overrides */}
      <style>
        {`
          .slick-prev, .slick-next {
            width: 50px;
            height: 50px;
            z-index: 10;
            background-color: rgba(200, 200, 200, 0.9);
            border-radius: 50%;
          }
          .slick-prev::before, .slick-next::before {
            font-size: 28px;
            color: #333;
          }
          .slick-prev {
            left: -60px;
          }
          .slick-next {
            right: -60px;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
          Upcoming Foreign Trips
        </h2>

        <Slider {...settings}>
          {trips.map((trip) => (
            <div key={trip.id} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Link to={trip.link} className="block relative">
                  {/* 
                    Wrap the image in a relative container, 
                    so we can absolutely-position the duration badge.
                  */}
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* Duration badge in the top-left corner */}
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-br-lg rounded-tl-lg shadow">
                    {trip.duration}
                  </div>

                  {/* Card content */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                    <div className="flex items-baseline mb-1">
                      <span className="text-2xl font-bold text-blue-500">
                        {trip.price}
                      </span>
                      <span className="ml-2 text-gray-500 line-through">
                        {trip.originalPrice}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Request Callback Button */}
                <div className="p-6 pt-0">
                  <Link to="/contact">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Request Callback
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InternationalTripsRecommend;
