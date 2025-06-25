
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DEH Media
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-gray-300 transition-colors ${isActive('/') ? 'text-purple-400' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-gray-300 transition-colors ${isActive('/services') ? 'text-purple-400' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-gray-300 transition-colors ${isActive('/about') ? 'text-purple-400' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-gray-300 transition-colors ${isActive('/contact') ? 'text-purple-400' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              to="/" 
              className={`block hover:text-gray-300 transition-colors ${isActive('/') ? 'text-purple-400' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block hover:text-gray-300 transition-colors ${isActive('/services') ? 'text-purple-400' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`block hover:text-gray-300 transition-colors ${isActive('/about') ? 'text-purple-400' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block hover:text-gray-300 transition-colors ${isActive('/contact') ? 'text-purple-400' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
