import React from 'react';
import { Gamepad2, Trophy, Users2 } from 'lucide-react';

const Game = () => {
  return (
    <section id="game" className="py-20 bg-gradient-to-b from-blue-900 to-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Ocean Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105">
            <Gamepad2 className="w-12 h-12 text-sky-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Play Now</h3>
            <p className="text-sky-100">Dive into an immersive underwater experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105">
            <Trophy className="w-12 h-12 text-sky-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Leaderboard</h3>
            <p className="text-sky-100">Compete with players worldwide</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105">
            <Users2 className="w-12 h-12 text-sky-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Multiplayer</h3>
            <p className="text-sky-100">Team up with friends and explore together</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Game;