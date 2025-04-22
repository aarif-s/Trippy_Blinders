 
import { Link } from 'react-router-dom'
import assets from '../assets/assets'


const trips = [
  {
    id: 1,
    title: 'Andman Islands Trip',
    image: assets.DomesticTrip_pic1,
    duration: '9 days, 8 nights',
    price: '₹12,999',
    originalPrice: '₹15,999',
    link: '/domestic/delhi_to_leh_motorcycle_trip',
  },
  {
    id: 2,
    title: 'Delhi Trip',
    image: assets.DomesticTrip_pic2,
    duration: '6 days, 5 nights',
    price: '₹18,499',
    originalPrice: '₹21,999',
    
    link: '/domestic/Manali_trip',
  },
  {
    id: 3,
    title: 'Hampta pass',
    image: assets.DomesticTrip_pic4,
    duration: '6 days, 5 nights',
    price: '₹19,999',
    originalPrice: '₹24,999',
    
    link: '/domestic/Kashmir_trip',
  },
  {
    id: 4,
    title: 'Jaipur',
    image: assets.DomesticTrip_pic5,
    duration: '9 days, 8 nights',
    price: '₹29,999',
    originalPrice: '₹34,999',
    
    link: '/domestic/jaisalmer_jodpur_trip',
  },
  {
    id: 5,
    title: 'Jaisalmer',
    image: assets.DomesticTrip_pic6,
    duration: '5 days, 4 nights',
    price: '₹15,999',
    originalPrice: '₹19,999',
 
    link: '/domestic/jaisalmer_jodpur_trip',
  },
  {
    id: 6,
    title: 'Kashmir',
    image: assets.DomesticTrip_pic7,
    duration: '8 days, 7 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    
    link: ' /domestic/Kashmir_trip',
  },                                       
  {
    id: 7,
    title: 'Manali',
    image: assets.DomesticTrip_pic8,
    duration: '7 days, 6 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Manali_trip',

  },
  {
    id: 8,
    title: 'North-East India',
    image: assets.DomesticTrip_pic9,
    duration: '4 days, 3 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/jaisalmer_jodpur_trip',
  },
  {
    id: 9,
    title: 'Sonmarg',
    image: assets.DomesticTrip_pic10,
    duration: '4 days, 3 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/rishikesh_yatra',
  },
  {
    id: 10,
    title: 'Taj mahal',
    image: assets.DomesticTrip_pic11,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/sikkim_adventure',
  },
  {
    id: 11,
    title: 'banaras',
    image: assets.DomesticTrip_pic12,
    duration: '4 days, 3 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/udaipur_adventure',
  },
  {
    id: 12,
    title: 'bir billing',
    image: assets.DomesticTrip_pic13,
    duration: '4 days, 3 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/varanasi_adventure',
  },
  {
    id: 13,
    title: 'bodhgaya',
    image: assets.DomesticTrip_pic14,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Andaman_trip',
  },
  {
    id: 14,
    title: 'dharamshala',
    image: assets.DomesticTrip_pic15,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Darjeeling_trip',
  },
  {
    id: 15,
    title: 'jodhpur',
    image: assets.DomesticTrip_pic16,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Dharamshala_trip',
  }, 
  
  {
    id: 16,
    title: 'kerala',
    image: assets.DomesticTrip_pic17,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Kerala_trip',
  }, 
  
    {
      id: 17,
      title: 'ladakh',
      image: assets.DomesticTrip_pic18,
      duration: '6 days, 5 nights',
      price: '₹23,999',
      originalPrice: '₹28,999',
      link: '/domestic/lehladakh_trip',
    },  
    {
    id: 18,
    title: 'lakshadweep',
    image: assets.DomesticTrip_pic19,
    duration: '5 days, 4 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Goa_trip',
  },
  {
    id: 19,
    title: 'meghalaya',
    image: assets.DomesticTrip_pic20,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Kumarakom_trip',
  },
  {
    id: 20,
    title: 'mussoorie',
    image: assets.DomesticTrip_pic21,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Kumarakom_trip',
  },  
  {
    id: 21,
    title: 'nainital',
    image: assets.DomesticTrip_pic22,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Kumarakom_trip',
  },
  {
    id: 22,
    title: 'ooty',
    image: assets.DomesticTrip_pic23,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Kumarakom_trip',
  },
  {
    id: 23,
    title: 'shimla',
    image: assets.DomesticTrip_pic24,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/shimla_trip',
  },
  {
    id: 24,
    title: 'spiti',
    image: assets.DomesticTrip_pic25,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Kumarakom_trip',
  },  
  {
    id: 25,
    title: 'udaipur',
    image: assets.DomesticTrip_pic26,
    duration: '6 days, 5 nights',
    price: '₹23,999',
    originalPrice: '₹28,999',
    link: '/domestic/Kumarakom_trip',
  },   
  
  
  
]

const DomesticTrips = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto  sm:px-0 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Upcoming Trips</h2>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 sm:gap-1 sm:px-2 ">
           {trips.map((trip) => (
                      <div key={trip.id} className="px-2 py-2">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                          <Link to={trip.link} className="block relative ">
                            {/* 
                              Wrap the image in a relative container, 
                              so we can absolutely-position the duration badge.
                            */}
                            <img
                              src={trip.image}
                              alt={trip.title}
                              className="w-full h-48 object-cover"
                            />
                            {/* Duration badge in the top-left corner */}
                            <div className="absolute px-2 top-2 left-2 bg-blue-500 text-white text-sm font-semibold lg:px-3 sm:px-2 py-1 rounded-br-lg rounded-tl-lg shadow">
                              {trip.duration}
                            </div>
          
                            {/* Card content */}
                            <div className="lg:p-2 sm:p-3 pt-0">
                              <h3 className="lg:text-xl sm:text-sm font-semibold px-2 mb-1">{trip.title}</h3>
                              <div className="flex items-baseline mb-1 lg:mb-0">
                                <span className="lg:text-2xl  sm:text-base px-1 font-bold text-blue-500">
                                  {trip.price}
                                </span>
                                <span className="ml-2 text-gray-500 line-through">
                                  {trip.originalPrice}
                                </span>
                              </div>
                            </div>
                          </Link>
          
                          {/* Request Callback Button */}
                          <div className="lg:p-4 sm:p-2 px-1 py-1 pt-0 ">
                            <Link to="/contact">
                              <button className="w-full  bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
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

export default DomesticTrips








 