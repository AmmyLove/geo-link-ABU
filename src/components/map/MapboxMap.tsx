import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  Layers,
  Navigation,
  MapPin,
  User
} from 'lucide-react';
import { CampusLocation, CAMPUS_CENTER, CAMPUS_BOUNDS } from '@/data/campusLocations';
import { cn } from '@/lib/utils';

interface MapboxMapProps {
  selectedLocation: string | null;
  onLocationSelect: (locationId: string) => void;
  locations: CampusLocation[];
  userLocation?: [number, number] | null;
  className?: string;
  height?: string;
  accessToken?: string;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ 
  selectedLocation, 
  onLocationSelect, 
  locations,
  userLocation,
  className,
  height = 'h-[500px]',
  accessToken
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const userMarker = useRef<mapboxgl.Marker | null>(null);
  
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(15);
  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite' | 'hybrid'>('streets');
  const [showLabels, setShowLabels] = useState(true);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current) return;

    // Set access token if provided
    if (accessToken) {
      mapboxgl.accessToken = accessToken;
    } else if (!mapboxgl.accessToken) {
      console.error('Mapbox access token is required');
      return;
    }
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: getMapStyleUrl(),
      center: CAMPUS_CENTER,
      zoom: 15,
      pitch: 0,
      bearing: 0,
      antialias: true
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true
      }),
      'top-right'
    );

    // Add scale control
    map.current.addControl(new mapboxgl.ScaleControl(), 'bottom-left');

    // Update zoom state when map zoom changes
    map.current.on('zoom', () => {
      if (map.current) {
        setCurrentZoom(Math.round(map.current.getZoom()));
      }
    });

    // Add markers when map loads
    map.current.on('load', () => {
      addLocationMarkers();
      if (userLocation) {
        addUserLocationMarker();
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  // Update map style
  useEffect(() => {
    if (map.current) {
      map.current.setStyle(getMapStyleUrl());
      // Re-add markers after style change
      map.current.once('styledata', () => {
        addLocationMarkers();
        if (userLocation) {
          addUserLocationMarker();
        }
      });
    }
  }, [mapStyle]);

  // Update user location marker
  useEffect(() => {
    if (userLocation && map.current) {
      addUserLocationMarker();
    }
  }, [userLocation]);

  // Update markers when locations change
  useEffect(() => {
    if (map.current && map.current.isStyleLoaded()) {
      addLocationMarkers();
    }
  }, [locations, selectedLocation, showLabels]);

  const getMapStyleUrl = () => {
    const styles = {
      streets: 'mapbox://styles/mapbox/streets-v12',
      satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
      hybrid: 'mapbox://styles/mapbox/satellite-v9'
    };
    return styles[mapStyle];
  };

  const getMarkerColor = (location: CampusLocation, isSelected: boolean) => {
    const colors = {
      department: isSelected ? '#dc2626' : '#ef4444',
      facility: isSelected ? '#2563eb' : '#3b82f6',
      landmark: isSelected ? '#059669' : '#10b981',
      administrative: isSelected ? '#7c2d12' : '#a3571f',
      academic: isSelected ? '#7c3aed' : '#8b5cf6'
    };
    return colors[location.type] || '#6b7280';
  };

  const createMarkerElement = (location: CampusLocation, isSelected: boolean) => {
    const el = document.createElement('div');
    const color = getMarkerColor(location, isSelected);
    
    el.innerHTML = `
      <div class="relative cursor-pointer transition-all duration-300 ${isSelected ? 'scale-125 z-20' : 'z-10 hover:scale-110'}">
        <div class="w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center ${isSelected ? 'animate-bounce' : ''}"
             style="background-color: ${color};">
          <div class="w-4 h-4 text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
              <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm0 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
        </div>
        ${showLabels || isSelected ? `
          <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 pointer-events-none">
            <div class="bg-white px-2 py-1 rounded-lg shadow-xl text-xs font-medium whitespace-nowrap border border-gray-200 max-w-32 truncate">
              ${location.name}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      onLocationSelect(location.id);
    });

    return el;
  };

  const addLocationMarkers = () => {
    // Clear existing markers
    Object.values(markers.current).forEach(marker => marker.remove());
    markers.current = {};

    locations.forEach(location => {
      const isSelected = selectedLocation === location.id;
      const el = createMarkerElement(location, isSelected);
      
      const marker = new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        .addTo(map.current!);

      // Add popup with location info
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: true,
        closeOnClick: false,
        className: 'campus-location-popup'
      }).setHTML(`
        <div class="p-3 min-w-64">
          <h3 class="font-semibold text-gray-900 mb-2">${location.name}</h3>
          <p class="text-sm text-gray-600 mb-2">${location.description}</p>
          <div class="space-y-1">
            <div class="flex items-center space-x-2 text-xs text-gray-500">
              <span class="capitalize font-medium">${location.type}</span>
              <span>•</span>
              <span class="capitalize">${location.category}</span>
            </div>
            ${location.hours ? `
              <div class="text-xs text-gray-600">
                <strong>Hours:</strong> ${location.hours}
              </div>
            ` : ''}
            ${location.features.length > 0 ? `
              <div class="text-xs text-gray-600">
                <strong>Features:</strong> ${location.features.slice(0, 3).join(', ')}${location.features.length > 3 ? '...' : ''}
              </div>
            ` : ''}
          </div>
        </div>
      `);

      marker.setPopup(popup);
      
      if (isSelected) {
        popup.addTo(map.current!);
      }

      markers.current[location.id] = marker;
    });
  };

  const addUserLocationMarker = () => {
    if (userMarker.current) {
      userMarker.current.remove();
    }

    if (!userLocation || !map.current) return;

    const el = document.createElement('div');
    el.innerHTML = `
      <div class="relative">
        <div class="w-6 h-6 bg-blue-500 rounded-full border-3 border-white shadow-lg animate-pulse"></div>
        <div class="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30"></div>
      </div>
    `;

    userMarker.current = new mapboxgl.Marker(el)
      .setLngLat([userLocation[1], userLocation[0]]) // Mapbox uses [lng, lat]
      .addTo(map.current);

    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML('<div class="p-2 font-medium text-blue-600">Your Location</div>');
    
    userMarker.current.setPopup(popup);
  };

  const handleZoomIn = () => {
    if (map.current) {
      map.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map.current) {
      map.current.zoomOut();
    }
  };

  const handleResetView = () => {
    if (map.current) {
      map.current.flyTo({
        center: CAMPUS_CENTER,
        zoom: 15,
        pitch: 0,
        bearing: 0,
        duration: 1000
      });
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const toggleMapStyle = () => {
    const styles: ('streets' | 'satellite' | 'hybrid')[] = ['streets', 'satellite', 'hybrid'];
    const currentIndex = styles.indexOf(mapStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    setMapStyle(styles[nextIndex]);
  };

  const focusOnLocation = (locationId: string) => {
    const location = locations.find(l => l.id === locationId);
    if (location && map.current) {
      map.current.flyTo({
        center: location.coordinates,
        zoom: 17,
        duration: 1000
      });
    }
  };

  // Focus on selected location
  useEffect(() => {
    if (selectedLocation) {
      focusOnLocation(selectedLocation);
    }
  }, [selectedLocation]);

  return (
    <div className={cn(
      'relative bg-gray-50 rounded-xl overflow-hidden border shadow-lg',
      isFullscreen ? 'fixed inset-4 z-50' : height,
      className
    )}>
      {/* Map Container */}
      <div 
        ref={mapContainer} 
        className="absolute inset-0 w-full h-full"
      />

      {/* Custom Controls */}
      <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
        {/* Compass & Reset */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-2 border-b border-gray-200">
            <Navigation size={16} className="text-gray-600 mx-auto" />
          </div>
          <button
            onClick={handleResetView}
            className="p-2 hover:bg-gray-50 transition-colors w-full"
            title="Reset View"
          >
            <RotateCcw size={16} className="text-gray-600 mx-auto" />
          </button>
        </div>

        {/* Map Style Toggle */}
        <button
          onClick={toggleMapStyle}
          className="bg-white p-2 rounded-lg shadow-xl hover:bg-gray-50 transition-colors"
          title={`Switch to ${mapStyle === 'streets' ? 'Satellite' : mapStyle === 'satellite' ? 'Hybrid' : 'Streets'} view`}
        >
          <Layers size={16} className="text-gray-600" />
        </button>

        {/* Labels Toggle */}
        <button
          onClick={() => setShowLabels(!showLabels)}
          className={cn(
            "bg-white p-2 rounded-lg shadow-xl hover:bg-gray-50 transition-colors",
            showLabels ? "ring-2 ring-green-500" : ""
          )}
          title={showLabels ? 'Hide Labels' : 'Show Labels'}
        >
          <MapPin size={16} className={showLabels ? "text-green-600" : "text-gray-600"} />
        </button>
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col bg-white rounded-lg shadow-xl overflow-hidden z-10">
        <button
          onClick={handleZoomIn}
          className="p-3 hover:bg-gray-50 transition-colors border-b border-gray-200"
          title="Zoom In"
        >
          <ZoomIn size={18} className="text-gray-600" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-3 hover:bg-gray-50 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Fullscreen Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleFullscreen}
          className="bg-white p-2 rounded-lg shadow-xl hover:bg-gray-50 transition-colors"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <Minimize2 size={16} className="text-gray-600" />
          ) : (
            <Maximize2 size={16} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Map Info */}
      <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-xl z-10">
        <div className="text-xs font-medium text-gray-900 mb-1">
          Zoom: {currentZoom}x
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-12 h-0.5 bg-gray-900"></div>
          <span className="text-xs text-gray-600">100m</span>
        </div>
      </div>

      {/* Fullscreen close button */}
      {isFullscreen && (
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-6 right-16 bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow-xl transition-colors z-10"
        >
          <Minimize2 size={16} />
        </button>
      )}
    </div>
  );
};

export default MapboxMap;