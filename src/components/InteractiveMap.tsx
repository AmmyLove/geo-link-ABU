
import React, { useState } from 'react';
import { MapPin, ZoomIn, ZoomOut, Navigation, Layers, User } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  coordinates: [number, number];
  description: string;
  type: 'department' | 'facility' | 'landmark';
}

interface InteractiveMapProps {
  selectedLocation: string;
  onLocationSelect: (locationId: string) => void;
  locations: Location[];
  mapLayer?: string;
  userLocation?: [number, number] | null;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  selectedLocation, 
  onLocationSelect, 
  locations,
  mapLayer = 'standard',
  userLocation
}) => {
  const [zoom, setZoom] = useState(1);
  const [showLabels, setShowLabels] = useState(true);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));

  const getLocationColor = (type: string) => {
    switch (type) {
      case 'department': return 'text-red-600';
      case 'facility': return 'text-blue-600';
      case 'landmark': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getMapBackground = () => {
    switch (mapLayer) {
      case 'satellite':
        return 'bg-gradient-to-br from-green-800 to-yellow-700';
      case 'terrain':
        return 'bg-gradient-to-br from-yellow-100 to-green-200';
      default:
        return 'bg-gradient-to-br from-green-50 to-emerald-100';
    }
  };

  const getMapFeatures = () => {
    switch (mapLayer) {
      case 'satellite':
        return (
          <>
            {/* Satellite view features */}
            <div className="absolute top-1/3 left-1/4 w-20 h-16 bg-green-800 rounded shadow-lg opacity-80"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-20 bg-green-700 rounded shadow-lg opacity-80"></div>
            <div className="absolute bottom-1/4 left-1/3 w-18 h-14 bg-green-900 rounded shadow-lg opacity-80"></div>
            <div className="absolute bottom-1/3 right-1/3 w-14 h-18 bg-green-800 rounded shadow-lg opacity-80"></div>
          </>
        );
      case 'terrain':
        return (
          <>
            {/* Terrain view features */}
            <div className="absolute top-1/4 left-1/5 w-24 h-6 bg-yellow-400 rounded-full shadow-lg opacity-60"></div>
            <div className="absolute top-2/3 right-1/5 w-20 h-8 bg-yellow-500 rounded-full shadow-lg opacity-60"></div>
            <div className="absolute bottom-1/4 left-2/5 w-16 h-4 bg-yellow-300 rounded-full shadow-lg opacity-60"></div>
          </>
        );
      default:
        return (
          <>
            {/* Standard view buildings */}
            <div className="absolute top-1/4 left-1/4 w-16 h-12 bg-green-600 rounded shadow-lg"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-16 bg-blue-600 rounded shadow-lg"></div>
            <div className="absolute bottom-1/4 left-1/3 w-14 h-10 bg-red-600 rounded shadow-lg"></div>
            <div className="absolute bottom-1/3 right-1/3 w-10 h-14 bg-yellow-600 rounded shadow-lg"></div>
          </>
        );
    }
  };

  return (
    <div className={`relative ${getMapBackground()} rounded-xl h-96 overflow-hidden border-2 border-green-200`}>
      {/* Map Background */}
      <div 
        className="absolute inset-0 transition-transform duration-300"
        style={{ transform: `scale(${zoom})` }}
      >
        {/* Campus Layout */}
        <div className="relative w-full h-full">
          {/* Roads - only show in standard and terrain view */}
          {mapLayer !== 'satellite' && (
            <>
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-300 transform -translate-y-1/2"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-300 transform -translate-x-1/2"></div>
            </>
          )}
          
          {/* Map-specific features */}
          {getMapFeatures()}
          
          {/* Location Markers */}
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                selectedLocation === location.id ? 'scale-125 z-10' : 'z-5'
              }`}
              style={{
                left: `${25 + index * 20}%`,
                top: `${30 + index * 15}%`
              }}
              onClick={() => onLocationSelect(location.id)}
            >
              <MapPin 
                className={`${getLocationColor(location.type)} ${
                  selectedLocation === location.id ? 'animate-bounce' : ''
                }`} 
                size={selectedLocation === location.id ? 32 : 24}
                fill="currentColor"
              />
              {showLabels && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1">
                  <div className="bg-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
                    {location.name}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* User Location Marker */}
          {userLocation && (
            <div
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20"
              style={{
                left: '60%',
                top: '70%'
              }}
            >
              <div className="relative">
                <User 
                  className="text-purple-600 animate-pulse" 
                  size={28}
                  fill="currentColor"
                />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-2 py-1 rounded shadow-lg text-xs font-medium whitespace-nowrap">
                    Your Location
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ZoomIn size={20} className="text-gray-600" />
        </button>
        <button
          onClick={handleZoomOut}
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        >
          <ZoomOut size={20} className="text-gray-600" />
        </button>
        <button
          onClick={() => setShowLabels(!showLabels)}
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        >
          <Layers size={20} className={showLabels ? 'text-green-600' : 'text-gray-600'} />
        </button>
      </div>

      {/* Compass */}
      <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
        <Navigation size={20} className="text-gray-600" />
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-600">N</div>
      </div>

      {/* Scale and Layer Info */}
      <div className="absolute bottom-4 left-4 space-y-2">
        <div className="bg-white px-3 py-1 rounded shadow-lg text-xs">
          Scale: {(zoom * 100).toFixed(0)}%
        </div>
        <div className="bg-white px-3 py-1 rounded shadow-lg text-xs">
          Layer: {mapLayer.charAt(0).toUpperCase() + mapLayer.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
