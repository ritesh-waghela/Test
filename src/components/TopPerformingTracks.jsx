import React from 'react';
import { Music } from 'lucide-react';

const TopPerformingTracks = ({ tracks }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-pink-600 mb-6">Top Performing Tracks</h3>
      
      <div className="space-y-4">
        {tracks.map((track) => (
          <div 
            key={track.id} 
            className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded-lg px-2 transition-colors duration-200 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-pink-100 transition-colors duration-200">
              <Music className="text-gray-400 group-hover:text-pink-600 transition-colors duration-200" size={16} />
            </div>
            <span className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
              {track.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingTracks;