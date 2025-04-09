const WeatherCard = ({ city, onClick }) => {
    return (
      <div className="weather-card" onClick={() => onClick(city)}>
        <h3>{city}</h3>
      </div>
    );
  };
  
export default WeatherCard;
  