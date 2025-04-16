import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import InternationalTripsRecommend from "../../components/InternationalTripsRecommend";
import LadakhGallery from "../../components/LadakhGallery";

// Add interfaces for type safety
interface Activity {
  time: string;
  activities: string[];
}

interface Trip {
  id: number;
  day: string;
  title: string;
  dayName: string;
  description: Activity[];
}

interface Inclusion {
  id: number;
  category: string;
  description: string;
}

interface Exclusion {
  id: number;
  description: string;
}

// Add the missing inclusions and exclusions data
const inclusions: Inclusion[] = [
  {
    id: 1,
    category: "Accommodation",
    description: "4 nights stay in 4-star hotels in Georgia",
  },
  {
    id: 2,
    category: "Transportation",
    description: "All transfers and sightseeing in an AC vehicle",
  },
  {
    id: 3,
    category: "Meals",
    description: "Daily breakfast and dinner",
  },
];

const exclusions: Exclusion[] = [
  { id: 1, description: "International/domestic airfare" },
  { id: 2, description: "Personal expenses and tips" },
  { id: 3, description: "Travel insurance" },
];

const trips: Trip[] = [
    {
      id: 1,
      day: "Day 1",
      title: "Arrival in Tbilisi – Exploring the Capital",
      dayName: "Monday",
      description: [
        {
          time: "Arrival & Check-in",
          activities: [
            "Arrival at Tbilisi International Airport – Meet & Greet",
            "Transfer to the hotel & Check-in",
            "Rest & Refresh"
          ],
        },
        {
          time: "City Tour",
          activities: [
            "Visit Holy Trinity Cathedral – One of the largest Orthodox cathedrals in the world",
            "Explore Metekhi Church & King Vakhtang Gorgasali Statue – Historic viewpoints",
            "Ride the cable car to Narikala Fortress – Panoramic views of Tbilisi",
            "Stroll through Abanotubani (Sulfur Baths District) – Iconic thermal bathhouses",
            "See the Bridge of Peace – Stunning modern architecture over the Mtkvari River"
          ],
        },
        {
          time: "Evening",
          activities: [
            "Enjoy the vibrant Sharden Street with its cafés, bars, and restaurants",
            "Return to hotel & Overnight in Tbilisi"
          ],
        },
      ],
    },
    {
      id: 2,
      day: "Day 2",
      title: "Tbilisi – Mtskheta – Jvari – Ananuri – Gudauri – Kazbegi",
      dayName: "Tuesday",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at hotel",
            "Drive to Mtskheta (UNESCO Site)",
            "Visit Jvari Monastery – Stunning hilltop church with views of Mtskheta",
            "Explore Svetitskhoveli Cathedral – Spiritual and historical center of Georgia"
          ],
        },
        {
          time: "Midday",
          activities: [
            "Visit Ananuri Fortress – Scenic medieval complex on the Aragvi River",
            "Drive to Gudauri with a stop at the Russia-Georgia Friendship Monument (panoramic views)"
          ],
        },
        {
          time: "Afternoon/Evening",
          activities: [
            "Head to Kazbegi (Stepantsminda) for a 4WD trip to Gergeti Trinity Church with a majestic mountain backdrop",
            "Return to Tbilisi & Overnight stay"
          ],
        },
      ],
    },
    {
      id: 3,
      day: "Day 3",
      title: "Kakheti Wine Region Tour – Sighnaghi & Bodbe Monastery",
      dayName: "Wednesday",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at hotel",
            "Drive to the Kakheti Region – Famous for wine and landscapes"
          ],
        },
        {
          time: "Midday",
          activities: [
            "Visit Bodbe Monastery – Spiritual site of St. Nino set in a peaceful garden",
            "Explore Sighnaghi – The City of Love: walk along the Great Wall of Georgia and explore colorful streets with breathtaking views"
          ],
        },
        {
          time: "Afternoon/Evening",
          activities: [
            "Wine Tasting Experience at a local winery",
            "Return to Tbilisi & Overnight stay"
          ],
        },
      ],
    },
    {
      id: 4,
      day: "Day 4",
      title: "Tbilisi – Uplistsikhe Cave Town – Gori – Free Evening",
      dayName: "Thursday",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast at hotel",
            "Drive to Uplistsikhe Cave Town – Explore the ancient rock-hewn city"
          ],
        },
        {
          time: "Midday",
          activities: [
            "Visit Gori and optionally explore the Joseph Stalin Museum for a glimpse into Soviet-era history"
          ],
        },
        {
          time: "Afternoon/Evening",
          activities: [
            "Return to Tbilisi",
            "Enjoy a free evening for shopping: visit the Dry Bridge Flea Market for antiques and souvenirs, and Galleria Tbilisi for modern shopping",
            "Overnight stay in Tbilisi"
          ],
        },
      ],
    },
    {
      id: 5,
      day: "Day 5",
      title: "Departure",
      dayName: "Friday",
      description: [
        {
          time: "Morning",
          activities: [
            "Breakfast & Check-out"
          ],
        },
        {
          time: "Departure",
          activities: [
            "Transfer to Tbilisi International Airport for departure"
          ],
        },
      ],
    },
  ];
  
const galleryImages = [
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
  "https://himalyantrips.com/wp-content/uploads/2024/02/winter-kashmir.jpeg",
  "https://bl-i.thgim.com/public/incoming/2rfvdc/article68908750.ece/alternates/LANDSCAPE_1200/Kashmir%20Snow%20Tourism%202024%20-%20another.jpg",
  "https://images.deccanherald.com/deccanherald%2F2023-11%2F606ad730-153d-419e-acf3-2051ad4a5b39%2FPTI11_10_2023_000203B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
];

const GeorgiaTour = () => {
  const [activeTab, setActiveTab] = useState<"Inclusion" | "Exclusion">("Inclusion");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [expandedTrips, setExpandedTrips] = useState<number[]>([]);

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
            'url("https://images.unsplash.com/photo-1565008576549-57569a49371d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 rounded-lg flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-0 text-center lg:text-left pt-16">
          <div className="text-white max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Explore the Beauty of{" "}
              <span className="text-yellow-400">Georgia Trip</span>
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
            Explore <span className="text-blue-500">4 Nights 5 Days Georgia Tour</span>
          </h2>
          {/* Flex container to stack Itinerary and Inclusions sections vertically */}
          <div className="flex flex-col space-y-8">
            {/* Itinerary Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                Itinerary
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

export default GeorgiaTour;





