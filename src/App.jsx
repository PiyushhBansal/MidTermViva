import React from 'react';
import { WeatherProvider } from './context/WeatherContext';
import { ThemeProvider } from './context/ThemeContext'; // <-- Add this
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import FavoriteCities from './components/FavoriteCities';
import './App.css';

function App() {
  return (
    <ThemeProvider> 
      <WeatherProvider>
        <Header />
        <div className="flex">
          <div className="flex-1 p-6">
            <SearchBar />
            <CurrentWeather />
          </div>
          <div className="w-64 p-4 bg-gray-100 dark:bg-gray-800">
            <FavoriteCities />
          </div>
        </div>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;