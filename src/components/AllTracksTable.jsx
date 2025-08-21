import React, { useState } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';

const AllTracksTable = ({ tracks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('plays');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredAndSortedTracks = tracks
    .filter(track => 
      track.trackName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.trackId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">All Tracks</h3>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">No.</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Track ID</th>
              <th 
                className="text-left py-4 px-6 text-sm font-semibold text-gray-900 cursor-pointer hover:text-pink-600 transition-colors duration-200"
                onClick={() => handleSort('trackName')}
              >
                <div className="flex items-center gap-1">
                  Track Name
                  <SortIcon field="trackName" />
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-semibold text-gray-900 cursor-pointer hover:text-pink-600 transition-colors duration-200"
                onClick={() => handleSort('downloads')}
              >
                <div className="flex items-center gap-1">
                  Downloads
                  <SortIcon field="downloads" />
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-semibold text-gray-900 cursor-pointer hover:text-pink-600 transition-colors duration-200"
                onClick={() => handleSort('plays')}
              >
                <div className="flex items-center gap-1">
                  Plays
                  <SortIcon field="plays" />
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-semibold text-gray-900 cursor-pointer hover:text-pink-600 transition-colors duration-200"
                onClick={() => handleSort('likes')}
              >
                <div className="flex items-center gap-1">
                  Likes
                  <SortIcon field="likes" />
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 text-sm font-semibold text-gray-900 cursor-pointer hover:text-pink-600 transition-colors duration-200"
                onClick={() => handleSort('revenue')}
              >
                <div className="flex items-center gap-1">
                  Revenue
                  <SortIcon field="revenue" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedTracks.map((track) => (
              <tr 
                key={track.trackId} 
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-6 text-sm text-gray-700">{track.no}</td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{track.trackId}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded"></div>
                    <span className="text-sm font-medium text-gray-900">{track.trackName}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-gray-700">{track.downloads.toLocaleString()}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{track.plays.toLocaleString()}</td>
                <td className="py-4 px-6 text-sm text-gray-700">{track.likes.toLocaleString()}</td>
                <td className="py-4 px-6 text-sm font-semibold text-gray-900">₹{track.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTracksTable;