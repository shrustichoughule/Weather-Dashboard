import React, { useState, useEffect } from 'react';
import WeatherIcon from './components/WeatherIcon';
import WeatherStories from './components/WeatherStories';
import UserGroupSection from './components/UserGroupSection';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [userGroup, setUserGroup] = useState('general');

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    const data = await fakeApiCall();
    setWeatherData(data);
  };

  const handleUserGroupChange = (event) => {
    setUserGroup(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <select value={userGroup} onChange={handleUserGroupChange}>
          <option value="general">General</option>
          <option value="eventPlanners">Event Planners</option>
          <option value="farmers">Farmers</option>
          <option value="travelers">Travelers</option>
        </select>
      </header>
      <main>
        <WeatherIcon weatherData={weatherData} />
        <WeatherStories />
        <UserGroupSection userGroup={userGroup} weatherData={weatherData} />
      </main>
    </div>
  );
}

const fakeApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: 25,
        condition: 'Sunny',
        forecast: [
          { day: 'Monday', temp: 24, condition: 'Cloudy' },
          { day: 'Tuesday', temp: 22, condition: 'Rain' },
        ],
      });
    }, 1000);
  });
};

export default App;
