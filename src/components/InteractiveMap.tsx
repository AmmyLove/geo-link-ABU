
import React, { useState } from 'react';
import { MapPin, ZoomIn, ZoomOut, Navigation, Layers, User, Plus, Minus } from 'lucide-react';

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
  userLocation?: [number, number] | null;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  selectedLocation, 
  onLocationSelect, 
  locations,
  userLocation
}) => {
  const [zoom, setZoom] = useState(1);
  const [showLabels, setShowLabels] = useState(true);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));

  const getLocationColor = (type: string) => {
    switch (type) {
      case 'department': return 'text-red-500';
      case 'facility': return 'text-blue-500';
      case 'landmark': return 'text-green-500';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="relative bg-gray-100 rounded-xl h-[500px] overflow-hidden border shadow-lg">
      {/* Google Maps style background */}
      <div 
        className="absolute inset-0 transition-transform duration-300"
        style={{ transform: `scale(${zoom})` }}
      >
        {/* Map base with Google Maps-like styling */}
        <div className="relative w-full h-full bg-gray-50">
          {/* Roads - Google Maps style */}
          <div className="absolute top-1/2 left-0 right-0 h-3 bg-white border-t border-b border-gray-300 transform -translate-y-1/2 shadow-sm"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-3 bg-white border-l border-r border-gray-300 transform -translate-x-1/2 shadow-sm"></div>
          
          {/* Buildings with Google Maps style */}
          <div className="absolute top-1/4 left-1/4 w-20 h-16 bg-gray-200 border border-gray-300 rounded shadow-md"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-20 bg-gray-200 border border-gray-300 rounded shadow-md"></div>
          <div className="absolute bottom-1/4 left-1/3 w-18 h-14 bg-gray-200 border border-gray-300 rounded shadow-md"></div>
          <div className="absolute bottom-1/3 right-1/3 w-14 h-18 bg-gray-200 border border-gray-300 rounded shadow-md"></div>
          
          {/* Green spaces */}
          <div className="absolute top-1/6 right-1/6 w-24 h-20 bg-green-100 rounded-full border border-green-200"></div>
          <div className="absolute bottom-1/6 left-1/6 w-20 h-16 bg-green-100 rounded-full border border-green-200"></div>
          
          {/* Location Markers with Google Maps style */}
          {locations.map((location, index) => (
            <div
              key={location.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-full transition-all duration-200 hover:scale-110 ${
                selectedLocation === location.id ? 'scale-125 z-10' : 'z-5'
              }`}
              style={{
                left: `${25 + index * 20}%`,
                top: `${30 + index * 15}%`
              }}
              onClick={() => onLocationSelect(location.id)}
            >
              <div className="relative">
                <div className={`w-8 h-8 ${getLocationColor(location.type)} bg-white rounded-full border-2 border-current shadow-lg flex items-center justify-center ${
                  selectedLocation === location.id ? 'animate-bounce' : ''
                }`}>
                  <MapPin size={16} fill="currentColor" />
                </div>
                {showLabels && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                    <div className="bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap border">
                      {location.name}
                    </div>
                  </div>
                )}
              </div>
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
                <div className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse">
                  <User size={16} fill="white" className="text-white" />
                </div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap">
                    Your Location
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Google Maps style controls */}
      <div className="absolute bottom-6 right-6 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={handleZoomIn}
          className="p-3 hover:bg-gray-50 transition-colors border-b border-gray-200"
        >
          <Plus size={20} className="text-gray-600" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-3 hover:bg-gray-50 transition-colors"
        >
          <Minus size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Labels toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setShowLabels(!showLabels)}
          className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        >
          <Layers size={20} className={showLabels ? 'text-green-600' : 'text-gray-600'} />
        </button>
      </div>

      {/* Compass */}
      <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
        <Navigation size={20} className="text-gray-600" />
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-600">N</div>
      </div>

      {/* Scale info */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium">
          Zoom: {(zoom * 100).toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
