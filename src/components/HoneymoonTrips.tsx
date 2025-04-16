



import React from 'react'
import { Link } from 'react-router-dom'

const trips = [
  {
    id: 1,
    title: 'Delhi to Leh Motorcycle Tour',
    image: 'https://images.unsplash.com/photo-1701599347330-f01207c56ca5?fm=jpg&q=60&w=3000',
    link: '/domestic/delhi_to_leh_motorcycle_trip',
  },
  {
    id: 2,
    title: 'Manali Adventure Trip',
    image: 'https://himdarshantrip.com/wp-content/uploads/elementor/thumbs/Kullu-Manali-Honeymoon-q5qcpujxwcxywxzevew87uvdizh2zk87icp4xjtzow.jpg',
    link: '/domestic/Manali_trip',
  },
  {
    id: 3,
    title: 'Kashmir Backpacking',
    image: 'https://images.unsplash.com/photo-1584732200355-486a95263014?fm=jpg&q=60&w=3000',
    link: '/domestic/Kashmir_trip',
  },
  {
    id: 4,
    title: 'Leh-Ladakh Road Trip',
    image: 'https://cdn.audleytravel.com/-/-/79/1016845-leh-monastry-ladakh-india.jpg',
    link: '/domestic/LehLadakh_trip',
  },
  {
    id: 5,
    title: 'Goa Beach Vacation',
    image: 'https://www.holidify.com/images/bgImages/GOA.jpg',
    link: '/domestic/Goa_trip',
  },
  {
    id: 6,
    title: 'Kerala Tour',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000',
    link: '/domestic/Kerala_trip',
  },
  {
    id: 7,
    title: 'Golden Triangle',
    image: 'https://images.pexels.com/photos/3881106/pexels-photo-3881106.jpeg',
    link: '/domestic/golden_triangle_trip',
  },
  {
    id: 8,
    title: 'Jaisalmer Jodpur Trip',
    image: 'https://images.unsplash.com/photo-1577089907583-991f1ba4a03c?fm=jpg&q=60&w=3000',
    link: '/domestic/jaisalmer_jodpur_trip',
  },
]

const HoneymoonTrips = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto sm:px-0 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Upcoming Honeymoon Trips</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
          {trips.map((trip) => (
            <div key={trip.id} className="px-2 py-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <Link to={trip.link}>
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-2 pt-2">
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

export default HoneymoonTrips
