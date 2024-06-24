import React from 'react';
import '../styles/UserGroupSection.css';

const UserGroupSection = ({ userGroup, weatherData }) => {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const renderContentForUserGroup = () => {
    switch (userGroup) {
      case 'eventPlanners':
        return (
          <div>
            <h3>Event Planners</h3>
            <p>Weather Forecast: {weatherData.condition}</p>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Check long-term forecast and severe weather alerts to plan your events.</p>
          </div>
        );
      case 'farmers':
        return (
          <div>
            <h3>Farmers</h3>
            <p>Weather Forecast: {weatherData.condition}</p>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Access soil moisture and precipitation data for crop management.</p>
          </div>
        );
      case 'travelers':
        return (
          <div>
            <h3>Travelers</h3>
            <p>Weather Forecast: {weatherData.condition}</p>
            <p>Temperature: {weatherData.temperature}°C</p>
            <p>Get real-time weather updates along your travel route.</p>
          </div>
        );
      default:
        return (
          <div>
            <h3>General Information</h3>
            <p>Weather Forecast: {weatherData.condition}</p>
            <p>Temperature: {weatherData.temperature}°C</p>
          </div>
        );
    }
  };

  return <div className="user-group-section">{renderContentForUserGroup()}</div>;
};

export default UserGroupSection;
