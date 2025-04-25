import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import InternationalTripsRecommend from "../../components/InternationalTripsRecommend";
import LadakhGallery from "../../components/LadakhGallery";

const trips = [
    {
      id: 1,
      day: "Day 1",
      title: "Arrival in Vientiane",
      dayName: "Day 1",
      description: [
        {
          time: "Morning",
          activities: [
            "Arrive in Vientiane, Laos",
            "Private cab transfer to hotel and check-in",
            "Relax and explore the city at your leisure"
          ]
        },
        {
          time: "Evening",
          activities: [
            "Welcome dinner at a local restaurant featuring traditional Lao cuisine",
            "Overnight stay at the hotel in Vientiane"
          ]
        }
      ]
    },
    {
      id: 2,
      day: "Day 2",
      title: "Vientiane City Tour",
      dayName: "Day 2",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Guided city tour: Patuxai Arch, That Luang Stupa"
          ]
        },
        {
          time: "Afternoon",
          activities: [
            "Visit Buddha Park",
            "Relax by the Mekong River for a sunset view"
          ]
        },
        {
          time: "Evening",
          activities: [
            "Dinner at a local restaurant",
            "Overnight stay in Vientiane"
          ]
        }
      ]
    },
    {
      id: 3,
      day: "Day 3",
      title: "Transfer to Vang Vieng",
      dayName: "Day 3",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Private cab transfer to Vang Vieng"
          ]
        },
        {
          time: "Afternoon",
          activities: [
            "Hotel check-in and relaxation",
            "Explore Nam Song River and limestone karst landscapes"
          ]
        },
        {
          time: "Evening",
          activities: [
            "Dinner at a local restaurant",
            "Overnight stay in Vang Vieng"
          ]
        }
      ]
    },
    {
      id: 4,
      day: "Day 4",
      title: "Vang Vieng Adventure Tour",
      dayName: "Day 4",
      description: [
        {
          time: "All Day",
          activities: [
            "Breakfast at the hotel",
            "Adventure activities: Blue Lagoon, kayaking, caving, trekking",
            "Traditional Lao dinner at a local restaurant",
            "Overnight stay in Vang Vieng"
          ]
        }
      ]
    },
    {
      id: 5,
      day: "Day 5",
      title: "Transfer to Luang Prabang",
      dayName: "Day 5",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Road transfer to Luang Prabang"
          ]
        },
        {
          time: "Afternoon",
          activities: [
            "Hotel check-in and rest",
            "Visit local night market for souvenirs"
          ]
        },
        {
          time: "Evening",
          activities: [
            "Dinner at a traditional Lao restaurant",
            "Overnight stay in Luang Prabang"
          ]
        }
      ]
    },
    {
      id: 6,
      day: "Day 6",
      title: "Luang Prabang City Tour",
      dayName: "Day 6",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Visit Wat Xieng Thong and Royal Palace Museum"
          ]
        },
        {
          time: "Afternoon",
          activities: [
            "Boat trip on the Mekong River to Pak Ou Caves",
            "Visit Kuang Si Waterfalls (swim or relax)"
          ]
        },
        {
          time: "Evening",
          activities: [
            "Dinner at a local restaurant",
            "Overnight stay in Luang Prabang"
          ]
        }
      ]
    },
    {
      id: 7,
      day: "Day 7",
      title: "Departure from Luang Prabang",
      dayName: "Day 7",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Leisure time for last-minute shopping or exploration"
          ]
        },
        {
          time: "Afternoon",
          activities: [
            "Private cab transfer to Luang Prabang airport for departure"
          ]
        }
      ]
    }
  ];
  
  const inclusions = [
    { id: 1, category: "Accommodation", description: "3-star or 4-star hotels (depending on package)" },
    { id: 2, category: "Meals", description: "Daily breakfast at hotels and dinner at local restaurants" },
    { id: 3, category: "Transport", description: "All private cab transfers between cities and airport transfers" },
    { id: 4, category: "Sightseeing", description: "Guided tours with entrance fees to main attractions" },
    { id: 5, category: "Assistance", description: "On-ground assistance for planning and local recommendations" }
  ];
  
  const exclusions = [
    { id: 1, description: "International flights to and from Laos" },
    { id: 2, description: "Travel insurance (optional but recommended)" },
    { id: 3, description: "Lunches and snacks not mentioned in the itinerary" },
    { id: 4, description: "Personal expenses such as shopping and souvenirs" },
    { id: 5, description: "Optional activities like kayaking, trekking, and boat tours" },
    { id: 6, description: "Tips and gratuities for guides, drivers, and hotel staff" }
  ];
  

