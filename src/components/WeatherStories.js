import React, { useState } from 'react';
import '../styles/WeatherStories.css';

const WeatherStories = () => {
  const [stories, setStories] = useState([
    { id: 1, content: "I remember the time when a thunderstorm hit during our family picnic!" },
    { id: 2, content: "A beautiful sunny day made our wedding ceremony perfect." },
  ]);
  const [newStory, setNewStory] = useState('');

  const addStory = () => {
    if (newStory) {
      setStories([...stories, { id: stories.length + 1, content: newStory }]);
      setNewStory('');
    }
  };

  return (
    <div className="weather-stories">
      <h2>Weather Stories</h2>
      <div className="stories-list">
        {stories.map((story) => (
          <div key={story.id} className="story">
            {story.content}
          </div>
        ))}
      </div>
      <div className="add-story">
        <textarea
          value={newStory}
          onChange={(e) => setNewStory(e.target.value)}
          placeholder="Share your weather story..."
        ></textarea>
        <button onClick={addStory}>Add Story</button>
      </div>
    </div>
  );
};

export default WeatherStories;
