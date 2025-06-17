import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Merken', href: '/merken' },
    { name: 'Tractoren te koop', href: '/tractoren-te-koop' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-agri-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logovofvbladel.png"
              alt="VOF van Bladel Logo"
              className="h-12 w-auto"
            />
            <div>
              <span className="text-2xl font-bold text-agri-green">VOF van Bladel</span>
              <div className="text-xs text-gray-600 font-medium">Sinds 1983</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${isActive(item.href)
                  ? 'text-white bg-agri-red shadow-lg'
                  : 'text-agri-green hover:text-agri-red hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-lg text-agri-green hover:text-agri-red hover:bg-gray-50 transition-colors duration-200"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-gray-50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 ${isActive(item.href)
                    ? 'text-white bg-agri-red'
                    : 'text-agri-green hover:text-agri-red hover:bg-white'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
