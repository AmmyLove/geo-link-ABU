
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Wind, Eye, Droplets } from 'lucide-react';

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  icon: string;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = () => {
      setTimeout(() => {
        const sampleWeather: WeatherData = {
          temperature: Math.floor(Math.random() * 10) + 25,
          description: ['Sunny', 'Partly Cloudy', 'Clear', 'Hot'][Math.floor(Math.random() * 4)],
          humidity: Math.floor(Math.random() * 30) + 40,
          windSpeed: Math.floor(Math.random() * 15) + 5,
          visibility: Math.floor(Math.random() * 5) + 8,
          icon: 'sunny'
        };
        setWeather(sampleWeather);
        setLoading(false);
      }, 1000);
    };

    fetchWeatherData();
    
    const interval = setInterval(fetchWeatherData, 300000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (description: string) => {
    if (description.includes('Cloud')) return CloudRain;
    if (description.includes('Rain')) return CloudRain;
    if (description.includes('Sun') || description.includes('Clear') || description.includes('Hot')) return Sun;
    return Cloud;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.description);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Current Weather</h3>
        <span className="text-sm text-gray-600">Zaria, Nigeria</span>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-4xl font-bold text-gray-900">{weather.temperature}°C</div>
          <div className="text-lg text-gray-600">{weather.description}</div>
        </div>
        <div className="text-green-500">
          <WeatherIcon size={64} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <Droplets size={20} className="mx-auto mb-1 text-green-600" />
          <div className="text-sm text-gray-600">Humidity</div>
          <div className="font-semibold text-gray-900">{weather.humidity}%</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <Wind size={20} className="mx-auto mb-1 text-green-600" />
          <div className="text-sm text-gray-600">Wind</div>
          <div className="font-semibold text-gray-900">{weather.windSpeed} km/h</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <Eye size={20} className="mx-auto mb-1 text-green-600" />
          <div className="text-sm text-gray-600">Visibility</div>
          <div className="font-semibold text-gray-900">{weather.visibility} km</div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default WeatherWidget;
