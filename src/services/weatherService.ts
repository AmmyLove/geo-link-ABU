
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

class WeatherService {
  private static instance: WeatherService;
  private cache: WeatherData | null = null;
  private lastFetch: number = 0;
  private readonly CACHE_DURATION = 2 * 60 * 1000; // 2 minutes for more frequent updates

  static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  private generateRealisticWeather(): WeatherData {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 18;
    
    // Zaria weather patterns (tropical savanna climate)
    const baseTemp = isDay ? 32 : 24; // Higher during day
    const tempVariation = Math.random() * 8 - 4; // ±4°C variation
    const temperature = Math.round(baseTemp + tempVariation);

    const weatherConditions = [
      { desc: 'Sunny', chance: isDay ? 0.4 : 0.1, icon: 'sunny' },
      { desc: 'Partly Cloudy', chance: 0.3, icon: 'partly-cloudy' },
      { desc: 'Cloudy', chance: 0.2, icon: 'cloudy' },
      { desc: 'Light Rain', chance: 0.1, icon: 'rainy' }
    ];

    const random = Math.random();
    let cumulative = 0;
    let selectedCondition = weatherConditions[0];

    for (const condition of weatherConditions) {
      cumulative += condition.chance;
      if (random <= cumulative) {
        selectedCondition = condition;
        break;
      }
    }

    return {
      temperature,
      description: selectedCondition.desc,
      humidity: Math.floor(Math.random() * 30) + 60, // 60-90% (tropical)
      windSpeed: Math.floor(Math.random() * 10) + 5, // 5-15 km/h
      visibility: Math.floor(Math.random() * 5) + 8, // 8-13 km
      icon: selectedCondition.icon,
      feelsLike: temperature + Math.floor(Math.random() * 6) - 3,
      pressure: 1010 + Math.floor(Math.random() * 20) - 10, // 1000-1020 hPa
      uvIndex: isDay ? Math.floor(Math.random() * 7) + 3 : 0 // 3-10 during day
    };
  }

  async getCurrentWeather(forceRefresh: boolean = false): Promise<WeatherData> {
    const now = Date.now();
    
    if (!forceRefresh && this.cache && (now - this.lastFetch) < this.CACHE_DURATION) {
      return this.cache;
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

    this.cache = this.generateRealisticWeather();
    this.lastFetch = now;
    
    console.log('Weather data refreshed:', this.cache);
    return this.cache;
  }

  // Force refresh method for manual refresh
  async refreshWeather(): Promise<WeatherData> {
    return this.getCurrentWeather(true);
  }

  async getHourlyForecast(): Promise<WeatherData[]> {
    const forecast = [];
    const baseWeather = await this.getCurrentWeather();
    
    for (let i = 1; i <= 6; i++) {
      const tempVariation = Math.random() * 4 - 2;
      forecast.push({
        ...baseWeather,
        temperature: Math.round(baseWeather.temperature + tempVariation),
        hour: new Date(Date.now() + i * 60 * 60 * 1000).getHours()
      });
    }
    
    return forecast;
  }
}

export default WeatherService;
