import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function CurrentWeather() {
  const { currentWeather, addFavorite } = useContext(WeatherContext);

  if (!currentWeather) return <p>No city selected</p>;

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{currentWeather.name}</h2>
      <p>🌡️ {currentWeather.main.temp} °C</p>
      <p>💧 {currentWeather.main.humidity}% Humidity</p>
      <p>☁️ {currentWeather.weather[0].description}</p>

      <button
        onClick={() => addFavorite(currentWeather.name)}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Add to Favorites
      </button>
    </div>
  );
}
