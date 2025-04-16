import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogItem {
  id: number;
  title: string;
  image: string;
  description: string;
  path: string;
}

const blogData: BlogItem[] = [
    {
        id: 1,
        title: 'Adventures in Ladakh',
        image: 'https://img.freepik.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg',
        description: 'Thrilling bike trips, ancient monasteries, and Pangong Lake in Ladakh.',
        path: '/blog/ladakh',
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
  {
    id: 4,
    title: 'Romantic Escapes in Manali',
    image: 'https://img.freepik.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg',
    description: 'Snow adventures, cozy cafes, and riverside romance in Manali.',
    path: '/blog/manali',
  },
  {
    id: 5,
    title: 'The Heritage of Jaipur',
    image: 'https://img.freepik.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg',
    description: 'Forts, palaces, and vibrant markets in the Pink City of Jaipur.',
    path: '/blog/jaipur',
  },
  {
    id: 6,
    title: 'Sunsets & Beaches of Goa',
    image: 'https://img.freepik.com/free-photo/beautiful-view-rice-fields-lush-green-leepa-valley-kashmir-pakistan_505751-5825.jpg',
    description: 'Golden beaches, water sports, seafood and nightlife in Goa.',
    path: '/blog/goa',
  }
];

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Travel Blogs</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate(blog.path)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
