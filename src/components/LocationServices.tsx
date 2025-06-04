
import React from 'react';
import { Locate, MapPin, Navigation, Clock, Car, PersonStanding } from 'lucide-react';

interface LocationServicesProps {
  onFindLocation: () => void;
  userLocation: [number, number] | null;
}

const LocationServices: React.FC<LocationServicesProps> = ({ onFindLocation, userLocation }) => {
  // Geography Department coordinates
  const geographyDeptLat = 11.1541;
  const geographyDeptLng = 7.6403;

  const calculateDistance = () => {
    if (!userLocation) return null;
    
    const [userLat, userLng] = userLocation;
    
    const R = 6371; // Earth's radius in kilometers
    const dLat = (geographyDeptLat - userLat) * Math.PI / 180;
    const dLng = (geographyDeptLng - userLng) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(userLat * Math.PI / 180) * Math.cos(geographyDeptLat * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    
    return distance;
  };

  const calculateETA = (speed: 'walking' | 'driving') => {
    const distance = calculateDistance();
    if (!distance) return null;

    // Average speeds: walking 5 km/h, driving 30 km/h (accounting for campus traffic)
    const speeds = {
      walking: 5,
      driving: 30
    };

    const timeInHours = distance / speeds[speed];
    const timeInMinutes = Math.round(timeInHours * 60);

    if (timeInMinutes < 1) return '< 1 min';
    if (timeInMinutes < 60) return `${timeInMinutes} min`;
    
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return `${hours}h ${minutes}m`;
  };

  const getDirectionsToGeographyDept = () => {
    if (!userLocation) return;
    
    const [lat, lng] = userLocation;
    const googleMapsUrl = `https://www.google.com/maps/dir/${lat},${lng}/${geographyDeptLat},${geographyDeptLng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const distance = calculateDistance();

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
            
            {distance && (
              <>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Navigation size={16} className="text-green-600" />
                    <span className="text-sm text-gray-600">Distance to Geography Dept:</span>
                  </div>
                  <span className="font-semibold text-gray-900">{distance.toFixed(1)} km</span>
                </div>

                {/* ETA Information */}
                <div className="bg-white rounded-lg p-3 mb-3 border border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Estimated Time of Arrival</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <PersonStanding size={16} className="text-blue-600" />
                      <div>
                        <div className="text-xs text-gray-600">Walking</div>
                        <div className="font-semibold text-gray-900">{calculateETA('walking')}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car size={16} className="text-purple-600" />
                      <div>
                        <div className="text-xs text-gray-600">Driving</div>
                        <div className="font-semibold text-gray-900">{calculateETA('driving')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <button
              onClick={getDirectionsToGeographyDept}
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg p-2 transition-colors text-sm font-medium"
            >
              Get Directions to Geography Department
            </button>
          </div>
        )}

        <div className="bg-gray-50 rounded-lg p-4 border">
          <div className="flex items-center space-x-2 mb-2">
            <Clock size={16} className="text-green-600" />
            <span className="text-sm font-semibold text-gray-900">Department Hours</span>
          </div>
          <div className="text-xs text-gray-600">
            Mon-Fri: 8:00 AM - 5:00 PM<br />
            Sat: 9:00 AM - 3:00 PM<br />
            Sun: Closed
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationServices;
