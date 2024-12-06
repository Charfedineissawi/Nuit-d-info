import React from 'react';
import { Anchor, Gamepad2, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-sky-800/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Anchor className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">DeepBlue</span>
          </div>
          <div className="flex space-x-4">
            {[
              { name: 'Learn', icon: <Anchor className="h-5 w-5" /> },
              { name: 'Game', icon: <Gamepad2 className="h-5 w-5" /> },
              { name: 'Community', icon: <Users className="h-5 w-5" /> },
            ].map((item) => (
              <button
                key={item.name}
                className="group flex items-center px-4 py-2 text-white transition-all duration-300 hover:bg-sky-600 rounded-lg"
              >
                <span className="mr-2 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;