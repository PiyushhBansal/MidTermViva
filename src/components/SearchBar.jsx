import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function SearchBar() {
  const { fetchWeather } = useContext(WeatherContext);
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeather(city);
    }
    setCity('');
  };

  return (
    <div className="flex-gap" >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 flex-1 rounded-r"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 rounded-r"
      >
        Search
      </button>
    </div>
  );
}
