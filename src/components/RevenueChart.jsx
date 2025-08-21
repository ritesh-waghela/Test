import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const RevenueChart = ({ data }) => {
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-pink-600">Revenue (₹)</h3>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
            <Filter size={14} />
            Filter
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Monthly
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Y-axis labels */}
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>0</span>
          <span>5K</span>
          <span>10K</span>
          <span>15K</span>
          <span>20K</span>
          <span>25K</span>
        </div>
        
        {/* Chart */}
        <div className="flex items-end justify-between h-40 gap-2">
          {data.map((item, index) => {
            const height = (item.revenue / maxRevenue) * 100;
            const isHighest = item.revenue === maxRevenue;
            
            return (
              <div key={item.month} className="flex flex-col items-center flex-1 group">
                <div className="relative w-full flex justify-center mb-2">
                  <div 
                    className={`w-8 rounded-t-md transition-all duration-1000 ease-out hover:opacity-80 cursor-pointer ${
                      isHighest ? 'bg-pink-500' : 'bg-pink-200'
                    }`}
                    style={{ 
                      height: `${height}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {item.revenue.toFixed(1)}K
                  </div>
                </div>
                
                <span className="text-xs text-gray-500 font-medium">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;