const galleryImages = [
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
];

const Laos_tour = () => {
  const [activeTab, setActiveTab] = useState("Inclusion");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedTrips, setExpandedTrips] = useState([]);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    const prevIndex = 
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const toggleTrip = (id) => {
    if (expandedTrips.includes(id)) {
      setExpandedTrips(expandedTrips.filter((tripId) => tripId !== id));
    } else {
      setExpandedTrips([...expandedTrips, id]);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Banner Section with Background and Form */}
      <div
        className="relative w-full h-auto lg:h-[70vh] bg-cover bg-center rounded-lg shadow-xl mb-12"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1675367607217-c4d635f4c5c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 rounded-lg flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-0 text-center lg:text-left pt-16">
          <div className="text-white max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Explore the Beauty of{" "}
              <span className="text-yellow-400">Laos Trip</span>
            </h1>
            <p className="text-lg text-gray-300">
              Discover incredible International travel destinations and make lasting
              memories. Book your next adventure with us!
            </p>
          </div>
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-auto rounded-lg lg:ml-6">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Itinerary & Inclusions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <section className="py-10 bg-gray-100">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Explore <span className="text-blue-500">Laos Tour</span>
          </h2>
          {/* Flex container to stack Itinerary and Inclusions sections vertically */}
          <div className="flex flex-col space-y-8">
            {/* Itinerary Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
              Laos Itinerary 7 Days 6 Nights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {trips.map((trip) => (
                  <div
                    key={trip.id}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer"
                    onClick={() => toggleTrip(trip.id)}
                  >
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-gray-200">
                      <h4 className="text-lg font-bold text-gray-800">
                        {trip.day}
                      </h4>
                      <p className="text-sm text-blue-600 font-medium">
                        {trip.title}
                      </p>
                    </div>
                    {expandedTrips.includes(trip.id) && (
                      <div className="p-4 space-y-4">
                        {trip.description.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              <h5 className="text-sm font-semibold text-gray-700">
                                {section.time}
                              </h5>
                            </div>
                            <ul className="space-y-1 ml-4">
                              {section.activities.map(
                                (activity, activityIndex) => (
                                  <li
                                    key={activityIndex}
                                    className="flex items-start space-x-2 text-gray-600 text-sm"
                                  >
                                    <span className="text-blue-400">•</span>
                                    <span className="flex-1">{activity}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col">
                <div className="flex mb-6">
                  <button
                    className={`w-1/2 text-center py-2 rounded-t-lg ${
                      activeTab === "Inclusion"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setActiveTab("Inclusion")}
                  >
                    Inclusion
                  </button>
                  <button
                    className={`w-1/2 text-center py-2 rounded-t-lg ${
                      activeTab === "Exclusion"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => setActiveTab("Exclusion")}
                  >
                    Exclusion
                  </button>
                </div>
                <div className="p-4 bg-gray-50 border-t-2 border-blue-500 rounded-b-lg">
                  {activeTab === "Inclusion" ? (
                    <ul className="space-y-4">
                      {inclusions.map((item) => (
                        <li key={item.id} className="flex items-start gap-3">
                          <span className="text-blue-500 font-semibold">
                            {item.category}:
                          </span>
                          <span className="text-gray-700">
                            {item.description}
                          </span>
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
          </div>

          {/* Gallery Section */}
          <LadakhGallery />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            {/* Responsive Grid for Recommended Domestic Trips */}
            <InternationalTripsRecommend  />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Laos_tour;





