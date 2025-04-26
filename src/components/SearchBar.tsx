import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = ({ containerClass = '', inputClass = '', suggestionClass = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState('');
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const pages = [
    { label: 'Home', to: '/' },
    { label: 'International', to: '/international' },
    { label: 'Domestic', to: '/domestic' },
    { label: 'Honeymoon', to: '/honeymoon' },
    { label: 'Weekend', to: '/weekend' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
    { label: 'About Us', to: '/about' },
  
    // Domestic Trips
    { label: 'Kashmir Trip', to: '/domestic/kashmir_trip' },
    { label: 'Manali Trip', to: '/domestic/manali_trip' },
    { label: 'Leh Ladakh Trip', to: '/domestic/lehladakh_trip' },
    { label: 'Goa Trip', to: '/domestic/goa_trip' },
    { label: 'Kerala Trip', to: '/domestic/Kerala_trip' },
    { label: 'Shimla Trip', to: '/domestic/shimla_trip' },
    { label: 'Delhi to Leh Motorcycle Trip', to: 'domestic/delhi_to_leh_motorcycle_trip' },
    { label: 'Golden Triangle Trip', to: '/domestic/golden_triangle_trip' },
    { label: 'Jaisalmer Jodhpur Trip', to: '/domestic/jaisalmer_jodpur_trip' },
  
    // International Trips
    { label: 'Azerbaijan Baku Tour', to: '/international/azerbaizan_baku_tour' },
    { label: 'Bhutan Tour', to: '/international/bhutan_tour' },
    { label: 'Dubai Tour', to: '/international/dubai_tour' },
    { label: 'Georgia Tour', to: '/international/georgia_tour' },
    { label: 'Malaysia Tour', to: '/international/malaysia_tour' },
    { label: 'Russia Tour', to: '/international/russia_tour' },
  ];
  

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = pages.filter(page =>
        page.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (to) => {
    setSearchTerm('');
    setSuggestions([]);
    navigate(to);
  };

  useEffect(() => {
    if (searchTerm !== '') {
      setDynamicPlaceholder('');
      return;
    }

    const places = ['Manali', 'Shimla', 'Ladakh'];
    let index = 0;
    let currentTimeout, currentInterval;

    const startTypewriter = () => {
      const randomPlace = places[Math.floor(Math.random() * places.length)];
      setDynamicPlaceholder('');
      index = 0;

      currentInterval = setInterval(() => {
        setDynamicPlaceholder(randomPlace.substring(0, index + 1));
        index++;
        if (index === randomPlace.length) {
          clearInterval(currentInterval);
          currentTimeout = setTimeout(startTypewriter, 2000);
        }
      }, 150);
    };

    startTypewriter();
    return () => {
      clearInterval(currentInterval);
      clearTimeout(currentTimeout);
    };
  }, [searchTerm]);

  return (
    <div className={`relative ${containerClass}`} ref={searchRef}>
      <div className="relative flex items-center  w-36 bg-white rounded-full shadow-md p-1 border border-gray-300">
        <FaMapMarkerAlt className="text-gray-500 mx-2 text-xs" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={searchTerm === '' ? dynamicPlaceholder || "Search..." : "Search..."}
          className={`w-full text-xs px-2 py-1 text-gray-700 focus:outline-none ${inputClass}`}
        />
        <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-full">
          <FaSearch className="text-xs" />
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className={`absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10 ${suggestionClass}`}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.to}
              onClick={() => handleSuggestionClick(suggestion.to)}
              className="px-2 py-1 text-xs hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-150"
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
