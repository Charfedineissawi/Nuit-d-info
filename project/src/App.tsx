import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Learn from './components/Learn';
import Game from './components/Game';
import Community from './components/Community';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen bg-sky-900">
      <Navbar />
      <Hero />
      <Learn />
      <Game />
      <Community />
      <AudioPlayer />
    </div>
  );
}

export default App;