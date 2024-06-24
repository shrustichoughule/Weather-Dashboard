import React from 'react';
import '../styles/WeatherIcon.css';

const WeatherIcon = ({ weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { condition } = weatherData;
  const iconClass = getIconClass(condition);

  return (
    <div className={`weather-icon ${iconClass}`}>
      <h2>{condition}</h2>
    </div>
  );
};

const getIconClass = (condition) => {
  switch (condition) {
    case 'Sunny':
      return 'sunny';
    case 'Cloudy':
      return 'cloudy';
    case 'Rain':
      return 'rain';
    case 'Storm':
      return 'storm';
    default:
      return 'default';
  }
};

export default WeatherIcon;
