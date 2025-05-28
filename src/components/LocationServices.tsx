
import React from 'react';
import { Locate, MapPin, Navigation, Clock } from 'lucide-react';

interface LocationServicesProps {
  onFindLocation: () => void;
  userLocation: [number, number] | null;
}

const LocationServices: React.FC<LocationServicesProps> = ({ onFindLocation, userLocation }) => {
  const calculateDistance = () => {
    if (!userLocation) return null;
    
    // ABU Zaria coordinates (approximate)
    const campusLat = 11.1515;
    const campusLng = 7.6406;
    
    const [userLat, userLng] = userLocation;
    
    // Simple distance calculation using Haversine formula
    const R = 6371; // Earth's radius in kilometers
    const dLat = (campusLat - userLat) * Math.PI / 180;
    const dLng = (campusLng - userLng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(userLat * Math.PI / 180) * Math.cos(campusLat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    
    return distance.toFixed(1);
  };

  const getDirectionsToUser = () => {
    if (!userLocation) return;
    
    const [lat, lng] = userLocation;
    const googleMapsUrl = `https://www.google.com/maps/dir/${lat},${lng}/Ahmadu+Bello+University+Zaria`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Location Services</h3>
        <Navigation size={24} className="opacity-80" />
      </div>

      <div className="space-y-4">
        <button
          onClick={onFindLocation}
          className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors flex items-center space-x-3"
        >
          <Locate size={24} />
          <div className="text-left">
            <div className="font-semibold">Find My Location</div>
            <div className="text-sm opacity-80">Get your current position</div>
          </div>
        </button>

        {userLocation && (
          <div className="bg-white/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <MapPin size={20} />
              <span className="font-semibold">Your Location</span>
            </div>
            <div className="text-sm opacity-90 mb-3">
              Lat: {userLocation[0].toFixed(6)}<br />
              Lng: {userLocation[1].toFixed(6)}
            </div>
            
            {calculateDistance() && (
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Navigation size={16} />
                  <span className="text-sm">Distance to Campus:</span>
                </div>
                <span className="font-semibold">{calculateDistance()} km</span>
              </div>
            )}

            <button
              onClick={getDirectionsToUser}
              className="w-full bg-white/30 hover:bg-white/40 rounded-lg p-2 transition-colors text-sm font-medium"
            >
              Get Directions to Campus
            </button>
          </div>
        )}

        <div className="bg-white/20 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Clock size={16} />
            <span className="text-sm font-semibold">Campus Hours</span>
          </div>
          <div className="text-xs opacity-80">
            Mon-Fri: 7:00 AM - 6:00 PM<br />
            Sat: 8:00 AM - 4:00 PM<br />
            Sun: Closed
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationServices;
