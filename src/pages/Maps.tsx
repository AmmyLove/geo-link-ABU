
import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Loader2, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MapboxMap from '../components/map/MapboxMap';
import SearchBox from '../components/map/SearchBox';
import LocationFilters from '../components/map/LocationFilters';
import WeatherWidget from '../components/WeatherWidget';
import LocationServices from '../components/LocationServices';
import VirtualTour from '../components/VirtualTour';
import { campusLocations, getLocationsByCategory, getLocationById } from '../data/campusLocations';

const Maps = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('geography-department');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter locations based on selected categories
  const filteredLocations = selectedCategories.length > 0 
    ? campusLocations.filter(location => selectedCategories.includes(location.category))
    : campusLocations;

  const findLocation = async () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        });
      });

      setUserLocation([position.coords.latitude, position.coords.longitude]);
      
      // Auto-select geography department when location is found
      setSelectedLocation('geography-department');
    } catch (error: any) {
      let errorMessage = "Unable to retrieve your location.";
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = "Location access denied. Please enable location services.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          errorMessage = "Location request timed out. Please try again.";
          break;
      }
      
      setError(errorMessage);
      setUserLocation(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
  };

  const selectedLocationData = getLocationById(selectedLocation);

  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Enhanced Header with better mobile support */}
      <header className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-12 md:py-16 px-4 shadow-lg">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="mr-3" size={28} />
              <h1 className="text-2xl md:text-4xl font-bold">Campus Map & Navigation</h1>
            </div>
            <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
              Explore ABU Zaria campus with interactive maps, real-time weather updates, 
              and advanced location services.
            </p>
          </div>
          
          {/* Search Box in Header */}
          <div className="max-w-2xl mx-auto">
            <SearchBox 
              locations={campusLocations}
              onLocationSelect={handleLocationSelect}
              selectedLocation={selectedLocation}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 md:py-8 px-4">
        {/* Enhanced Location Info Bar */}
        {selectedLocationData && (
          <div className="bg-white rounded-xl p-4 md:p-6 mb-6 md:mb-8 shadow-lg border">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between space-y-4 lg:space-y-0">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{selectedLocationData.name}</h2>
                    {selectedLocationData.buildingNumber && (
                      <div className="text-sm font-mono text-gray-500 mb-2">
                        Building: {selectedLocationData.buildingNumber}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="capitalize bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      {selectedLocationData.type}
                    </span>
                    <span className="capitalize bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {selectedLocationData.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-3 text-sm md:text-base">{selectedLocationData.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Navigation size={16} className="mr-2" />
                      <span>
                        {selectedLocationData.coordinates[0].toFixed(4)}, {selectedLocationData.coordinates[1].toFixed(4)}
                      </span>
                    </div>
                    {selectedLocationData.hours && (
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                          <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
                        </div>
                        <span>{selectedLocationData.hours}</span>
                      </div>
                    )}
                    {selectedLocationData.contact && (
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                        <span>{selectedLocationData.contact}</span>
                      </div>
                    )}
                  </div>
                  
                  {selectedLocationData.features.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedLocationData.features.slice(0, 4).map((feature, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                        {selectedLocationData.features.length > 4 && (
                          <span className="text-xs text-gray-500">
                            +{selectedLocationData.features.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 md:gap-8">
          {/* Interactive Map Section */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
              <div className="p-4 md:p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Interactive Campus Map</h3>
                    <p className="text-gray-600 text-sm">Click on markers to explore different campus locations</p>
                  </div>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Filter size={16} />
                    <span className="text-sm font-medium">Filters</span>
                    {selectedCategories.length > 0 && (
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {selectedCategories.length}
                      </span>
                    )}
                  </button>
                </div>
                
                {showFilters && (
                  <div className="mb-4">
                    <LocationFilters
                      selectedCategories={selectedCategories}
                      onCategoryToggle={handleCategoryToggle}
                      onClearFilters={handleClearFilters}
                    />
                  </div>
                )}
              </div>
              <div className="p-4 md:p-6">
                <MapboxMap 
                  selectedLocation={selectedLocation}
                  onLocationSelect={handleLocationSelect}
                  locations={filteredLocations}
                  userLocation={userLocation}
                  height="h-[600px]"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            <LocationServices 
              onFindLocation={findLocation} 
              userLocation={userLocation}
              isLoading={isLoading}
            />
            <WeatherWidget />
            
            {/* Enhanced Quick Actions */}
            {/* <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-50 hover:bg-green-100 text-green-700 rounded-lg p-3 transition-colors text-sm font-medium border border-green-200 flex items-center justify-center space-x-2">
                  <MapPin size={16} />
                  <span>Campus Virtual Tour</span>
                </button>
                <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg p-3 transition-colors text-sm font-medium border border-blue-200 flex items-center justify-center space-x-2">
                  <Navigation size={16} />
                  <span>Download Campus App</span>
                </button>
                <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg p-3 transition-colors text-sm font-medium border border-purple-200 flex items-center justify-center space-x-2">
                  <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                  <span>Emergency Contacts</span>
                </button>
              </div>
            </div> */}

            {/* Campus Statistics */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Campus Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Area</span>
                  <span className="font-semibold text-gray-900">7,000 acres</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Students</span>
                  <span className="font-semibold text-gray-900">35,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Faculties</span>
                  <span className="font-semibold text-gray-900">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Departments</span>
                  <span className="font-semibold text-gray-900">108</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Departmental Tour Section */}
        <div className="mt-12">
          <VirtualTour />
        </div>
      </main>

      {/* Enhanced Error Display */}
      {error && (
        <div className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto md:max-w-sm bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg shadow-lg z-50">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium">Location Error</p>
              <p className="text-xs mt-1">{error}</p>
            </div>
            <button 
              onClick={() => setError(null)}
              className="flex-shrink-0 ml-3 text-red-400 hover:text-red-600"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl flex items-center space-x-3">
            <Loader2 className="animate-spin text-green-600" size={24} />
            <span className="text-gray-700 font-medium">Finding your location...</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Maps;
