import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import DomesticTripsRecommend from "../../components/DomesticTripsRecommend";
import LadakhGallery from "../../components/LadakhGallery";

const trips = [
  {
    id: 1,
    day: "Day 1",
    title: "Arrival in Jaisalmer – City Tour",
    dayName: "Day 1",
    description: [
      {
        time: "Morning",
        activities: [
          "Arrival at Jaisalmer Railway Station / Airport",
          "Pick-up and transfer to hotel in a private AC cab",
          "Check-in and freshen up",
          "Breakfast at the hotel"
        ]
      },
      {
        time: "Afternoon",
        activities: [
          "Visit Jaisalmer Fort (Sonar Quila)",
          "Explore Patwon Ki Haveli, Nathmal Ki Haveli, Salim Singh Ki Haveli",
          "Visit Gadisar Lake"
        ]
      },
      {
        time: "Evening",
        activities: [
          "Explore the local market",
          "Dinner at the hotel",
          "Overnight stay at the hotel in Jaisalmer"
        ]
      }
    ]
  },
  {
    id: 2,
    day: "Day 2",
    title: "Desert Excursion – Sam Sand Dunes",
    dayName: "Day 2",
    description: [
      {
        time: "Morning",
        activities: [
          "Breakfast at the hotel",
          "Check-out from the hotel and proceed to desert tour",
          "En route visit Kuldhara (abandoned village) and Bada Bagh"
        ]
      },
      {
        time: "Afternoon",
        activities: [
          "Arrive at Sam Sand Dunes and check-in to Swiss tent at Desert Camp",
          "Enjoy camel safari during sunset"
        ]
      },
      {
        time: "Evening",
        activities: [
          "Rajasthani folk dance and music performance",
          "Bonfire with light snacks",
          "Traditional Rajasthani dinner at the camp",
          "Overnight stay at the desert camp"
        ]
      }
    ]
  },
  {
    id: 3,
    day: "Day 3",
    title: "Departure from Jaisalmer",
    dayName: "Day 3",
    description: [
      {
        time: "Early Morning",
        activities: [
          "Sunrise view in the desert",
          "Breakfast at the camp"
        ]
      },
      {
        time: "Morning",
        activities: [
          "Check-out and drop-off at Jaisalmer Railway Station / Airport"
        ]
      }
    ]
  }
];

const inclusions = [
  {
    id: 1,
    category: "Stay",
    description: "Accommodation for 2 nights: 1 night in hotel, 1 night in Swiss tent at desert camp (double occupancy)"
  },
  {
    id: 2,
    category: "Meal",
    description: "Daily breakfast (Day 1-3) and dinner (Day 1-2) as per itinerary"
  },
  {
    id: 3,
    category: "Transport",
    description: "Private AC cab for all sightseeing, transfers, pick-up and drop-off"
  },
  {
    id: 4,
    category: "Activities",
    description: "Camel safari at Sam Sand Dunes, cultural evening with folk dance and music, bonfire"
  },
  {
    id: 5,
    category: "Sightseeing",
    description: "Visits to Jaisalmer Fort, havelis, Gadisar Lake, Kuldhara, Bada Bagh"
  },
  {
    id: 6,
    category: "Services",
    description: "Driver charges, fuel, tolls, parking, and all taxes & service charges included"
  }
];

const exclusions = [
  { id: 1, description: "Airfare / Train tickets to and from Jaisalmer" },
  { id: 2, description: "Jeep safari at dunes (available at additional cost)" },
  { id: 3, description: "Entry tickets to monuments and boating at Gadisar Lake" },
  { id: 4, description: "Lunch on all days" },
  { id: 5, description: "Personal expenses (tips, laundry, beverages, phone calls)" },
  { id: 6, description: "Anything not specifically mentioned under inclusions" }
];
const galleryImages = [
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
];

const Jaisalmer_trip = () => {
  const [activeTab, setActiveTab] = useState("Inclusion");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [expandedTrips, setExpandedTrips] = useState<number[]>([]);

  const openImage = (index: number) => {
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

  const toggleTrip = (id: number) => {
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
            'url("https://plus.unsplash.com/premium_photo-1697730399235-bcca956cc6d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',

        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 rounded-lg flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-0 text-center lg:text-left pt-16">
          <div className="text-white max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Explore the Beauty of{" "}
              <span className="text-yellow-400">Jaisalmer Trip</span>
            </h1>
            <p className="text-lg text-gray-300">
              Discover incredible Domestic travel destinations and make lasting
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
            Explore <span className="text-blue-500">Upcoming Domestic Trips</span>
          </h2>
          {/* Flex container to stack Itinerary and Inclusions sections vertically */}
          <div className="flex flex-col space-y-8">
            {/* Itinerary Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
              Jaisalmer Tour Itinerary 
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
            <DomesticTripsRecommend />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jaisalmer_trip;





 