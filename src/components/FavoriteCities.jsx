import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function FavoriteCities() {
  const { favorites, fetchWeather } = useContext(WeatherContext);

  if (favorites.length === 0) {
    return <p>No favorite cities yet.</p>;
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Favorite Cities</h3>
      <ul>
        {favorites.map((city, index) => (
          <li
            key={index}
            className="cursor-pointer mb-2"
            onClick={() => fetchWeather(city)}
          >
            📍 {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
