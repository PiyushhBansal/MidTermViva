import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const API_KEY = '09a1263a13bd02baed3888d03ff9cac2';

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error('City not found');
      }
      const data = await res.json();
      setCurrentWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error.message);
      alert('City not found.');
    }
  };

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        favorites,
        fetchWeather,
        addFavorite,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
