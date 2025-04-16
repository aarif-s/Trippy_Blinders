 
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trips = [
  {
    id: 1,
    title: 'Kedarnath Most Luxury',
    image: 'https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407.jpg',
    duration: '4 days, 3 nights',
    price: '₹12,999',
    originalPrice: '₹15,999',
    dates: ['Mar 25', 'Apr 2', 'Apr 10'],
    link: '/domestic/Kedarnath_trip',
  },
  {
    id: 2,
    title: 'Manali Adventure Trip',
    image:
      'https://himdarshantrip.com/wp-content/uploads/elementor/thumbs/Kullu-Manali-Honeymoon-q5qcpujxwcxywxzevew87uvdizh2zk87icp4xjtzow.jpg',
    duration: '6 days, 5 nights',
    price: '₹18,499',
    originalPrice: '₹21,999',
    dates: ['Mar 25', 'Apr 2', 'Apr 10'],
    link: '/domestic/Manali_trip',
  },
  {
    id: 3,
    title: 'Kashmir Backpacking',
    image: 'https://images.unsplash.com/photo-1584732200355-486a95263014?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '6 days, 5 nights',
    price: '₹19,999',
    originalPrice: '₹24,999',
    dates: ['Mar 20', 'Mar 27', 'Apr 3'],
    link: '/domestic/Kashmir_trip',
  },
  {
    id: 4,
    title: 'Leh-Ladakh Road Trip',
    image: 'https://cdn.audleytravel.com/-/-/79/1016845-leh-monastry-ladakh-india.jpg',
    duration: '9 days, 8 nights',
    price: '₹29,999',
    originalPrice: '₹34,999',
    dates: ['Apr 5', 'Apr 12', 'Apr 19'],
    link: '/domestic/LehLadakh_trip',
  },
  {
    id: 5,
    title: 'Goa Beach Vacation',
    image: 'https://www.holidify.com/images/bgImages/GOA.jpg',
    duration: '5 days, 4 nights',
    price: '₹15,999',
    originalPrice: '₹19,999',
    dates: ['Apr 10', 'Apr 17', 'Apr 24'],
    link: '/domestic/Goa_trip',
  },
  {
    id: 6,
    title: 'Kerala Tour',
    image:
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '8 days, 7 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    dates: ['Apr 8', 'Apr 15', 'Apr 22'],
    link: '/domestic/Kerala_trip',
  },
]

const UpcomingTrips = () => {
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
    <section className="py-16 bg-gray-100">
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
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Upcoming Trips
        </h2>

        <Slider {...settings}>
           {trips.map((trip) => (
                                <div key={trip.id} className="px-2 py-2">
                                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                                    <Link to={trip.link} className="block relative ">
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
                                      <div className="absolute px-2 top-2 left-2 bg-blue-500 text-white text-sm font-semibold lg:px-3 sm:px-2 py-1 rounded-br-lg rounded-tl-lg shadow">
                                        {trip.duration}
                                      </div>
                    
                                      {/* Card content */}
                                      <div className="lg:p-2 sm:p-3 pt-0">
                                        <h3 className=" text-xl  font-semibold px-2 py-1 mb-2">{trip.title}</h3>
                                        <div className="flex items-baseline mb-4 lg:mb-2 px-1">
                                          <span className="lg:text-2xl  sm:text-lg px-1  font-bold text-blue-500">
                                            {trip.price}
                                          </span>
                                          <span className="ml-2 text-gray-500 line-through">
                                            {trip.originalPrice}
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                    
                                    {/* Request Callback Button */}
                                    <div className="lg:p-4 sm:p-2 px-2 py-2  pt-0 ">
                                      <Link to="/contact">
                                        <button className="w-full  bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
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

export default UpcomingTrips;
