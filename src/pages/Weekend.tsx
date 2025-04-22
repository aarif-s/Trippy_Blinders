// Domestic.jsx
import React from 'react';
import DomesticTrips from '../components/DomesticTrips';
import ContactForm from '../components/ContactForm';
 


const Weekend = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Banner Section with Background and Form */}
      <div
        className="relative w-full h-auto lg:h-[70vh] bg-cover bg-center rounded-lg shadow-xl mb-12"
        style={{
          backgroundImage:
            'url("https://images.jdmagicbox.com/quickquotes/listicle/listicle_1689018148101_gvy93_7952x5304.jpg")',
        }}
      >
        {/* Overlay for Dark Effect */}
        <div className="w-full h-full bg-black bg-opacity-60 rounded-lg flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-0 text-center lg:text-left pt-16">
          {/* Text Content on Left */}
          <div className="text-white max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Explore the Beauty of <span className="text-yellow-400">Weekend Trips</span>
            </h1>
            <p className="text-lg text-gray-300">
              Discover incredible Weekend travel destinations and make lasting memories. Book your next adventure with us!
            </p>
          </div>

          {/* Contact Form - Below Text in Mobile, Right on Desktop */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-auto rounded-lg  lg:ml-6">
            <ContactForm />

          </div>
        </div>
      </div>

      {/* Grid Section for Upcoming Trips */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore <span className="text-blue-500">Upcoming Weekend Trips</span>
        </h1>

        {/* Responsive Grid for Cards */}
        <div>
           {/* <DomesticTrips />
            */}
        </div>
      </div>
    </div>
  );
};

export default Weekend;
