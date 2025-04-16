import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'International Trips',
    image: 'https://lebensart-sh.de/wp-content/uploads/2022/05/Opener1.jpeg',
    link: '/international',
  },
  {
    id: 2,
    title: 'Domestic Trips',
    image: 'https://cdn1.tripoto.com/media/filter/tst/img/1429685/Image/1581687460_4manali.jpg',
    link: '/domestic',
  },
  {
    id: 3,
    title: 'Weekend Trips',
    image: 'https://imgcld.yatra.com/ytimages/image/upload/v1554203593/AdvNation/ANN_TRP772/uttarakhand_motorcycle_tour_2zdPJv.jpg',
    link: '/weekend',
  },
  {
    id: 4,
    title: 'Honeymoon Trips',
    image: 'https://www.gtholidays.in/wp-content/uploads/2022/02/India-Honeymoon-Packages.jpg',
    link: '/honeymoon',
  },
];

const CuratedCategories = () => {
  return (
    <section className="py-10 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Curated Categories
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] transition-transform duration-300 hover:scale-105"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Gradient Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                <h3 className="text-white   sm:text-base font-semibold">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCategories;
