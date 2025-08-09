import React, { useState } from 'react';

const TrendsPage = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const trends = [
    { id: 1, title: 'Trending Song 1', artist: 'Artist A', plays: '1.2M' },
    { id: 2, title: 'Trending Song 2', artist: 'Artist B', plays: '980K' },
    { id: 3, title: 'Trending Song 3', artist: 'Artist C', plays: '850K' },
    { id: 4, title: 'Trending Song 4', artist: 'Artist D', plays: '720K' },
    { id: 5, title: 'Trending Song 5', artist: 'Artist E', plays: '650K' },
  ];

  const handlePlay = (song) => {
    setSuccessMessage(`Now playing: ${song.title}`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Trending Now
        </h1>

        {/* Success Message */}
        {successMessage && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90 z-50 transform transition-all duration-300 ease-in-out">
            {successMessage}
          </div>
        )}

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((song) => (
            <div key={song.id} className="group">
              <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">{song.title}</h3>
                    <p className="text-gray-300 text-sm">{song.artist}</p>
                    <p className="text-purple-300 text-xs">{song.plays} plays</p>
                  </div>
                </div>
                <button
                  onClick={() => handlePlay(song)}
                  className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8">
          <button className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendsPage;