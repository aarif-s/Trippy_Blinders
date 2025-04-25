import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import InternationalTripsRecommend from "../../components/InternationalTripsRecommend";
import LadakhGallery from "../../components/LadakhGallery";

const trips = [
    {
      id: 1,
      day: "Day 1",
      title: "Arrival in Johannesburg",
      dayName: "Day 1",
      description: [
        {
          time: "Arrival",
          activities: [
            "Arrive at OR Tambo International Airport, Johannesburg",
            "Transfer to Hotel: Check-in at a comfortable hotel in Johannesburg",
            "Dinner: Enjoy a welcoming dinner at the hotel",
          ],
        },
      ],
    },
    {
      id: 2,
      day: "Day 2",
      title: "Johannesburg City Tour & Soweto",
      dayName: "Day 2",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Visit Johannesburg highlights: Apartheid Museum, Nelson Mandela Square, Constitution Hill",
          ],
        },
        {
          time: "Afternoon",
          activities: [
            "Explore Soweto: Vilakazi Street, Mandela & Desmond Tutu's homes",
          ],
        },
        {
          time: "Evening",
          activities: [
            "Dinner at the hotel or a local restaurant",
          ],
        },
      ],
    },
    {
      id: 3,
      day: "Day 3",
      title: "Johannesburg to Kruger National Park",
      dayName: "Day 3",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Drive to Kruger National Park (5-6 hours)",
          ],
        },
        {
          time: "Afternoon",
          activities: [
            "Check-in at the lodge and relax",
          ],
        },
        {
          time: "Evening",
          activities: [
            "First game drive at Kruger",
            "Dinner at the lodge",
          ],
        },
      ],
    },
    {
      id: 4,
      day: "Day 4",
      title: "Full Day Kruger Safari",
      dayName: "Day 4",
      description: [
        {
          time: "Full Day",
          activities: [
            "Breakfast at the lodge",
            "Morning & afternoon safari drives in Kruger National Park",
            "Big Five sightings: lion, leopard, rhino, elephant, buffalo",
            "Dinner at the lodge",
          ],
        },
      ],
    },
    {
      id: 5,
      day: "Day 5",
      title: "Kruger to Panorama Route & Blyde River Canyon",
      dayName: "Day 5",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the lodge",
            "Drive Panorama Route: Blyde River Canyon, Bourke’s Luck Potholes, God's Window",
          ],
        },
        {
          time: "Afternoon",
          activities: [
            "Continue to Graskop and check-in at hotel",
            "Dinner at the hotel",
          ],
        },
      ],
    },
    {
      id: 6,
      day: "Day 6",
      title: "Graskop to Cape Town",
      dayName: "Day 6",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Drive to Cape Town (5-6 hours)",
          ],
        },
        {
          time: "Afternoon",
          activities: [
            "Arrive in Cape Town and check-in",
            "Visit V&A Waterfront for shopping and leisure",
            "Dinner at a waterfront restaurant",
          ],
        },
      ],
    },
    {
      id: 7,
      day: "Day 7",
      title: "Cape Town Tour & Departure",
      dayName: "Day 7",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at the hotel",
            "Visit Table Mountain via cable car (weather permitting)",
            "Explore Cape Point & Cape of Good Hope",
          ],
        },
        {
          time: "Afternoon",
          activities: [
            "Return to hotel, check-out and transfer to the airport",
            "End of Tour",
          ],
        },
      ],
    },
  ];
  
  const inclusions = [
    {
      id: 1,
      category: "Stay",
      description: "Accommodation as per itinerary",
    },
    {
      id: 2,
      category: "Meal",
      description: "All meals (Breakfast and Dinner)",
    },
    {
      id: 3,
      category: "Transport",
      description: "Private Cab for all transfers and sightseeing",
    },
    {
      id: 4,
      category: "Activities",
      description: "Safari game drives in Kruger National Park, Table Mountain Cable Car",
    },
    {
      id: 5,
      category: "Guide",
      description: "Services of an experienced guide",
    },
    {
      id: 6,
      category: "Other",
      description: "Entrance fees to attractions and bottled water during excursions",
    },
  ];
  
  const exclusions = [
    { id: 1, description: "International flights" },
    { id: 2, description: "Travel insurance" },
    { id: 3, description: "Personal expenses (souvenirs, tips, etc.)" },
    { id: 4, description: "Any meals not mentioned" },
    { id: 5, description: "Optional activities (e.g., helicopter ride, wine tour)" },
    { id: 6, description: "Additional drinks outside of meals" },
  ];
  

const galleryImages = [
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
];

const South_africa_tour = () => {
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
            'url("https://images.unsplash.com/photo-1623745493581-2f7b3d0d2140?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 rounded-lg flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-0 text-center lg:text-left pt-16">
          <div className="text-white max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Explore the Beauty of{" "}
              <span className="text-yellow-400">South Africa Tour</span>
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
            Explore <span className="text-blue-500">South Africa Tour</span>
          </h2>
          {/* Flex container to stack Itinerary and Inclusions sections vertically */}
          <div className="flex flex-col space-y-8">
            {/* Itinerary Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
              South Africa Tour Itinerary 7 Days 6 Nights
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

export default South_africa_tour;





