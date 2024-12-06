import React from 'react';
import { MessageCircle, Share2, Heart } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-sky-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <MessageCircle className="w-8 h-8 text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Discussion Forums</h3>
            <p className="text-sky-100 mb-4">Connect with ocean enthusiasts worldwide</p>
            <button className="bg-sky-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-sky-500">
              Join Discussion
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <Share2 className="w-8 h-8 text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Share Discoveries</h3>
            <p className="text-sky-100 mb-4">Share your underwater adventures</p>
            <button className="bg-sky-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-sky-500">
              Share Now
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
            <Heart className="w-8 h-8 text-sky-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Events</h3>
            <p className="text-sky-100 mb-4">Join virtual and local ocean events</p>
            <button className="bg-sky-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-sky-500">
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;