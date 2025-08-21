import React from 'react';
import { Home, Package, HelpCircle, Settings, Music } from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'payouts', label: 'Payouts', icon: Package },
  ];

  const bottomItems = [
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">Hoopr Studio</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 mb-1 ${
                isActive 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-200">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 mb-1"
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
        
        {/* User Profile */}
        <div className="flex items-center gap-3 px-4 py-3 mt-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <Music className="text-white" size={16} />
          </div>
          <span className="font-medium text-gray-900">YRF Music</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;