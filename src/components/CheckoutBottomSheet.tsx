import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle, X } from 'lucide-react';
import type { CheckoutBottomSheetProps } from '../types';


const CheckoutBottomSheet: React.FC<CheckoutBottomSheetProps> = ({
  selectedSkip,
  isDarkMode,
  onContinue,
  onBack,
  onClose
}) => {
  if (!selectedSkip) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-out ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-t rounded-t-2xl shadow-2xl`}>
        <div className="flex justify-center pt-3 pb-2">
          <div className={`w-12 h-1 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />
        </div>
        <div className="px-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Skip Selected
              </h3>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className={`p-4 rounded-xl mb-6 ${
            isDarkMode 
              ? 'bg-blue-900/30 border border-blue-700/50' 
              : 'bg-blue-50 border border-blue-100'
          }`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h4 className={`text-xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}>
                  {selectedSkip.name}
                </h4>
                <p className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  {selectedSkip.hirePeriod}
                </p>
                {selectedSkip.description && (
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {selectedSkip.description}
                  </p>
                )}
              </div>
              <div className="text-right">
                <div className={`text-3xl font-bold ${isDarkMode ? 'text-blue-200' : 'text-blue-600'}`}>
                  £{selectedSkip.price}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                  Total Cost
                </div>
              </div>
            </div>
            <div className={`pt-3 border-t ${isDarkMode ? 'border-blue-700/50' : 'border-blue-200'}`}>
              <div className="flex justify-between text-sm mb-1">
                <span className={isDarkMode ? 'text-blue-300' : 'text-blue-700'}>
                  Skip Hire ({selectedSkip.size})
                </span>
                <span className={isDarkMode ? 'text-blue-200' : 'text-blue-900'}>
                  £{selectedSkip.price}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className={isDarkMode ? 'text-blue-300' : 'text-blue-700'}>
                  Includes: Delivery, Collection & Disposal
                </span>
                <span className={`text-xs ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  ✓ Included
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={onBack}
              className={`flex-1 flex items-center justify-center space-x-2 h-12 ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-700 hover:bg-gray-700' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>

            <Button
              onClick={onContinue}
              className="flex-2 sm:flex-[2] flex items-center justify-center space-x-2 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span className="font-medium">Continue to Permit Check</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
              <p className={`text-xs text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, 
          colours may vary, options and/or accessories may be featured at additional cost.
        </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutBottomSheet;