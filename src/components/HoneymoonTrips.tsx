 
import { Link } from 'react-router-dom'
import assets from '../assets/assets'

const trips = [
  {
    id: 1,
    title: 'Delhi to Leh Motorcycle Tour',
    image: assets.HoneyMoonTrip_pic1,
    link: '/domestic/delhi_to_leh_motorcycle_trip',
  },
  {
    id: 2,
    title: 'Manali Adventure Trip',
    image: assets.HoneyMoonTrip_pic2,
    link: '/domestic/Manali_trip',
  },
  {
    id: 3,
    title: 'Kashmir Backpacking',
    image: assets.HoneyMoonTrip_pic3,
    link: '/domestic/Kashmir_trip',
  },
  {
    id: 4,
    title: 'Leh-Ladakh Road Trip',
    image: assets.HoneyMoonTrip_pic4,
    link: '/domestic/LehLadakh_trip',
  },
  {
    id: 5,
    title: 'Goa Beach Vacation',
    image: assets.HoneyMoonTrip_pic5,
    link: '/domestic/Goa_trip',
  },
  {
    id: 6,
    title: 'Kerala Tour',
    image: assets.HoneyMoonTrip_pic6,
    link: '/domestic/Kerala_trip',
  },
  {
    id: 7,
    title: 'Golden Triangle',
    image:  assets.HoneyMoonTrip_pic7,
    link: '/domestic/golden_triangle_trip',
  },
  {
    id: 8,
    title: 'Jaisalmer Jodpur Trip',
    image: assets.HoneyMoonTrip_pic8,
    link: '/domestic/jaisalmer_jodpur_trip',
  },
  {
    id: 9,
    title: 'Rishikesh Yatra',
    image: assets.HoneyMoonTrip_pic9,
    link: '/domestic/rishikesh_yatra',
  },
  {
    id: 10,
    title: 'Shimla Manali Trip',
    image: assets.HoneyMoonTrip_pic10,
    link: '/domestic/shimla_manali_trip',
  },
  {
    id: 11,
    title: 'Andaman Tour',
    image: assets.HoneyMoonTrip_pic11,
    link: '/domestic/Andaman_trip',
  },
  {
    id: 12,
    title: 'Sikkim Adventure',
    image: assets.HoneyMoonTrip_pic12,
    link: '/domestic/Sikkim_trip',
  },
  {
    id: 13,
    title: 'Darjeeling Tour',
    image: assets.HoneyMoonTrip_pic13,
    link: '/domestic/Darjeeling_trip',
  },
  {
    id: 14,
    title: 'Munnar Trip',
    image: assets.HoneyMoonTrip_pic14,
    link: '/domestic/Munnar_trip',
  },
  {
    id: 15,
    title: 'Kumarakom Tour',
    image: assets.HoneyMoonTrip_pic15,
    link: '/domestic/Kumarakom_trip',
  },
  {
    id: 16,
    title: 'Udaipur Adventure',
    image: assets.HoneyMoonTrip_pic16,
    link: '/domestic/udaipur_adventure',
  },
  {
    id: 17,
    title: 'Varanasi Adventure',
    image: assets.HoneyMoonTrip_pic17,
    link: '/domestic/varanasi_adventure',
  },
  {
    id: 18,
    title: 'Jaipur Tour',
    image: assets.HoneyMoonTrip_pic18,
    link: '/domestic/Jaipur_trip',
  },
  {
    id: 19,
    title: 'Jodhpur Tour',
    image: assets.HoneyMoonTrip_pic19,
    link: '/domestic/Jodhpur_trip',
  },
  {
    id: 20,
    title: 'Delhi Tour',
    image: assets.HoneyMoonTrip_pic20,
    link: '/domestic/Delhi_trip',
  },
  {
    id: 21,
    title: 'Dharamshala Tour',
    image: assets.HoneyMoonTrip_pic21,
    link: '/domestic/Dharamshala_trip',
  },
  {
    id: 22,
    title: 'Shimla Tour',
    image: assets.HoneyMoonTrip_pic22,
    link: '/domestic/Delhi_trip',
  },
  {
    id: 23,
    title: 'Kumarakom Tour',
    image: assets.HoneyMoonTrip_pic23,
    link: '/domestic/Kumarakom_trip',
  },
  {
    id: 24,
    title: 'Mount Abu Tour',
    image: assets.HoneyMoonTrip_pic24,
    link: '/domestic/Mount_Abu_trip',
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
                    className="w-full h-58 object-cover"
                  />
                </Link>
                <div className="lg:p-4 sm:p-2 px-1 py-1 mt-1 mb-1 pt-0">
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
