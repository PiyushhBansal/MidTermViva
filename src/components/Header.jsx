import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className="header">
  <button className="theme-toggle" onClick={toggleTheme}>
    {theme === 'light' ? '🌙' : '☀️'}
  </button>
  <h1 className='mainHeading'>🌦️ Weather App</h1>
</header>

  );
}