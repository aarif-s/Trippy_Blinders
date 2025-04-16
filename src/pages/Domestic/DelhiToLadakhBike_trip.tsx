import React, { useState } from "react";
import ContactForm from "../../components/ContactForm";
import DomesticTripsRecommend from "../../components/DomesticTripsRecommend";
import LadakhGallery from "../../components/LadakhGallery";

const trips = [
    {
      id: 1,
      day: "Day 1",
      title: "Delhi to Manali",
      dayName: "Day 1",
      description: [
        {
          time: "Early Morning",
          activities: [
            "Departure from Delhi",
            "Route: Delhi → Chandigarh → Sundernagar → Mandi → Manali",
            "Evening free for bike checks and preparation",
            "Recommended: Get proper rest for the challenging journey ahead",
          ],
        },
        {
          time: "Night",
          activities: ["Overnight stay in Manali"],
        },
      ],
    },
    {
      id: 2,
      day: "Day 2",
      title: "Manali - Acclimatization & Sightseeing",
      dayName: "Day 2",
      description: [
        {
          time: "Full Day",
          activities: [
            "Sightseeing: Hadimba Temple, Mall Road, Vashisht Hot Springs",
            "Bike maintenance and final checks",
            "Tour briefing and safety instructions",
            "Pack warm clothes and emergency supplies",
          ],
        },
      ],
    },
    {
      id: 3,
      day: "Day 3",
      title: "Manali to Jispa",
      dayName: "Day 3",
      description: [
        {
          time: "Early Morning",
          activities: [
            "Cross Rohtang Pass (13,050 ft)",
            "Route: Manali → Rohtang Pass → Keylong → Jispa",
            "Visit: Rohtang Pass viewpoints, Keylong monastery",
          ],
        },
        {
          time: "Night",
          activities: ["Overnight stay in Jispa"],
        },
      ],
    },
    {
      id: 4,
      day: "Day 4",
      title: "Jispa to Sarchu",
      dayName: "Day 4",
      description: [
        {
          time: "Day Time",
          activities: [
            "Cross Baralacha La Pass (16,040 ft)",
            "Route through Deepak Tal and Suraj Tal lakes",
            "Spectacular views of the Himalayas",
          ],
        },
        {
          time: "Night",
          activities: ["Camp stay at Sarchu", "Important: Proper rest for altitude adjustment"],
        },
      ],
    },
    {
      id: 5,
      day: "Day 5",
      title: "Sarchu to Leh",
      dayName: "Day 5",
      description: [
        {
          time: "Early Morning",
          activities: [
            "Cross Gata Loops (21 hairpin bends)",
            "Pass through Nakee La, Lachulung La, Moore Plains",
            "Cross Tanglang La (17,480 ft)",
          ],
        },
        {
          time: "Evening",
          activities: ["Arrive in Leh", "Overnight stay in Leh"],
        },
      ],
    },
    {
      id: 6,
      day: "Day 6",
      title: "Leh - Rest and Acclimatization",
      dayName: "Day 6",
      description: [
        {
          time: "Full Day",
          activities: [
            "Sightseeing: Leh Palace, Shanti Stupa",
            "Explore Leh Market",
            "Arrange Inner Line Permits for Pangong and Nubra",
            "Evening briefing for next day’s ride",
          ],
        },
      ],
    },
    {
      id: 7,
      day: "Day 7",
      title: "Leh to Nubra Valley via Khardung La",
      dayName: "Day 7",
      description: [
        {
          time: "Day Time",
          activities: [
            "Cross Khardung La (18,380 ft), world’s highest motorable pass",
            "Visit Diskit Monastery",
            "Experience Hunder sand dunes",
            "Optional camel safari",
          ],
        },
        {
          time: "Night",
          activities: ["Overnight stay in Nubra Valley"],
        },
      ],
    },
    {
      id: 8,
      day: "Day 8",
      title: "Nubra Valley to Pangong Lake",
      dayName: "Day 8",
      description: [
        {
          time: "Day Time",
          activities: [
            "Depart early via Shyok river route",
            "Witness changing colors of Pangong Lake",
            "Camping by the lake",
            "Stunning sunset and night photography",
          ],
        },
      ],
    },
    {
      id: 9,
      day: "Day 9",
      title: "Pangong Lake to Leh",
      dayName: "Day 9",
      description: [
        {
          time: "Morning",
          activities: ["Sunrise at Pangong Lake", "Return via Chang La Pass (17,590 ft)"],
        },
        {
          time: "Afternoon",
          activities: ["Visit Thiksey Monastery", "Tour concludes in Leh"],
        },
      ],
    },
    {
      id: 10,
      day: "Essential Info",
      title: "Travel Essentials",
      dayName: "Information",
      description: [
        {
          time: "Documents",
          activities: [
            "Valid ID proof",
            "Driving license",
            "Vehicle registration papers",
            "Inner Line Permits",
          ],
        },
        {
          time: "Weather",
          activities: [
            "Best time: June to September",
            "Temperature range: -5°C to 30°C",
            "Carry appropriate clothing",
          ],
        },
        {
          time: "Safety Equipment",
          activities: [
            "Riding gear (helmet, jacket, gloves, boots)",
            "First aid kit",
            "Tool kit",
            "Oxygen canisters",
            "Rain gear",
          ],
        },
        {
          time: "Health Precautions",
          activities: [
            "AMS medication",
            "Stay hydrated",
            "Proper rest",
            "Avoid alcohol at high altitudes",
            "Recommended: Travel insurance",
          ],
        },
        {
          time: "Bike Preparation",
          activities: [
            "Full service before trip",
            "Check brakes, clutch, tires",
            "Carry basic spare parts",
            "Extra fuel cans for remote areas",
          ],
        },
      ],
    },
  ];
  


const inclusions = [
  {
    id: 1,
    category: "Stay",
    description:
      "Accommodation in Double / Triple Sharing rooms in Hotels / Camps.",
  },
  {
    id: 2,
    category: "Meal",
    description:
      "A total of 12 meals: Day 1 (D), Day 2 (B+D), Day 3 (B+D), Day 4 (B+D), Day 5 (B+D), Day 6 (B+D), Day 7 (B).",
  },
  {
    id: 3,
    category: "Other Inclusions",
    description:
      "Bike rent with fuel for 5 days from Day 2 to Day 6 (For Biking option).",
  },
];

const exclusions = [
  { id: 1, description: "Airfare and travel insurance." },
  {
    id: 2,
    description: "Any expenses not specifically mentioned under inclusions.",
  },
  {
    id: 3,
    description: "Personal expenses like shopping, tips, and extra meals.",
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

const DelhiToLadakhBike_trip = () => {
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
            'url("https://www.agoda.com/wp-content/uploads/2024/07/Goa-India.jpg")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 rounded-lg flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-0 text-center lg:text-left pt-16">
          <div className="text-white max-w-lg mb-6 lg:mb-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Explore the Beauty of{" "}
              <span className="text-yellow-400">Delhi to Leh Motorcycle Tour</span>
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
            Explore <span className="text-blue-500">Delhi to Leh Motorcycle Tour</span>
          </h2>
          {/* Flex container to stack Itinerary and Inclusions sections vertically */}
          <div className="flex flex-col space-y-8">
            {/* Itinerary Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
              Adventure Itinerary
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

export default DelhiToLadakhBike_trip;





 