import React from 'react'
import { Link } from 'react-router-dom'

const trips = [
  {
    id: 1,
    title: 'Azerbaijan (Baku) Tour',
    image:
      'https://images.unsplash.com/photo-1674857977971-131936c7b5ea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/azerbaizan_baku_tour',
  },
  {
    id: 2,
    title: 'Bhutan Tour',
    image:
      'https://images.unsplash.com/photo-1578556881786-851d4b79cb73?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/bhutan_tour',
  },
  {
    id: 3,
    title: 'Dubai Tour',
    image:
      'https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/dubai_tour',
  },
  {
    id: 4,
    title: 'Georgia Tour',
    image:
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/georgia_tour',
  },
  {
    id: 5,
    title: 'Malaysia Tour',
    image:
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/malaysia_tour',
  },
  {
    id: 6,
    title: 'Russia Tour',
    image:
      'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 7,
    title: 'Russia Tour',
    image:
      'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 8,
    title: 'Russia Tour',
    image:
      'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
]

const InternationalTrips = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto sm:px-0 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
          Upcoming Foreign Trips
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 sm:gap-1 sm:px-2">
          {trips.map((trip) => (
            <div key={trip.id} className="px-2 py-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Link to={trip.link} className="block relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute px-2 top-2 left-2 bg-blue-500 text-white text-sm font-semibold lg:px-3 sm:px-2 py-1 rounded-br-lg rounded-tl-lg shadow">
                    {trip.duration}
                  </div>
                  <div className="lg:p-2 sm:p-2 pt-0">
                    <h3 className="lg:text-xl sm:text-sm font-semibold px-2 mb-2">
                      {trip.title}
                    </h3>
                    <div className="flex items-baseline mb-1">
                      <span className="lg:text-2xl sm:text-base px-1 font-bold text-blue-500">
                        {trip.price}
                      </span>
                      <span className="ml-2 text-gray-500 line-through">
                        {trip.originalPrice}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="lg:p-4 sm:p-2 px-1 py-1 pt-0">
                  <Link to="/contact">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      Request Callback
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InternationalTrips;
