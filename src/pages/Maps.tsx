
import React, { useState } from 'react';
import { MapPin, Cloud, Layers, Navigation } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InteractiveMap from '../components/InteractiveMap';
import WeatherWidget from '../components/WeatherWidget';
import LocationServices from '../components/LocationServices';

const Maps = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('main-gate');
  const [mapLayer, setMapLayer] = useState<string>('standard');

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <header className="bg-gradient-to-r from-green-400 to-emerald-500 text-white py-12 px-4 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Our Campus and Beyond</h1>
          <p className="text-lg">Interactive maps, weather updates, and location services for students and visitors.</p>
        </div>
      </header>

      <main className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Interactive Map Section */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setMapLayer('standard')}
                  className={`px-3 py-1 rounded ${mapLayer === 'standard' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setMapLayer('satellite')}
                  className={`px-3 py-1 rounded ${mapLayer === 'satellite' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                >
                  Satellite
                </button>
                <button
                  onClick={() => setMapLayer('terrain')}
                  className={`px-3 py-1 rounded ${mapLayer === 'terrain' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                >
                  Terrain
                </button>
              </div>
            </div>
            <InteractiveMap 
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
              locations={campusLocations}
              mapLayer={mapLayer}
              userLocation={userLocation}
            />
          </div>
        </div>

        {/* Location Services and Weather */}
        <div className="space-y-8">
          <LocationServices onFindLocation={findLocation} userLocation={userLocation} />
          <WeatherWidget />
        </div>
      </main>

      {error && (
        <div className="fixed bottom-4 left-4 bg-red-200 text-red-700 p-3 rounded-md shadow-md">
          Error: {error}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Maps;
