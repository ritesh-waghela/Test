import React from 'react';

const TopPerformingArtists = ({ artists }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-pink-600 mb-6">Top Performing Artists</h3>
      
      <div className="space-y-4">
        {artists.map((artist) => (
          <div 
            key={artist.id} 
            className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200 cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-medium w-4">{artist.rank}.</span>
              <span className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                {artist.name}
              </span>
            </div>
            <span className="font-semibold text-gray-900">
              {artist.plays.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingArtists;