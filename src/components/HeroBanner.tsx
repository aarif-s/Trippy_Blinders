import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const taglines = [
  'Connecting Travelers Since 2016',
  'I Came, I Saw, I Captured',
  'Exploring the unexplored',
  'Challenging the unchallenged',
  'Bonding with people',
  'Creating memories',
];

const HeroBanner = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-5xl px-4">
          {/* Dynamic Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 transition-opacity duration-500">
            {taglines[currentTagline]}
          </h1>

          {/* Social Links
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 flex items-center gap-2 transition-colors"
            >
              <span>📸</span> 472k+ followers
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              6,495+ Reviews
            </a>
          </div> */}

          {/* Button with /contact Link */}
          <Link to="/contact">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
              Book Now & Pay Later
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
