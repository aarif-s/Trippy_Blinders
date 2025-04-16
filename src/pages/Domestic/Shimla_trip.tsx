import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm';
import DomesticTrips from '../../components/DomesticTrips';


const trips = [
  { id: 1, day: 'Day 1', title: 'LEH ARRIVAL | ACCLIMATIZATION', description: 'Overnight stay at Leh.' },
  { id: 2, day: 'Day 2', title: 'VISIT SHANTI STUPA, MAGNETIC HILL & PATHAR SAHIB GURUDWARA', description: 'Overnight stay at Leh.' },
  { id: 3, day: 'Day 3', title: 'LEH TO KHARDUNG LA - HUNDER - NUBRA VALLEY - DISKIT', description: 'Overnight stay at Nubra Valley.' },
  { id: 4, day: 'Day 4', title: 'NUBRA - TURTUK - NUBRA', description: 'Overnight stay at Nubra Valley.' },
  { id: 5, day: 'Day 5', title: 'NUBRA TO PANGONG TSO LAKE VIA SHYOK VALLEY', description: 'Overnight stay at Pangong Tso.' },
];

const inclusions = [
  { id: 1, category: 'Stay', description: 'Accommodation in Double / Triple Sharing rooms in Hotels / Camps.' },
  { id: 2, category: 'Meal', description: 'A total of 12 meals: Day 1 (D), Day 2 (B+D), Day 3 (B+D), Day 4 (B+D), Day 5 (B+D), Day 6 (B+D), Day 7 (B).' },
  { id: 3, category: 'Other Inclusions', description: 'Bike rent with fuel for 5 days from Day 2 to Day 6 (For Biking option).' },
];

const exclusions = [
  { id: 1, description: 'Airfare and travel insurance.' },
  { id: 2, description: 'Any expenses not specifically mentioned under inclusions.' },
  { id: 3, description: 'Personal expenses like shopping, tips, and extra meals.' },
];

const galleryImages = [
  'https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg',
  'https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg',
  'https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2',
  'https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg',
  'https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg',
  'https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2',
];

const Shimla_trip = () => {
  const [activeTab, setActiveTab] = useState('Inclusion');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    // Add type for the index parameter
    const openImage = (index: number) => {
      setCurrentIndex(index);
      setSelectedImage(galleryImages[index]);
    };
  
    const closeImage = () => {
      setSelectedImage(null);
    };
  
    const prevImage = () => {
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setCurrentIndex(prevIndex);
      setSelectedImage(galleryImages[prevIndex]);
    };
  
    const nextImage = () => {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setCurrentIndex(nextIndex);
      setSelectedImage(galleryImages[nextIndex]);
    };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Banner Section with Background and Form */}
      <div
        className="relative w-full h-auto lg:h-[70vh] bg-cover bg-center rounded-lg shadow-xl mb-12"
        style={{
          backgroundImage:
            'url("https://storage.googleapis.com/stateless-www-justwravel-com/2024/09/dd5f41a7-places-to-visit-in-manali--1024x668.png")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 rounded-lg flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-0 text-center lg:text-left pt-16">
          <div className="text-white max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Explore the Beauty of <span className="text-yellow-400">Shimla Trip</span>
            </h1>
            <p className="text-lg text-gray-300">
              Discover incredible Domestic travel destinations and make lasting memories. Book your next adventure with us!
            </p>
          </div>
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-auto rounded-lg  lg:ml-6">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Itinerary & Inclusions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Explore <span className="text-blue-500">Upcoming Foreign Trips</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-700">Itinerary</h3>
                <div className="space-y-4">
                  {trips.map((trip) => (
                    <div key={trip.id} className="border border-gray-300 rounded-lg">
                      <button className="w-full text-left p-4 bg-gray-50 hover:bg-blue-50 rounded-lg focus:outline-none">
                        <h4 className="text-lg font-semibold">{trip.day} | {trip.title}</h4>
                        <p className="text-gray-600 mt-2">{trip.description}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-6">
                  <button
                    className={`w-1/2 text-center py-2 rounded-t-lg ${activeTab === 'Inclusion' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveTab('Inclusion')}
                  >
                    Inclusion
                  </button>
                  <button
                    className={`w-1/2 text-center py-2 rounded-t-lg ${activeTab === 'Exclusion' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
                    onClick={() => setActiveTab('Exclusion')}
                  >
                    Exclusion
                  </button>
                </div>
                <div className="p-4 bg-gray-50 border-t-2 border-blue-500 rounded-b-lg">
                  {activeTab === 'Inclusion' ? (
                    <ul className="space-y-4">
                      {inclusions.map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <span className="text-blue-500 font-semibold">{item.category}:</span>
                          <span className="text-gray-700">{item.description}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-4">
                      {exclusions.map((item) => (
                        <li key={item.id} className="text-gray-700">
                          {item.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Section with Enhanced Modal */}
            <section className="py-16 bg-gray-50">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Gallery of <span className="text-blue-500">Past Kashmir Trips</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openImage(index)}
                  >
                    <img
                      src={image}
                      alt={`Kashmir Trip ${index + 1}`}
                      className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <p className="text-white text-lg font-semibold">View Image</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal for Enlarged Image */}
              {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                  <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeImage}>&times;</button>
                  <div className="flex items-center justify-center relative w-full max-w-4xl">
                    <button
                      className="absolute left-2 md:left-5 text-white text-3xl"
                      onClick={prevImage}
                    >
                      &#10094;
                    </button>
                    <img
                      src={selectedImage}
                      alt="Enlarged View"
                      className="w-full max-h-[80vh] object-contain rounded-lg"
                    />
                    <button
                      className="absolute right-2 md:right-5 text-white text-3xl"
                      onClick={nextImage}
                    >
                      &#10095;
                    </button>
                  </div>
                </div>
              )}
            </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
               {/* Responsive Grid for Cards */}
                <div>
                 <DomesticTrips />
                </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shimla_trip;
