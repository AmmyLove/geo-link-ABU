
import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyInfo = () => {
  return (
    <section className="py-16 px-4 bg-red-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-800 mb-6">Emergency Information</h2>
        <p className="text-red-700 mb-8">
          For urgent matters or emergencies on campus, please contact the following numbers immediately:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Phone className="text-red-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-red-800 mb-2">Campus Security</h3>
            <a href="tel:+2346955502222" className="text-red-700 hover:text-red-800">
              +234 (0) 69 550 2222
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Phone className="text-red-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-red-800 mb-2">Health Center</h3>
            <a href="tel:+2346955503333" className="text-red-700 hover:text-red-800">
              +234 (0) 69 550 3333
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Phone className="text-red-600 mx-auto mb-3" size={32} />
            <h3 className="font-semibold text-red-800 mb-2">Fire Service</h3>
            <a href="tel:+2346955504444" className="text-red-700 hover:text-red-800">
              +234 (0) 69 550 4444
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyInfo;
