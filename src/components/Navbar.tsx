import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Academics', 
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Courses', path: '/courses' },
        { name: 'Programs', path: '/programs' },
        { name: 'Lecturers', path: '/lecturers' },
      ]
    },
    { name: 'Career Prospects', path: '/careers' },
    { name: 'GIS Maps', path: '/maps' },
    { name: 'News & Announcements', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isAcademicsActive = () => ['/courses', '/programs', '/lecturers'].some(path => location.pathname.startsWith(path));

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="text-green-600" size={32} />
              <div>
                <div className="text-xl font-bold text-gray-800">GeoLink</div>
                <div className="text-xs text-gray-500">ABU Zaria</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isAcademicsActive()
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAcademicsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isAcademicsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            onClick={() => setIsAcademicsOpen(false)}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(dropdownItem.path)
                                ? 'text-green-600 bg-green-50'
                                : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                          isAcademicsActive()
                            ? 'text-green-600 bg-green-50'
                            : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isAcademicsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAcademicsOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                setIsAcademicsOpen(false);
                              }}
                              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                isActive(dropdownItem.path)
                                  ? 'text-green-600 bg-green-50'
                                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
