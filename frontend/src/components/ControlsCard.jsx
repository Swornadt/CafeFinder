import React from 'react';

const ControlsCard = ({radius, setRadius, maxCafes, setMaxCafes}) => {
    return (
        <div className="bg-gray-800 text-gray-100 max-w-lg p-4 rounded-xl shadow-md mb-4 space-y-6 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Search Radius */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-100">
                Search Radius
              </h3>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                {radius} km
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-48 md:w-56 accent-blue-600 cursor-pointer transition-all hover:accent-blue-700"
            />
          </div>

          {/* Max Cafes */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-100">
                Maximum Cafes
              </h3>
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full font-medium">
                {maxCafes}
              </span>
            </div>
            <input
              type="range"
              id="maxCafes"
              min="5"
              max="50"
              value={maxCafes}
              onChange={(e) => setMaxCafes(Number(e.target.value))}
              className="w-48 md:w-56 accent-yellow-500 cursor-pointer transition-all hover:accent-yellow-600"
            />
          </div>
        </div>
      </div>
    );
}

export default ControlsCard;
