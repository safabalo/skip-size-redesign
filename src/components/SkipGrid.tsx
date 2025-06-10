import React from 'react';
import SkipCard from '@/components/SkipCard';
import type { SkipGridProps } from '../types';


const SkipGrid: React.FC<SkipGridProps> = ({ 
  skips, 
  selectedSkipId, 
  onSkipSelect, 
  isLoading = false,
  isDarkMode = false 
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            className="animate-pulse"
          >
            <div className={`rounded-lg border p-4 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex justify-between items-start mb-3">
                <div className={`h-6 w-16 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              </div>
              <div className={`w-full h-32 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              <div className="space-y-2">
                <div className={`h-6 w-3/4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <div className={`h-4 w-1/2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <div className={`h-8 w-20 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              </div>
              <div className="mt-4">
                <div className={`h-10 w-full rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!skips || skips.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="text-6xl mb-4">🗑️</div>
        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          No Skips Available
        </h3>
        <p className={`text-center max-w-md ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          We couldn't find any skip options for your location. Please try a different postcode or contact us for assistance.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkipId === skip.id}
            onSelect={onSkipSelect}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
      {selectedSkipId && (
        <div className="mt-8 p-4 md:p-6">
          <div className={`border rounded-lg p-4 md:p-6 ${
            isDarkMode 
              ? 'bg-blue-900 border-blue-700' 
              : 'bg-blue-50 border-blue-200'
          }`}>
            {(() => {
              const selectedSkip = skips.find(skip => skip.id === selectedSkipId);
              return selectedSkip ? (
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className={`font-semibold text-lg mb-1 ${
                      isDarkMode ? 'text-blue-100' : 'text-blue-900'
                    }`}>
                      Selected: {selectedSkip.name}
                    </h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-blue-200' : 'text-blue-700'
                    }`}>
                      {selectedSkip.hirePeriod} • £{selectedSkip.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      isDarkMode ? 'text-blue-200' : 'text-blue-600'
                    }`}>
                      £{selectedSkip.price}
                    </div>
                    <div className={`text-sm ${
                      isDarkMode ? 'text-blue-300' : 'text-blue-600'
                    }`}>
                      Total Cost
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipGrid;