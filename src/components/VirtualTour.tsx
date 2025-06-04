
import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

const VirtualTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(0);

  const locations = [
    {
      name: 'Department Entrance',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      description: 'Welcome to the Department of Geography and Environmental Management'
    },
    {
      name: 'GIS Laboratory',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'State-of-the-art GIS and Remote Sensing Laboratory with modern equipment'
    },
    {
      name: 'Lecture Halls',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop',
      description: 'Modern lecture halls equipped with multimedia facilities for interactive learning'
    },
    {
      name: 'Faculty Offices',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Faculty offices where students can meet with professors for guidance'
    },
    {
      name: 'Research Center',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=600&fit=crop',
      description: 'Climate Change and Environmental Research Center for advanced studies'
    },
    {
      name: 'Student Study Area',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      description: 'Collaborative study spaces for group work and individual research'
    }
  ];

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % locations.length);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextLocation, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Virtual Departmental Tour</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the Department of Geography and Environmental Management facilities
            and discover our modern learning environments.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Viewer */}
          <div className="relative">
            <img
              src={locations[currentLocation].image}
              alt={locations[currentLocation].name}
              className="w-full h-96 md:h-[500px] object-cover"
            />
            
            {/* Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {locations[currentLocation].name}
                </h3>
                <p className="text-white/90">
                  {locations[currentLocation].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevLocation}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <RotateCcw size={24} />
            </button>
            <button
              onClick={nextLocation}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <RotateCcw size={24} className="transform rotate-180" />
            </button>

            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                <ZoomIn size={20} />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                <ZoomOut size={20} />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                <Maximize2 size={20} />
              </button>
            </div>
          </div>

          {/* Control Panel */}
          <div className="p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlayback}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  <span>{isPlaying ? 'Pause Tour' : 'Start Auto Tour'}</span>
                </button>
                
                <div className="text-sm text-gray-600">
                  {currentLocation + 1} of {locations.length} locations
                </div>
              </div>

              <div className="text-sm text-gray-500">
                Navigate through departmental facilities
              </div>
            </div>

            {/* Location Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLocation(index)}
                  className={`relative rounded-lg overflow-hidden transition-all ${
                    currentLocation === index
                      ? 'ring-2 ring-green-500 transform scale-105'
                      : 'hover:transform hover:scale-105'
                  }`}
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-1 left-1 right-1">
                      <p className="text-white text-xs font-medium truncate">
                        {location.name}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Department Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Learn more about our programs and research opportunities in Geography and Environmental Management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              View Academic Programs
            </button>
            <button className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
              Research Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
