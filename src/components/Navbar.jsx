import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo-clean.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Function to get active class names
  const getActiveClass = (path) => {
    return isActive(path) 
      ? 'text-secondary-300' 
      : 'text-gray-700 hover:text-secondary-300';
  };

  // Function to get mobile active class names
  const getMobileActiveClass = (path) => {
    return isActive(path) 
      ? 'text-secondary-300 bg-primary-700' 
      : 'text-white hover:text-secondary-300';
  };

  // Close menu dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuDropdown(false);
      }
    };

    // Close dropdown when location changes
    setMenuDropdown(false);

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [location]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-secondary-300 text-2xl font-bold">
              <img src={logo} alt="Sultan Lebanese Kebab" className="h-full w-36" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-3 text-xl py-2 rounded-md text-sm font-medium transition-colors ${getActiveClass('/')}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 text-xl py-2 rounded-md text-sm font-medium transition-colors ${getActiveClass('/about')}`}
              >
                About Us
              </Link>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuDropdown(!menuDropdown)}
                  className={`px-3 text-xl py-2 rounded-md text-sm font-medium transition-colors flex items-center ${getActiveClass('/menu')}`}
                >
                  Menu <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {menuDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link to="/menu?category=kebab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Kebab
                    </Link>
                    <Link to="/menu?category=hotdough" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Hotdough
                    </Link>
                    <Link to="/menu?category=burger" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Burger
                    </Link>
                  </div>
                )}
              </div>
              {/* <Link 
                to="/partnership" 
                className={`px-3 text-xl py-2 rounded-md text-sm font-medium transition-colors ${getActiveClass('/partnership')}`}
              >
                Kemitraan
              </Link> */}
              <Link 
                to="/gallery" 
                className={`px-3 text-xl py-2 rounded-md text-sm font-medium transition-colors ${getActiveClass('/gallery')}`}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 text-xl py-2 rounded-md text-sm font-medium transition-colors ${getActiveClass('/contact')}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-secondary-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-800">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${getMobileActiveClass('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${getMobileActiveClass('/about')}`}
            >
              About Us
            </Link>
            <Link 
              to="/menu" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${getMobileActiveClass('/menu')}`}
            >
              Menu
            </Link>
            <Link 
              to="/partnership" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${getMobileActiveClass('/partnership')}`}
            >
              Kemitraan
            </Link>
            <Link 
              to="/gallery" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${getMobileActiveClass('/gallery')}`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${getMobileActiveClass('/contact')}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;