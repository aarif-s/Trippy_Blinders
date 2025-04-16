import React from 'react';

const Kashmir = () => {
  return (
    <div className="mt-16 bg-white text-gray-800">

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(https://www.holidify.com/images/bgImages/KASHMIR.jpg)' }}>
        <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Discover Paradise: Kashmir</h1>
          <p className="text-lg mt-4">A journey through the heaven on earth</p>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">Why Visit Kashmir?</h2>
        <p className="text-gray-700 text-lg">
          Nestled in the Himalayas, Kashmir is a region of breathtaking natural beauty, serene valleys,
          and cultural richness. From snow-covered mountains to crystal-clear lakes, every corner of Kashmir
          feels like a dream. Whether you're a nature lover, an adventure seeker, or a cultural explorer—
          Kashmir has something magical to offer.
        </p>
      </section>

      {/* Top Destinations */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Top Places to Visit</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: 'Srinagar',
              img: 'https://www.holidify.com/images/compressed/3897.jpg',
              desc: 'Famous for Dal Lake, houseboats, and Mughal gardens.'
            },
            {
              title: 'Gulmarg',
              img: 'https://www.holidify.com/images/compressed/3894.jpg',
              desc: 'Popular for skiing and the world’s highest golf course.'
            },
            {
              title: 'Pahalgam',
              img: 'https://www.holidify.com/images/compressed/3903.jpg',
              desc: 'A serene valley perfect for trekking, camping, and nature walks.'
            },
          ].map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <img src={place.img} alt={place.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600">{place.title}</h3>
                <p className="text-gray-600 mt-2">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Things to Do in Kashmir</h2>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-center text-gray-700">
          <li>🏔️ Gondola Ride in Gulmarg</li>
          <li>🛶 Shikara Ride on Dal Lake</li>
          <li>🎿 Snow Skiing</li>
          <li>🧭 Trekking in the Himalayas</li>
          <li>📷 Photography in Betaab Valley</li>
          <li>🕌 Visit Historic Mughal Gardens</li>
        </ul>
      </section>

      {/* Best Time to Visit */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Best Time to Visit</h2>
          <p className="text-gray-700">
            Kashmir is beautiful all year round. Visit in summer (April to June) for lush greenery and cool weather,
            or in winter (December to February) for snow activities and a white paradise.
          </p>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Travel Tips</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Carry warm clothes, especially in winter months.</li>
          <li>Always keep your ID proof with you.</li>
          <li>Respect the local culture and traditions.</li>
          <li>Book houseboats and hotels in advance during peak season.</li>
          <li>Check local travel advisories for weather and safety updates.</li>
        </ul>
      </section>

      {/* Gallery */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_354049572_20191213175400.jpg',
            'https://www.holidify.com/images/bgImages/GULMARG.jpg',
            'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1094153746_20191213175533.jpg',
            'https://www.holidify.com/images/cmsuploads/compressed/Pahalgam_New1_20170928120543.jpg',
            'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1017655065_20191213175701.jpg',
            'https://www.holidify.com/images/compressed/3897.jpg'
          ].map((url, index) => (
            <img key={index} src={url} alt="Kashmir View" className="rounded-lg object-cover w-full h-48" />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore Kashmir?</h2>
        <p className="mb-6">Plan your trip now and witness the mesmerizing beauty of the valley.</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Kashmir;
