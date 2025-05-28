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
            <InteractiveMap />
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
