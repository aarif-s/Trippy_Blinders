import HeroBanner from '../components/HeroBanner'
import CuratedCategories from '../components/CuratedCategories'
import UpcomingTrips from '../components/UpcomingTrips'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import AboutUs from '../components/AboutUs'
import TravelBlogs from '../components/TravelBlogs'
 

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <UpcomingTrips />
      <CuratedCategories />
      <OurServices />
      <Testimonials />
      <AboutUs />
      <TravelBlogs />
      
    </div>
  )
}

export default Home