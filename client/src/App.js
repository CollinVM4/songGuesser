// src/App.js
import React from 'react';
import './App.css'; // Optional: your CSS for the app
import Lobby from './components/Lobby'; // Adjust the path if necessary

const App = () => {
  return (
    <div className="App">
      <Lobby /> {/* Render the Lobby component here */}
    </div>
  );
};

export default App;
