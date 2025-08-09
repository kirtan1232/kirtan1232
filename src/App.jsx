import React, { useState } from 'react';
import TrendsPage from './TrendsPage.jsx';
import PlaylistPage from './PlaylistPage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('playlist');

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-md border-b border-white border-opacity-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentPage('playlist')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'playlist'
                  ? 'bg-purple-500 text-white'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              Playlist (Tailwind CSS)
            </button>
            <button
              onClick={() => setCurrentPage('trends')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === 'trends'
                  ? 'bg-purple-500 text-white'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              Trends (Tailwind CSS)
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 'playlist' && <PlaylistPage />}
        {currentPage === 'trends' && <TrendsPage />}
      </div>
    </div>
  );
}

export default App;