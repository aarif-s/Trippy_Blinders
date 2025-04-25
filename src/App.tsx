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
import Andaman_island_trip from './pages/Domestic/Andaman_island_trip'
import Delhi_trip from './pages/Domestic/Delhi_trip'
import Hampta_pass_trip from './pages/Domestic/Hampta_pass_trip'
import Jaipur_trip from './pages//domestic/Jaipur_trip'
import Jaisalmer_trip from './pages/Domestic/Jaisalmer_trip'
import Kashmir_trip from './pages/Domestic/Kashmir_trip'
import Manali_trip from './pages/Domestic/Manali_trip'
import LehLadakh_trip from './pages/Domestic/LehLadakh_trip' 
import Kerala_trip from './pages/Domestic/Kerala_trip'
import Shimla_trip from './pages/Domestic/Shimla_trip'
import North_east_india from './pages/Domestic/North_east_india'
import Sonmarg_trip from './pages/Domestic/Sonmarg_trip'
import Taj_mahal_trip from './pages/Domestic/Taj_mahal_trip'
import Banaras_trip from './pages/Domestic/Banaras_trip'
import Bir_billing_trip from './pages/Domestic/Bir_billing_trip'
import Bodhgaya_trip from './pages/Domestic/Bodhgaya_trip'
import Dharamshala_trip from './pages/Domestic/Dharamshala_trip'
import Jodhpur_trip from './pages/Domestic/Jodhpur_trip'
import Lakshadweep_trip from './pages/Domestic/Lakshadweep_trip'
import Meghalaya_trip from './pages/Domestic/Meghalaya_trip'
import Mussoori_trip from './pages/Domestic/Mussoorie_trip'
import Nainital_trip from './pages/Domestic/Nainital_trip'
import Ooty_trip from './pages/Domestic/Ooty_trip'
import Spiti_trip from './pages/Domestic/Spiti_trip'
import Udaipur_trip from './pages/Domestic/Udaipur_trip'
 

// International trip imports
import South_africa_tour from './pages/International/South_africa_tour'
import Australia_tour from './pages/International/Australia_tour'
import AzerbaizanBakuTour from './pages/International/AzerbaizanBakuTour'
import Egypt_cairo_tour from './pages/International/Egypt_cairo_tour'
import Turkey_istanbul_tour from './pages/International/Turkey_istanbul_tour'
import Laos_tour from './pages/International/Laos_tour'
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
            <Route path="/domestic/Andaman_island_trip" element={<Andaman_island_trip />} />
            <Route path="domestic/Delhi_trip" element={<Delhi_trip />} />
            <Route path="/domestic/Hapmta_pass_trip" element={<Hampta_pass_trip />} />
            <Route path="/domestic/Jaipur_trip" element={<Jaipur_trip />} />
            <Route path="/domestic/Jaisalmer_trip" element={<Jaisalmer_trip />} />
            <Route path="/domestic/kashmir_trip" element={<Kashmir_trip />} />
            <Route path="/domestic/manali_trip" element={<Manali_trip />} />
            <Route path="/domestic/lehladakh_trip" element={<LehLadakh_trip />} />
            <Route path="/domestic/Kerala_trip" element={<Kerala_trip />} />
            <Route path="/domestic/shimla_trip" element={<Shimla_trip />} />
            <Route path="/domestic/north_east_india" element={<North_east_india />} />
            <Route path="/domestic/sonmarg_trip" element={<Sonmarg_trip />} />
            <Route path="/domestic/taj_mahal_trip" element={<Taj_mahal_trip />} />
            <Route path="/domestic/banaras_trip" element={<Banaras_trip />} />
            <Route path="/domestic/bir_billing_trip" element={<Bir_billing_trip />} />
            <Route path="/domestic/bodhgaya_trip" element={<Bodhgaya_trip />} />
            <Route path="/domestic/dharamshala_trip" element={<Dharamshala_trip />} />
            <Route path="/domestic/jodhpur_trip" element={<Jodhpur_trip />} />
            <Route path="/domestic/lakshadweep_trip" element={<Lakshadweep_trip />} />
            <Route path="/domestic/meghalaya_trip" element={<Meghalaya_trip />} />
            <Route path="/domestic/mussoori_trip" element={<Mussoori_trip />} />
            <Route path="/domestic/nainital_trip" element={<Nainital_trip />} />
            <Route path="/domestic/ooty_trip" element={<Ooty_trip />} />
            <Route path="/domestic/spiti_trip" element={<Spiti_trip />} />
            <Route path="/domestic/udaipur_trip" element={<Udaipur_trip />} />


             
            

            // International trip routes
            <Route path="/international/south_africa_tour" element={<South_africa_tour />} />
            <Route path="/international/australia_tour" element={<Australia_tour />} />
            <Route path="/international/azerbaizan_baku_tour" element={<AzerbaizanBakuTour />} />
            <Route path="/international/egypt_cairo_tour" element={<Egypt_cairo_tour />} />
            <Route path="/international/turkey_istanbul_tour" element={<Turkey_istanbul_tour />} />
            <Route path="/international/laos_tour" element={<Laos_tour />} />
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