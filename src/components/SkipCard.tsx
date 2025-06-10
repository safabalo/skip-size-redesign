import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import type { SkipCardProps } from '@/types';

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect, isDarkMode = false }) => {
  const getCardClassName = () => {
    const baseClasses = 'relative transition-all duration-300 hover:shadow-lg cursor-pointer group';
    
    if (isSelected) {
      return isDarkMode 
        ? `${baseClasses} ring-2 ring-blue-400 shadow-lg bg-blue-900/30 border-blue-600`
        : `${baseClasses} ring-2 ring-blue-500 shadow-lg bg-blue-50/30`;
    }
    
    return isDarkMode
      ? `${baseClasses} hover:shadow-md border-gray-600 bg-gray-800 hover:border-gray-500`
      : `${baseClasses} hover:shadow-md border-gray-200 bg-white`;
  };

  const getIndicatorClassName = () => {
    return isDarkMode ? 'bg-blue-400' : 'bg-blue-500';
  };
  const getSizeBadgeClassName = () => {
    const baseClasses = 'font-semibold px-3 py-1';
    return isDarkMode 
      ? `${baseClasses} bg-blue-900 text-blue-200 border-blue-700`
      : `${baseClasses} bg-blue-100 text-blue-800`;
  };

  const getSelectedBadgeClassName = () => {
    return isDarkMode 
      ? 'bg-green-900 text-green-200 border-green-700'
      : 'bg-green-100 text-green-800 border-green-200';
  };
  const getTitleClassName = () => {
    const baseClasses = 'font-bold text-lg transition-colors';
    return isDarkMode 
      ? `${baseClasses} text-white group-hover:text-blue-300`
      : `${baseClasses} text-gray-900 group-hover:text-blue-600`;
  };

  const getHirePeriodClassName = () => {
    return `text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`;
  };

  const getDescriptionClassName = () => {
    return `text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;
  };

  const getPriceClassName = () => {
    return `text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`;
  };
  const getButtonClassName = () => {
    const baseClasses = 'w-full transition-all duration-200';
    
    if (isSelected) {
      return `${baseClasses} bg-green-600 hover:bg-green-700 text-white`;
    }
    return`${baseClasses} bg-blue-600 hover:bg-blue-700 text-white`;
  };

  return (
    <Card className={getCardClassName()} onClick={() => onSelect(skip.id)}>
      {isSelected && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className={`rounded-full p-1 ${getIndicatorClassName()}`}>
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      )}

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="secondary" className={getSizeBadgeClassName()}>
            {skip.size}
          </Badge>
          {isSelected && (
            <Badge className={getSelectedBadgeClassName()}>
              Selected
            </Badge>
          )}
        </div>
        <div className="w-full h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {skip.image ? (
            <img 
              src={skip.image} 
              alt={skip.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-white font-bold text-lg opacity-80">
              🗑️ Skip
            </div>
          )}
        </div>
        <div className="space-y-2">
          <h3 className={getTitleClassName()}>
            {skip.name}
          </h3>
          
          <p className={getHirePeriodClassName()}>
            {skip.hirePeriod}
          </p>

          {skip.description && (
            <p className={getDescriptionClassName()}>
              {skip.description}
            </p>
          )}
          <div className="pt-2">
            <span className={getPriceClassName()}>
              £{skip.price}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className={getButtonClassName()}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip.id);
          }}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkipCard;