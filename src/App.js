import { useState } from 'react';
import { DollarSign, Download, Play, Heart } from 'lucide-react';
import './index.css';

import Sidebar from './components/Sidebar';
import KPICard from './components/KPICard';
import TracksOverview from './components/TracksOverview';
import TopPerformingArtists from './components/TopPerformingArtists';
import TopPerformingTracks from './components/TopPerformingTracks';
import RevenueChart from './components/RevenueChart';
import AllTracksTable from './components/AllTracksTable';

import { 
  kpiData, 
  tracksOverview, 
  topArtists, 
  topTracks, 
  revenueData, 
  allTracksData 
} from './data/mockData';

function App() {
  const [activeItem, setActiveItem] = useState('overview');

  if (activeItem !== 'overview') {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}
            </h2>
            <p className="text-gray-600">This section is coming soon...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Business Overview</h1>
          
          {/* KPI Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
            <KPICard
              title={kpiData.revenue.title}
              value={kpiData.revenue.value}
              change={kpiData.revenue.change}
              color={kpiData.revenue.color}
              icon={<DollarSign size={20} />}
            />
            
            <KPICard
              title={kpiData.downloads.title}
              value={kpiData.downloads.value}
              color={kpiData.downloads.color}
              icon={<Download size={20} />}
            />
            
            <KPICard
              title={kpiData.plays.title}
              value={kpiData.plays.value}
              change={kpiData.plays.change}
              color={kpiData.plays.color}
              icon={<Play size={20} />}
            />
            
            <KPICard
              title={kpiData.likes.title}
              value={kpiData.likes.value}
              color={kpiData.likes.color}
              icon={<Heart size={20} />}
            />
            
            <TracksOverview
              totalTracks={tracksOverview.total}
              vocalTracks={tracksOverview.vocal}
              instrumentalTracks={tracksOverview.instrumental}
            />
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <TopPerformingArtists artists={topArtists} />
            <TopPerformingTracks tracks={topTracks} />
            <RevenueChart data={revenueData} />
          </div>

          {/* All Tracks Table */}
          <AllTracksTable tracks={allTracksData} />
        </div>
      </div>
    </div>
  );
}

export default App;