import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'Adventures in Ladakh',
    image: 'https://img.freepik.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg',
    description: 'Thrilling bike trips, ancient monasteries, and Pangong Lake in Ladakh.',
    path: '/blog',
  },
  {
    id: 2,
    title: 'Explore the Beauty of Kashmir',
    image: 'https://img.freepik.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg',
    description: 'Snow-capped peaks, Shikara rides, and vibrant gardens await in Kashmir.',
    path: '/blog/kashmir',
  },
  {
    id: 3,
    title: 'The Magic of Kerala Backwaters',
    image: 'https://img.freepik.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg',
    description: 'Lush green landscapes and houseboat rides through tranquil waters.',
    path: '/blog/kerala',
  },
];

const Blog: React.FC = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        Travel Blogs
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={blog.path}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-52 md:h-56 object-cover"
            />
            <div className="p-4 sm:p-5">
              <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
