
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="text-green-400" size={32} />
              <div>
                <div className="text-xl font-bold">GeoLink</div>
                <div className="text-sm text-gray-300">ABU Zaria</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Department of Geography and Environmental Management, 
              Ahmadu Bello University, Zaria. Leading geographical education 
              and environmental research in West Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Department</a></li>
              <li><a href="/lecturers" className="text-gray-300 hover:text-green-400 transition-colors">Faculty</a></li>
              <li><a href="/maps" className="text-gray-300 hover:text-green-400 transition-colors">Campus Maps</a></li>
              <li><a href="/noticeboard" className="text-gray-300 hover:text-green-400 transition-colors">Noticeboard</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-green-400 transition-colors">News & Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="text-green-400 mt-1" size={16} />
                <span className="text-gray-300">
                  Faculty of Physical Sciences,<br />
                  Ahmadu Bello University,<br />
                  Zaria, Kaduna State, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-green-400" size={16} />
                <span className="text-gray-300">geography@abu.edu.ng</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300 text-sm">
                Follow us for the latest updates on research, events, and academic activities.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Department of Geography and Environmental Management, Ahmadu Bello University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
