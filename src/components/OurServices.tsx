import React from 'react'

const reasons = [
  {
    id: 1,
    title: 'Accommodation Arrangements',
    description:
      'Selected hotels, resorts, flats, and boutique accommodations for various budgets. Our direct arrangements with properties provide our clients with the greatest pricing and extra benefits.',
   
  },
  {
    id: 2,
    title: 'Flight & Transport Services',
    description:
      'Domestic and international flights to arranging airport transfers, car rentals, and train tickets, we handle all your transportation needs.',
   
  },
  {
    id: 3,
    title: 'Visa Assistance',
    description:
      'We provide hassle-free visa assistance, helping you navigate the application process and secure your travel documents with ease.',
 
  },
  {
    id: 4,
    title: 'Travel Insurance',
    description:
      'Protect your journey with our comprehensive travel insurance plans, covering emergencies, cancellations, and unexpected events.',
    
  },
  {
    id: 5,
    title: 'Trip Planning and Consultation',
    description:
      'We help you plan the perfect trip, creating an itinerary that fits your interests, budget, and preferences for a truly special experience.',
     
  },
  {
    id: 6,
    title: '24/7 Support',
    description:
      'We are here for you 24/7 during your travels, ready to assist with any changes or emergencies, ensuring a smooth and worry-free journey.',
     
  },
]

// Define a set of soft theme colors for the card backgrounds
const bgColors = [
  'bg-blue-50',
  'bg-green-50',
  'bg-yellow-50',
  'bg-red-50',
  'bg-purple-50',
  'bg-indigo-50',
]

const OurServices = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-wide uppercase">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Embrace the individuality of each traveler
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => {
            const bgColor = bgColors[index % bgColors.length]
            return (
              <div
                key={reason.id}
                className={`relative group overflow-hidden rounded-3xl shadow-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${bgColor}`}
              >
                {/* Special Highlight for 24/7 Support */}
                {reason.id === 6 && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-blue-500 text-white text-xs font-semibold rounded-bl-xl z-10">
                    Priority Support
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  <h3
                    className={`text-2xl font-semibold mb-3 text-blue-700 ${
                      reason.id === 6 ? 'text-blue-700' : 'text-gray-800'
                    }`}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* 24/7 Helpline Banner */}
        <div className="mt-10 text-center">
  <a
    href="tel:+919266517788"
    className="inline-block bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm md:text-xl font-bold shadow-lg hover:bg-blue-600 transition duration-300"
  >
    📞 24/7 Helpline: <span className="underline">+919266517788</span>
  </a>
</div>

      </div>
    </section>
  )
}

export default OurServices
