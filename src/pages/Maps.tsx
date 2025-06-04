
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InteractiveMap from '../components/InteractiveMap';
import WeatherWidget from '../components/WeatherWidget';
import LocationServices from '../components/LocationServices';
import VirtualTour from '../components/VirtualTour';

const Maps = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('main-gate');

  const campusLocations = [
    {
      id: 'main-gate',
      name: 'Main Gate',
      coordinates: [7.6383, 11.1531] as [number, number],
      description: 'Main entrance to ABU Zaria campus',
      type: 'landmark' as const
    },
    {
      id: 'geography-dept',
      name: 'Geography Department',
      coordinates: [7.6403, 11.1541] as [number, number],
      description: 'Department of Geography and Environmental Management',
      type: 'department' as const
    },
    {
      id: 'library',
      name: 'Kashim Ibrahim Library',
      coordinates: [7.6393, 11.1521] as [number, number],
      description: 'Main university library',
      type: 'facility' as const
    },
    {
      id: 'student-center',
      name: 'Student Center',
      coordinates: [7.6413, 11.1551] as [number, number],
      description: 'Student activities and services center',
      type: 'facility' as const
    }
  ];

  const findLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          setError(null);
        },
        (error) => {
          setError(error.message);
          setUserLocation(null);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setUserLocation(null);
    }
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const selectedLocationData = campusLocations.find(loc => loc.id === selectedLocation);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <header className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16 px-4 shadow-lg">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="mr-3" size={32} />
            <h1 className="text-4xl font-bold">Campus Map & Navigation</h1>
          </div>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore ABU Zaria campus with our interactive map, get real-time weather updates, 
            and find your way around with advanced location services.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Location Info Bar */}
        {selectedLocationData && (
          <div className="bg-white rounded-xl p-6 mb-8 shadow-lg border">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocationData.name}</h2>
                <p className="text-gray-600 mb-2">{selectedLocationData.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Navigation size={16} className="mr-1" />
                    Coordinates: {selectedLocationData.coordinates[0]}, {selectedLocationData.coordinates[1]}
                  </span>
                  <span className="capitalize bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {selectedLocationData.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Interactive Map Section */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Campus Map</h3>
                <p className="text-gray-600 text-sm">Click on markers to explore different campus locations</p>
              </div>
              <div className="p-6">
                <InteractiveMap 
                  selectedLocation={selectedLocation}
                  onLocationSelect={handleLocationSelect}
                  locations={campusLocations}
                  userLocation={userLocation}
                />
              </div>
            </div>
          </div>

          {/* Sidebar with Location Services and Weather */}
          <div className="xl:col-span-1 space-y-6">
            <LocationServices onFindLocation={findLocation} userLocation={userLocation} />
            <WeatherWidget />
            
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-50 hover:bg-green-100 text-green-700 rounded-lg p-3 transition-colors text-sm font-medium border border-green-200">
                  Campus Virtual Tour
                </button>
                <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg p-3 transition-colors text-sm font-medium border border-blue-200">
                  Download Campus App
                </button>
                <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg p-3 transition-colors text-sm font-medium border border-purple-200">
                  Emergency Contacts
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Departmental Tour Section */}
        <div className="mt-12">
          <VirtualTour />
        </div>
      </main>

      {error && (
        <div className="fixed bottom-4 left-4 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Location Error</p>
              <p className="text-xs">{error}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Maps;
