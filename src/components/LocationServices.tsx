
import React from 'react';
import { Locate, MapPin, Navigation, Clock } from 'lucide-react';

interface LocationServicesProps {
  onFindLocation: () => void;
  userLocation: [number, number] | null;
}

const LocationServices: React.FC<LocationServicesProps> = ({ onFindLocation, userLocation }) => {
  const calculateDistance = () => {
    if (!userLocation) return null;
    
    const campusLat = 11.1515;
    const campusLng = 7.6406;
    
    const [userLat, userLng] = userLocation;
    
    const R = 6371;
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
    <div className="bg-white rounded-xl p-6 shadow-lg border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Location Services</h3>
        <Navigation size={24} className="text-green-600" />
      </div>

      <div className="space-y-4">
        <button
          onClick={onFindLocation}
          className="w-full bg-green-50 hover:bg-green-100 rounded-lg p-4 transition-colors flex items-center space-x-3 border border-green-200"
        >
          <Locate size={24} className="text-green-600" />
          <div className="text-left">
            <div className="font-semibold text-gray-900">Find My Location</div>
            <div className="text-sm text-gray-600">Get your current position</div>
          </div>
        </button>

        {userLocation && (
          <div className="bg-gray-50 rounded-lg p-4 border">
            <div className="flex items-center space-x-2 mb-3">
              <MapPin size={20} className="text-green-600" />
              <span className="font-semibold text-gray-900">Your Location</span>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              Lat: {userLocation[0].toFixed(6)}<br />
              Lng: {userLocation[1].toFixed(6)}
            </div>
            
            {calculateDistance() && (
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Navigation size={16} className="text-green-600" />
                  <span className="text-sm text-gray-600">Distance to Campus:</span>
                </div>
                <span className="font-semibold text-gray-900">{calculateDistance()} km</span>
              </div>
            )}

            <button
              onClick={getDirectionsToUser}
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg p-2 transition-colors text-sm font-medium"
            >
              Get Directions to Campus
            </button>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-4 border">
          <div className="flex items-center space-x-2 mb-2">
            <Clock size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-gray-900">Campus Hours</span>
          </div>
          <div className="text-xs text-gray-600">
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
