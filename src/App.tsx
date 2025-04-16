import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import International from './pages/International'
import Domestic from './pages/Domestic'
import Honeymoon from './pages/Honeymoon'
import Services from './pages/Services'
import Weekend from './pages/Weekend'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

// blogs imports
import Blog1 from './pages/Blogs/Kashmir'
 
// Domestic trip imports
import Kashmir_trip from './pages/Domestic/Kashmir_trip'
import Manali_trip from './pages/Domestic/Manali_trip'
import LehLadakh_trip from './pages/Domestic/LehLadakh_trip'
import Goa_trip from './pages/Domestic/Goa_trip'
import Kerala_trip from './pages/Domestic/Kerala_trip'
import Shimla_trip from './pages/Domestic/Shimla_trip'
import DelhiToLadakhBike_trip from './pages/Domestic/DelhiToLadakhBike_trip'
import Golden_triangle_trip from './pages/Domestic/Golden_triangle_trip'
import Jaisalmer_Jodpur_trip from './pages/Domestic/Jaisalmer_Jodpur_trip'

// International trip imports
import AzerbaizanBakuTour from './pages/International/AzerbaizanBakuTour'
import BhutanTour from './pages/International/BhutanTour'
import DubaiTour from './pages/International/DubaiTour'
import GeorgiaTour from './pages/International/GeorgiaTour'
import MalaysiaTour from './pages/International/MalaysiaTour'
import RussiaTour from './pages/International/RussiaTour'



import AboutUs from './components/AboutUs'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop';
import Kashmir from './pages/Blogs/Kashmir'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            // Navbar routes
            <Route path="/international" element={<International />} />
            <Route path="/domestic" element={<Domestic />} />
            <Route path="/honeymoon" element={<Honeymoon />} /> 
            <Route path="/services" element={<Services />} />
            <Route path="/weekend" element={<Weekend />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />

            // Blogs routes
            <Route path="/blog/kashmir" element={<Kashmir />} />

            // Domesctic trip routes 
            <Route path="/domestic/kashmir_trip" element={<Kashmir_trip />} />
            <Route path="/domestic/manali_trip" element={<Manali_trip />} />
            <Route path="/domestic/lehladakh_trip" element={<LehLadakh_trip />} />
            <Route path="/domestic/goa_trip" element={<Goa_trip />} />
            <Route path="/domestic/Kerala_trip" element={<Kerala_trip />} />
            <Route path="/domestic/shimla_trip" element={<Shimla_trip />} />
            <Route path="domestic/delhi_to_leh_motorcycle_trip" element={<DelhiToLadakhBike_trip />} />
            <Route path="/domestic/golden_triangle_trip" element={<Golden_triangle_trip />} />
            <Route path="/domestic/jaisalmer_jodpur_trip" element={<Jaisalmer_Jodpur_trip />} />

            // International trip routes
            <Route path="/international/azerbaizan_baku_tour" element={<AzerbaizanBakuTour />} />
            <Route path="/international/bhutan_tour" element={<BhutanTour />} />
            <Route path="/international/dubai_tour" element={<DubaiTour />} />
            <Route path="/international/georgia_tour" element={<GeorgiaTour />} />
            <Route path="/international/malaysia_tour" element={<MalaysiaTour />} />
            <Route path="/international/russia_tour" element={<RussiaTour />} />
          
          </Routes>
          <WhatsAppButton />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App