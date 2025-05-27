
import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Car, Bus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InteractiveMap from '../components/InteractiveMap';

const Maps = () => {
  const [selectedLocation, setSelectedLocation] = useState('department');

  const locations = [
    {
      id: 'department',
      name: 'Department of Geography',
      description: 'Main department building with lecture halls, faculty offices, and GIS laboratory',
      coordinates: '11.1515° N, 7.6406° E',
      facilities: ['Lecture Halls', 'Faculty Offices', 'GIS Laboratory', 'Student Common Room'],
      type: 'department' as const
    },
    {
      id: 'library',
      name: 'Kashim Ibrahim Library',
      description: 'University main library with extensive geography and environmental science collections',
      coordinates: '11.1520° N, 7.6410° E',
      facilities: ['Digital Library', 'Research Collections', 'Study Rooms', 'Computer Lab'],
      type: 'facility' as const
    },
    {
      id: 'hostel',
      name: 'Student Hostels',
      description: 'On-campus accommodation for undergraduate and postgraduate students',
      coordinates: '11.1500° N, 7.6400° E',
      facilities: ['Male Hostels', 'Female Hostels', 'Dining Halls', 'Recreation Centers'],
      type: 'facility' as const
    },
    {
      id: 'admin',
      name: 'Administrative Block',
      description: 'University administration offices and student services',
      coordinates: '11.1525° N, 7.6415° E',
      facilities: ['Registrar Office', 'Student Affairs', 'Bursary', 'Health Center'],
      type: 'landmark' as const
    }
  ];

  const transportInfo = [
    {
      icon: Car,
      method: 'Private Vehicle',
      description: 'Main gate access via Zaria-Kaduna Road. Parking available near department building.',
      duration: '10 mins from city center'
    },
    {
      icon: Bus,
      method: 'Public Transport',
      description: 'Regular bus services from Zaria city to ABU main gate. Campus shuttle available.',
      duration: '25 mins from city center'
    }
  ];

  const handleGetDirections = () => {
    const selectedLoc = locations.find(loc => loc.id === selectedLocation);
    if (selectedLoc) {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLoc.name + ' ABU Zaria')}`;
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Maps & Location</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Find your way around Ahmadu Bello University campus and locate our department 
            with detailed maps and directions.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location Selector */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Campus Locations</h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedLocation === location.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <MapPin className={`mt-1 ${selectedLocation === location.id ? 'text-green-600' : 'text-gray-400'}`} size={20} />
                      <div>
                        <h4 className={`font-semibold ${selectedLocation === location.id ? 'text-green-800' : 'text-gray-800'}`}>
                          {location.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">{location.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{location.coordinates}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Map */}
            <div className="lg:col-span-2">
              <InteractiveMap
                selectedLocation={selectedLocation}
                onLocationSelect={setSelectedLocation}
                locations={locations.map(loc => ({
                  id: loc.id,
                  name: loc.name,
                  coordinates: [0, 0] as [number, number],
                  description: loc.description,
                  type: loc.type
                }))}
              />
              
              {/* Location Details */}
              <div className="mt-6 bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {locations.find(loc => loc.id === selectedLocation)?.name}
                </h4>
                <p className="text-gray-600 mb-4">
                  {locations.find(loc => loc.id === selectedLocation)?.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-800 mb-2">Available Facilities:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {locations.find(loc => loc.id === selectedLocation)?.facilities.map((facility, index) => (
                      <div key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        {facility}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="flex gap-3">
                  <button 
                    onClick={handleGetDirections}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Get Directions
                  </button>
                  <button 
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                    className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors text-sm"
                  >
                    View in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Info */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Getting to Campus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportInfo.map((transport, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <transport.icon className="text-green-600 mr-3" size={32} />
                  <h3 className="text-xl font-semibold text-gray-800">{transport.method}</h3>
                </div>
                <p className="text-gray-600 mb-3">{transport.description}</p>
                <div className="flex items-center text-sm text-green-600">
                  <Clock className="mr-2" size={16} />
                  <span>{transport.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maps;
