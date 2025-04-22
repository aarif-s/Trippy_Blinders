
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const trips = [
  {
    id: 1,
    title: 'Azerbaijan (Baku) Tour',
    image: assets.InternationalTrip_pic1,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/azerbaizan_baku_tour',
  },
  {
    id: 2,
    title: 'Bhutan Tour',
    image: assets.InternationalTrip_pic2,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/bhutan_tour',
  },
  {
    id: 3,
    title: 'Dubai Tour',
    image: assets.InternationalTrip_pic3,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/dubai_tour',
  },
  {
    id: 4,
    title: 'Georgia Tour',
    image: assets.InternationalTrip_pic4,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/georgia_tour',
  },
  {
    id: 5,
    title: 'Malaysia Tour',
    image: assets.InternationalTrip_pic5,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/malaysia_tour',
  },
  {
    id: 6,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic6,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 7,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic7,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 8,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic8,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 9,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic9,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 10,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic10,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 11,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic11,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 12,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic12,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 13,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic13,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 14,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic14,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 15,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic15,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 16,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic16,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 17,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic17,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 18,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic18,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 19,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic19,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 20,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic20,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 21,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic21,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 22,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic22,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 23,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic23,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 24,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic24,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 25,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic25,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 26,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic26,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 27,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic27,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 28,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic28,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 29,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic29,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 30,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic30,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 31,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic31,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 32,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic32,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 33,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic33,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 34,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic34,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 35,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic35,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 36,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic36,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 37,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic37,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 38,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic38,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 39,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic39,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 40,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic40,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 41,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic41,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 42,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic42,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 43,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic43,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/russia_tour',
  },
  {
    id: 44,
    title: 'Russia Tour',
    image: assets.InternationalTrip_pic44,
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
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute px-2 top-2 left-2 bg-blue-500 text-white text-sm font-semibold lg:px-3 sm:px-2 py-1 rounded-br-lg rounded-tl-lg shadow">
                    {trip.duration}
                  </div>
                  
                  <div className="lg:p-2 sm:p-2 pt-0">
                    <h3 className="lg:text-xl sm:text-sm font-semibold px-2 mb-1">
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
