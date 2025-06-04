
import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, Maximize2, Volume2, VolumeX, Info, Camera, Heart } from 'lucide-react';

interface TourLocation {
  name: string;
  image: string;
  description: string;
  details: string[];
  highlights: string[];
  audioDescription?: boolean;
}

const VirtualTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const locations: TourLocation[] = [
    {
      name: 'Department Entrance',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      description: 'Welcome to the Department of Geography and Environmental Management',
      details: [
        'Modern glass facade with sustainable design principles',
        'Accessibility features including ramps and wide doorways',
        'Information board displaying current research projects'
      ],
      highlights: ['Sustainable Architecture', 'Accessibility Features', 'Information Hub']
    },
    {
      name: 'GIS Laboratory',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'State-of-the-art GIS and Remote Sensing Laboratory',
      details: [
        '30 high-performance workstations with latest GIS software',
        'Drone technology for aerial surveying and mapping',
        'Advanced GPS equipment for fieldwork training'
      ],
      highlights: ['Latest Technology', 'Hands-on Learning', 'Research Equipment']
    },
    {
      name: 'Smart Lecture Halls',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop',
      description: 'Interactive learning spaces with modern multimedia facilities',
      details: [
        'Capacity for 150 students with excellent acoustics',
        'Interactive whiteboards and projection systems',
        'Climate-controlled environment for comfort'
      ],
      highlights: ['Interactive Technology', 'Comfortable Seating', 'Audio-Visual Equipment']
    },
    {
      name: 'Faculty Research Offices',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Dedicated spaces for faculty research and student consultation',
      details: [
        'Private offices for faculty members',
        'Meeting rooms for student supervision',
        'Research libraries with specialized collections'
      ],
      highlights: ['Research Focus', 'Student Support', 'Academic Resources']
    },
    {
      name: 'Climate Research Center',
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=600&fit=crop',
      description: 'Advanced climate monitoring and environmental research facility',
      details: [
        'Weather monitoring station with real-time data',
        'Soil and water analysis laboratory',
        'Climate modeling and simulation computers'
      ],
      highlights: ['Real-time Monitoring', 'Laboratory Analysis', 'Climate Modeling']
    },
    {
      name: 'Collaborative Study Spaces',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      description: 'Modern study areas designed for collaboration and individual work',
      details: [
        'Flexible furniture arrangements for group work',
        'High-speed internet and charging stations',
        'Quiet zones for individual study'
      ],
      highlights: ['Flexible Design', 'Technology Integration', 'Quiet Study Areas']
    }
  ];

  const nextLocation = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentLocation((prev) => (prev + 1) % locations.length);
      setLoading(false);
    }, 500);
  };

  const prevLocation = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentLocation((prev) => (prev - 1 + locations.length) % locations.length);
      setLoading(false);
    }, 500);
  };

  const goToLocation = (index: number) => {
    if (index !== currentLocation) {
      setLoading(true);
      setTimeout(() => {
        setCurrentLocation(index);
        setLoading(false);
      }, 500);
    }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextLocation, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
      if (e.key === 'ArrowLeft') prevLocation();
      if (e.key === 'ArrowRight') nextLocation();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlayback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const currentLocationData = locations[currentLocation];

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Virtual Departmental Tour</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore the Department of Geography and Environmental Management facilities
            with our interactive virtual tour experience.
          </p>
        </div>

        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden ${
          isFullscreen ? 'fixed inset-4 z-50' : ''
        }`}>
          {/* Main Viewer */}
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
                  <div className="animate-spin w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full"></div>
                  <span className="text-gray-700 font-medium">Loading...</span>
                </div>
              </div>
            )}
            
            <img
              src={currentLocationData.image}
              alt={currentLocationData.name}
              className={`w-full h-64 md:h-96 lg:h-[500px] object-cover transition-opacity duration-500 ${
                loading ? 'opacity-50' : 'opacity-100'
              }`}
            />
            
            {/* Enhanced Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {currentLocationData.name}
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-3">
                  {currentLocationData.description}
                </p>
                
                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentLocationData.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevLocation}
              disabled={loading}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors disabled:opacity-50"
            >
              <RotateCcw size={20} />
            </button>
            <button
              onClick={nextLocation}
              disabled={loading}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors disabled:opacity-50"
            >
              <RotateCcw size={20} className="transform rotate-180" />
            </button>

            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className={`bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors ${
                  showInfo ? 'ring-2 ring-white' : ''
                }`}
              >
                <Info size={18} />
              </button>
              <button
                onClick={() => toggleFavorite(currentLocation)}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Heart size={18} fill={favorites.includes(currentLocation) ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                {audioEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Maximize2 size={18} />
              </button>
            </div>

            {/* Information Panel */}
            {showInfo && (
              <div className="absolute top-16 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 max-w-xs shadow-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Details</h4>
                <ul className="space-y-1">
                  {currentLocationData.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Enhanced Control Panel */}
          <div className="p-4 md:p-6 bg-gray-50">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-3 md:space-y-0">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlayback}
                  disabled={loading}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  <span className="hidden md:inline">{isPlaying ? 'Pause Tour' : 'Start Auto Tour'}</span>
                </button>
                
                <div className="text-sm text-gray-600">
                  {currentLocation + 1} of {locations.length} locations
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Camera size={16} />
                <span>Use arrow keys to navigate</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentLocation + 1) / locations.length) * 100}%` }}
              ></div>
            </div>

            {/* Enhanced Location Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {locations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => goToLocation(index)}
                  disabled={loading}
                  className={`relative rounded-lg overflow-hidden transition-all group ${
                    currentLocation === index
                      ? 'ring-2 ring-green-500 transform scale-105'
                      : 'hover:transform hover:scale-105'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-16 md:h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-1 left-1 right-1">
                      <p className="text-white text-xs font-medium truncate">
                        {location.name}
                      </p>
                    </div>
                  </div>
                  {favorites.includes(index) && (
                    <div className="absolute top-1 right-1">
                      <Heart size={12} fill="red" className="text-red-500" />
                    </div>
                  )}
                  {currentLocation === index && (
                    <div className="absolute inset-0 bg-green-500/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Department Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Experience our world-class facilities and discover opportunities in Geography and Environmental Management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Explore Academic Programs
            </button>
            <button className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition-colors font-medium">
              View Research Projects
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              Download Virtual Tour App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
