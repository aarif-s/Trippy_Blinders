import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaPhone, FaEnvelope, FaWhatsapp, FaGoogle } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-sm sm:text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Our Services", path: "/services" },
                { label: "Contact Us", path: "/contact" },
                { label: "Blogs", path: "/blog" },
                { label: "Disclaimer", path: "/disclaimer" },
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Terms & Conditions", path: "/terms" },
              ].map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Delhi Office</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Lane Number 3,<br />
              Abul Fazal Enclave,<br />
              Jamia Nagar, Okhla,<br />
              New Delhi, Delhi 110025
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+919266517788" className="flex items-center gap-2 hover:text-blue-400 transition">
                <FaPhone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">(+91) 9266517788</span>
              </a>
              <a href="https://wa.me/919266517788" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition">
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">WhatsApp</span>
              </a>
              <a href="mailto:support@trippyblinders.com" className="flex items-center gap-2 hover:text-red-400 transition">
                <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">support@trippyblinders.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/trippy_blinders" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transform hover:scale-110 transition">
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://www.facebook.com/trippyblinders/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transform hover:scale-110 transition">
                <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="https://g.co/kgs/h59zMW8" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transform hover:scale-110 transition">
                <FaGoogle className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        {/* <div className="mt-10 sm:mt-12">
          <h3 className="text-base sm:text-lg font-semibold text-center mb-3">Find Us on Google Maps</h3>
          <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.37004906463!2d77.2716903!3d28.5690544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8546678ce8512e4b%3A0x1a912964c1fccf8a!2sTrippy%20Blinders!5e0!3m2!1sen!2sin!4v1712552573746!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div> */}

        {/* Footer Bottom */}
        <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Capture A Trip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
