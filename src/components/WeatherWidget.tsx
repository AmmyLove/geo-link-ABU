
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Wind, Eye, Droplets, Gauge, Zap, RefreshCw, AlertCircle } from 'lucide-react';
import WeatherService from '../services/weatherService';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  icon: string;
  feelsLike: number;
  pressure: number;
  uvIndex: number;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const weatherService = WeatherService.getInstance();

  const fetchWeather = async (forceRefresh: boolean = false) => {
    try {
      setLoading(!weather); // Only show loading on initial load
      setIsRefreshing(forceRefresh);
      setError(null);
      
      const weatherData = forceRefresh 
        ? await weatherService.refreshWeather()
        : await weatherService.getCurrentWeather();
        
      setWeather(weatherData);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => {
    fetchWeather(true);
  };

  useEffect(() => {
    fetchWeather();
    
    // Refresh every 5 minutes
    const interval = setInterval(() => fetchWeather(), 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (description: string) => {
    if (description.includes('Rain')) return CloudRain;
    if (description.includes('Cloud')) return Cloud;
    if (description.includes('Sun') || description.includes('Clear')) return Sun;
    return Cloud;
  };

  const getUVLevel = (uvIndex: number) => {
    if (uvIndex <= 2) return { level: 'Low', color: 'text-green-600' };
    if (uvIndex <= 5) return { level: 'Moderate', color: 'text-yellow-600' };
    if (uvIndex <= 7) return { level: 'High', color: 'text-orange-600' };
    return { level: 'Very High', color: 'text-red-600' };
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border">
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="h-6 bg-gray-200 rounded w-32"></div>
            <RefreshCw className="animate-spin text-green-600" size={20} />
          </div>
          <div className="h-16 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">Weather</h3>
          <button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw size={20} className={`text-green-600 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
        <div className="flex items-center space-x-3 text-red-600">
          <AlertCircle size={24} />
          <div>
            <div className="font-medium">Weather Unavailable</div>
            <div className="text-sm text-gray-600">Tap refresh to try again</div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.description);
  const uvLevel = getUVLevel(weather.uvIndex);

  return (
    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">Current Weather</h3>
        <button 
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          title="Refresh weather data"
        >
          <RefreshCw size={20} className={`text-green-600 ${isRefreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>
      
      <div className="text-xs text-gray-500 mb-4">Zaria, Nigeria</div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-gray-900">{weather.temperature}°C</div>
          <div className="text-sm text-gray-600">Feels like {weather.feelsLike}°C</div>
          <div className="text-lg text-gray-600 mt-1">{weather.description}</div>
        </div>
        <div className="text-green-500">
          <WeatherIcon size={64} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center">
          <Droplets size={18} className="mx-auto mb-1 text-blue-600" />
          <div className="text-xs text-gray-600">Humidity</div>
          <div className="font-semibold text-gray-900">{weather.humidity}%</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 text-center">
          <Wind size={18} className="mx-auto mb-1 text-green-600" />
          <div className="text-xs text-gray-600">Wind</div>
          <div className="font-semibold text-gray-900">{weather.windSpeed} km/h</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center">
          <Eye size={18} className="mx-auto mb-1 text-purple-600" />
          <div className="text-xs text-gray-600">Visibility</div>
          <div className="font-semibold text-gray-900">{weather.visibility} km</div>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 text-center">
          <Gauge size={18} className="mx-auto mb-1 text-orange-600" />
          <div className="text-xs text-gray-600">Pressure</div>
          <div className="font-semibold text-gray-900">{weather.pressure} hPa</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-3 text-center">
          <Zap size={18} className="mx-auto mb-1 text-yellow-600" />
          <div className="text-xs text-gray-600">UV Index</div>
          <div className={`font-semibold ${uvLevel.color}`}>{weather.uvIndex}</div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-3 text-center">
          <Thermometer size={18} className="mx-auto mb-1 text-red-600" />
          <div className="text-xs text-gray-600">Feels Like</div>
          <div className="font-semibold text-gray-900">{weather.feelsLike}°C</div>
        </div>
      </div>

      {lastUpdated && (
        <div className="text-xs text-gray-500 text-center">
          Last updated: {lastUpdated.toLocaleTimeString()}
          {isRefreshing && <span className="ml-2 text-green-600">Updating...</span>}
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
