import React from 'react';

const TracksOverview = ({ totalTracks, vocalTracks, instrumentalTracks }) => {
  const vocalPercentage = (vocalTracks / totalTracks) * 100;
  // const instrumentalPercentage = (instrumentalTracks / totalTracks) * 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Total Tracks</h3>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-900 mb-2">{totalTracks}</div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${vocalPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-200"></div>
            <span className="text-gray-600 text-sm">Vocal Tracks</span>
          </div>
          <span className="font-semibold text-gray-900">{vocalTracks}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-600 text-sm">Instrumental Tracks</span>
          </div>
          <span className="font-semibold text-gray-900">{instrumentalTracks}</span>
        </div>
      </div>
    </div>
  );
};

export default TracksOverview;