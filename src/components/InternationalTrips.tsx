
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const trips = [
  {
    id: 1,
    title: 'South Africa Tour',
    image: assets.InternationalTrip_pic1,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/south_africa_tour',
  },
  {
    id: 2,
    title: 'Australia Tour',
    image: assets.InternationalTrip_pic2,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/australia_tour',
  },
  {
    id: 3,
    title: 'Azerbaijan Tour',
    image: assets.InternationalTrip_pic3,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/azerbaizan_baku_tour',
  },
  {
    id: 4,
    title: 'Cairo Tour',
    image: assets.InternationalTrip_pic4,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/egypt_cairo_tour',
  },
  {
    id: 5,
    title: 'Istanbul Tour',
    image: assets.InternationalTrip_pic5,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/turkey_istanbul_tour',
  },
  {
    id: 6,
    title: 'Laos Tour',
    image: assets.InternationalTrip_pic6,
    duration: '7 Nights 6 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/laos_tour',
  },
  {
    id: 7,
    title: 'Madagascar Tour',
    image: assets.InternationalTrip_pic7,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/madagascar_tour',
  },
  {
    id: 8,
    title: 'Seychelles Tour',
    image: assets.InternationalTrip_pic8,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/seychelles_tour',
  },
  {
    id: 9,
    title: 'Bali Tour',
    image: assets.InternationalTrip_pic9,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/bali_tour',
  },
  {
    id: 10,
    title: 'Bangkok Tour',
    image: assets.InternationalTrip_pic10,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/bangkok_tour',
  },
  {
    id: 11,
    title: 'Bhutan Tour',
    image: assets.InternationalTrip_pic11,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/bhutan_tour',
  },
  {
    id: 12,
    title: 'Cambodia Tour',
    image: assets.InternationalTrip_pic12,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/cambodia_tour',
  },
  {
    id: 13,
    title: 'China Tour',
    image: assets.InternationalTrip_pic13,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/china_tour',
  },
  {
    id: 14,
    title: 'Dubai Tour',
    image: assets.InternationalTrip_pic14,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/dubai_tour',
  },
  {
    id: 15,
    title: 'Europe Tour',
    image: assets.InternationalTrip_pic15,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/europe_tour',
  },
  {
    id: 16,
    title: 'France Tour',
    image: assets.InternationalTrip_pic16,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/france_tour',
  },
  {
    id: 17,
    title: 'Gangtok Tour',
    image: assets.InternationalTrip_pic17,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/gangtok_tour',
  },
  {
    id: 18,
    title: 'Georgia Tour',
    image: assets.InternationalTrip_pic18,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/georgia_tour',
  },
  {
    id: 19,
    title: 'Greece Tour',
    image: assets.InternationalTrip_pic19,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/greece_tour',
  },
  {
    id: 20,
    title: 'Hong Kong Tour',
    image: assets.InternationalTrip_pic20,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/hong_kong_tour',
  },
  {
    id: 21,
    title: 'Italia Tour',
    image: assets.InternationalTrip_pic21,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/italia_tour',
  },
  {
    id: 22,
    title: 'Japan Tour',
    image: assets.InternationalTrip_pic22,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/japan_tour',
  },
  {
    id: 23,
    title: 'Kenya Tour',
    image: assets.InternationalTrip_pic23,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/kenya_tour',
  },
  {
    id: 24,
    title: 'Korean Tour',
    image: assets.InternationalTrip_pic24,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/korean_tour',
  },
  {
    id: 25,
    title: 'Malaysia Tour',
    image: assets.InternationalTrip_pic25,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/malaysia_tour',
  },
  {
    id: 26,
    title: 'Maldives Tour',
    image: assets.InternationalTrip_pic26,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/maldives_tour',
  },
  {
    id: 27,
    title: 'Mauritius Tour',
    image: assets.InternationalTrip_pic27,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/mauritius_tour',
  },
  {
    id: 28,
    title: 'Mongolia Tour',
    image: assets.InternationalTrip_pic28,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/mongolia_tour',
  },
  {
    id: 29,
    title: 'Morocco Tour',
    image: assets.InternationalTrip_pic29,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/morocco_tour',
  },
  {
    id: 30,
    title: 'Nepal Tour',
    image: assets.InternationalTrip_pic30,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/nepal_tour',
  },
  {
    id: 31,
    title: 'New Zealand Tour',
    image: assets.InternationalTrip_pic31,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/new_zealand_tour',
  },
  {
    id: 32,
    title: 'Oman Tour',
    image: assets.InternationalTrip_pic32,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/oman_tour',
  },
  {
    id: 33,
    title: 'Pamukkale Tour',
    image: assets.InternationalTrip_pic33,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/pamukkale_tour',
  },
  {
    id: 34,
    title: 'Philippines Tour',
    image: assets.InternationalTrip_pic34,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/philippines_tour',
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
    title: 'Singapore Tour',
    image: assets.InternationalTrip_pic36,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/singapore_tour',
  },
  {
    id: 37,
    title: 'Spain Tour',
    image: assets.InternationalTrip_pic37,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/spain_tour',
  },
  {
    id: 38,
    title: 'Sri Lanka Tour',
    image: assets.InternationalTrip_pic38,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/srilanka_tour',
  },
  {
    id: 39,
    title: 'Switzerland Tour',
    image: assets.InternationalTrip_pic39,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/switzerland_tour',
  },
  {
    id: 40,
    title: 'Tanzania Tour',
    image: assets.InternationalTrip_pic40,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/tanzania_tour',
  },
  {
    id: 41,
    title: 'Thailand Tour',
    image: assets.InternationalTrip_pic41,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/thailand_tour',
  },
  {
    id: 42,
    title: 'Turkey Tour',
    image: assets.InternationalTrip_pic42,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/turkey_tour',
  },
  {
    id: 43,
    title: 'Uzbekistan Tour',
    image: assets.InternationalTrip_pic43,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/uzbekistan_tour',
  },
  {
    id: 44,
    title: 'Vietnam Tour',
    image: assets.InternationalTrip_pic44,
    duration: '4 Nights 5 Days',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/international/vietnam_tour',
  },
];


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
