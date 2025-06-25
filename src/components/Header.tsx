
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            DigitalSilk
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
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
            <a href="#services" className="block hover:text-gray-300 transition-colors">Services</a>
            <a href="#portfolio" className="block hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="#about" className="block hover:text-gray-300 transition-colors">About</a>
            <a href="#contact" className="block hover:text-gray-300 transition-colors">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
