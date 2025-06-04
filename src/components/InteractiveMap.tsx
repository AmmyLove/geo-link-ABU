
import React, { useState, useEffect } from 'react';
import { MapPin, ZoomIn, ZoomOut, Navigation, Layers, User, Plus, Minus, Maximize2, RotateCcw } from 'lucide-react';

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
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapStyle, setMapStyle] = useState<'standard' | 'satellite' | 'hybrid'>('standard');

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.3, 4));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.3, 0.5));

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const getLocationColor = (type: string, isSelected: boolean) => {
    const colors = {
      department: isSelected ? 'text-red-600 bg-red-100' : 'text-red-500 bg-white',
      facility: isSelected ? 'text-blue-600 bg-blue-100' : 'text-blue-500 bg-white',
      landmark: isSelected ? 'text-green-600 bg-green-100' : 'text-green-500 bg-white'
    };
    return colors[type as keyof typeof colors] || 'text-gray-600 bg-white';
  };

  const getMapBackground = () => {
    switch (mapStyle) {
      case 'satellite':
        return 'bg-gradient-to-br from-green-200 via-green-300 to-green-400';
      case 'hybrid':
        return 'bg-gradient-to-br from-gray-200 via-green-200 to-green-300';
      default:
        return 'bg-gray-50';
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <div className={`relative ${getMapBackground()} rounded-xl overflow-hidden border shadow-lg ${
      isFullscreen ? 'fixed inset-4 z-50 h-auto' : 'h-[400px] md:h-[500px]'
    }`}>
      {/* Map Container */}
      <div 
        className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="relative w-full h-full transition-transform duration-200"
          style={{ 
            transform: `scale(${zoom}) translate(${panOffset.x}px, ${panOffset.y}px)`,
            transformOrigin: 'center'
          }}
        >
          {/* Enhanced Map Background */}
          <div className="relative w-full h-full">
            {/* Roads with more detail */}
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-white border-2 border-gray-300 transform -translate-y-1/2 shadow-md"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-white border-2 border-gray-300 transform -translate-x-1/2 shadow-md"></div>
            
            {/* Road markings */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-400 transform -translate-y-1/2 z-10"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-yellow-400 transform -translate-x-1/2 z-10"></div>
            
            {/* Enhanced Buildings */}
            {[
              { top: '20%', left: '25%', width: '24', height: '20', color: 'bg-gray-300' },
              { top: '30%', right: '25%', width: '20', height: '24', color: 'bg-gray-200' },
              { top: '60%', left: '30%', width: '22', height: '18', color: 'bg-gray-300' },
              { top: '55%', right: '30%', width: '18', height: '22', color: 'bg-gray-200' },
              { top: '15%', left: '60%', width: '16', height: '14', color: 'bg-blue-200' },
              { top: '70%', left: '65%', width: '20', height: '16', color: 'bg-red-200' }
            ].map((building, idx) => (
              <div
                key={idx}
                className={`absolute ${building.color} border-2 border-gray-400 rounded shadow-lg`}
                style={{
                  ...Object.fromEntries(Object.entries(building).filter(([k]) => ['top', 'left', 'right'].includes(k))),
                  width: `${building.width}px`,
                  height: `${building.height}px`
                }}
              >
                <div className="w-full h-2 bg-gray-500 opacity-50"></div>
              </div>
            ))}
            
            {/* Green spaces with more detail */}
            <div className="absolute top-1/6 right-1/6 w-32 h-24 bg-green-200 rounded-full border-2 border-green-300 shadow-inner">
              <div className="absolute inset-2 bg-green-300 rounded-full opacity-60"></div>
            </div>
            <div className="absolute bottom-1/6 left-1/6 w-24 h-20 bg-green-200 rounded-full border-2 border-green-300 shadow-inner">
              <div className="absolute inset-2 bg-green-300 rounded-full opacity-60"></div>
            </div>
            
            {/* Water feature */}
            <div className="absolute top-2/3 right-1/3 w-16 h-12 bg-blue-200 rounded-lg border-2 border-blue-300 shadow-inner">
              <div className="absolute inset-1 bg-blue-300 rounded opacity-60"></div>
            </div>

            {/* Location Markers */}
            {locations.map((location, index) => {
              const isSelected = selectedLocation === location.id;
              return (
                <div
                  key={location.id}
                  className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-full transition-all duration-300 hover:scale-125 ${
                    isSelected ? 'scale-125 z-20' : 'z-10'
                  }`}
                  style={{
                    left: `${25 + index * 18}%`,
                    top: `${25 + index * 12}%`
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onLocationSelect(location.id);
                  }}
                >
                  <div className="relative">
                    <div className={`w-10 h-10 ${getLocationColor(location.type, isSelected)} rounded-full border-3 border-current shadow-xl flex items-center justify-center ${
                      isSelected ? 'animate-bounce' : ''
                    }`}>
                      <MapPin size={20} fill="currentColor" />
                    </div>
                    {(showLabels || isSelected) && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                        <div className="bg-white px-3 py-2 rounded-lg shadow-xl text-xs font-medium whitespace-nowrap border-2 border-gray-200">
                          {location.name}
                          <div className="text-xs text-gray-500 capitalize">{location.type}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* User Location Marker */}
            {userLocation && (
              <div
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-30"
                style={{
                  left: '60%',
                  top: '70%'
                }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center animate-pulse">
                    <User size={20} fill="white" className="text-white" />
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-xl text-xs font-medium whitespace-nowrap">
                      Your Location
                    </div>
                  </div>
                  {/* Accuracy circle */}
                  <div className="absolute inset-0 border-2 border-blue-300 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col bg-white rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={handleZoomIn}
          disabled={zoom >= 4}
          className="p-3 hover:bg-gray-50 transition-colors border-b border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus size={20} className="text-gray-600" />
        </button>
        <button
          onClick={handleZoomOut}
          disabled={zoom <= 0.5}
          className="p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Top Controls */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={() => setShowLabels(!showLabels)}
          className={`bg-white p-3 rounded-lg shadow-xl hover:bg-gray-50 transition-colors ${
            showLabels ? 'ring-2 ring-green-500' : ''
          }`}
        >
          <Layers size={20} className={showLabels ? 'text-green-600' : 'text-gray-600'} />
        </button>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="bg-white p-3 rounded-lg shadow-xl hover:bg-gray-50 transition-colors"
        >
          <Maximize2 size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Reset View */}
      <div className="absolute top-4 left-4 flex space-x-2">
        <div className="bg-white p-3 rounded-lg shadow-xl">
          <Navigation size={20} className="text-gray-600" />
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-600">N</div>
        </div>
        <button
          onClick={resetView}
          className="bg-white p-3 rounded-lg shadow-xl hover:bg-gray-50 transition-colors"
        >
          <RotateCcw size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Enhanced Scale and Info */}
      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-xl">
        <div className="text-xs font-medium text-gray-900 mb-1">
          Zoom: {(zoom * 100).toFixed(0)}%
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-16 h-1 bg-gray-900"></div>
          <span className="text-xs text-gray-600">100m</span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
