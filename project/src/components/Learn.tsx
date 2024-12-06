import React from 'react';
import { BookOpen, Video, Award } from 'lucide-react';

const Learn = () => {
  const courses = [
    {
      title: "Ocean Fundamentals",
      description: "Learn about marine ecosystems and ocean conservation",
      icon: <BookOpen className="w-6 h-6" />,
      level: "Beginner"
    },
    {
      title: "Marine Biology",
      description: "Discover the fascinating world of marine life",
      icon: <Video className="w-6 h-6" />,
      level: "Intermediate"
    },
    {
      title: "Advanced Oceanography",
      description: "Deep dive into ocean currents and climate",
      icon: <Award className="w-6 h-6" />,
      level: "Advanced"
    }
  ];

  return (
    <section id="learn" className="py-20 bg-gradient-to-b from-sky-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Learning Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <div className="text-sky-300 mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
              <p className="text-sky-100 mb-4">{course.description}</p>
              <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-200 rounded-full text-sm">
                {course.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learn;