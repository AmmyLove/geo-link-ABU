
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
    // Simulate weather API call with sample data for Zaria
    const fetchWeatherData = () => {
      setTimeout(() => {
        const sampleWeather: WeatherData = {
          temperature: Math.floor(Math.random() * 10) + 25, // 25-35°C
          description: ['Sunny', 'Partly Cloudy', 'Clear', 'Hot'][Math.floor(Math.random() * 4)],
          humidity: Math.floor(Math.random() * 30) + 40, // 40-70%
          windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
          visibility: Math.floor(Math.random() * 5) + 8, // 8-12 km
          icon: 'sunny'
        };
        setWeather(sampleWeather);
        setLoading(false);
      }, 1000);
    };

    fetchWeatherData();
    
    // Update weather every 5 minutes
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
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6 shadow-lg">
        <div className="animate-pulse">
          <div className="h-6 bg-blue-300 rounded mb-4"></div>
          <div className="h-12 bg-blue-300 rounded mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-blue-300 rounded"></div>
            <div className="h-16 bg-blue-300 rounded"></div>
            <div className="h-16 bg-blue-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  const WeatherIcon = getWeatherIcon(weather.description);

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Current Weather</h3>
        <span className="text-sm opacity-80">Zaria, Nigeria</span>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-4xl font-bold">{weather.temperature}°C</div>
          <div className="text-lg opacity-90">{weather.description}</div>
        </div>
        <WeatherIcon size={64} className="opacity-90" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/20 rounded-lg p-3 text-center">
          <Droplets size={20} className="mx-auto mb-1" />
          <div className="text-sm opacity-80">Humidity</div>
          <div className="font-semibold">{weather.humidity}%</div>
        </div>
        <div className="bg-white/20 rounded-lg p-3 text-center">
          <Wind size={20} className="mx-auto mb-1" />
          <div className="text-sm opacity-80">Wind</div>
          <div className="font-semibold">{weather.windSpeed} km/h</div>
        </div>
        <div className="bg-white/20 rounded-lg p-3 text-center">
          <Eye size={20} className="mx-auto mb-1" />
          <div className="text-sm opacity-80">Visibility</div>
          <div className="font-semibold">{weather.visibility} km</div>
        </div>
      </div>

      <div className="mt-4 text-xs opacity-70 text-center">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default WeatherWidget;
