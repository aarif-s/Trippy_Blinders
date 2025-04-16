// import React from 'react'
// import { Link } from 'react-router-dom'

// const AboutUs = () => {
//   return (
//     <section className="py-16 bg-light">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">About Us</h2>
//           <p className="text-gray-600 mb-8">
//             Step into a world of adventure with Capture A Trip, where every journey is an opportunity
//             to connect, explore, and discover. Curating unforgettable travel experiences since 2016.
//           </p>
//           <Link
//             to="/about"
//             className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
//           >
//             View More
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutUs







import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1585920971517-fc35e77f1f65?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3';

  return (
    <section
      className="relative  py-14  bg-light bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6  ">About Us</h2>
          <p className="text-lg mb-8">
            Step into a world of adventure with Capture A Trip, where every journey is an opportunity
            to connect, explore, and discover. Curating unforgettable travel experiences since 2016.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
