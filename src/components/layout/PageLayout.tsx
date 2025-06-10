import React from 'react';
import Header from '@/components/layout/Header';
import type { PageLayoutProps } from '@/types';


const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  isDarkMode, 
  onToggleDarkMode, 
  showHeader = true,
}) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {showHeader && (
        <Header 
          isDarkMode={isDarkMode} 
          onToggleDarkMode={onToggleDarkMode}
        />
      )}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
    
    </div>
  );
};

export default PageLayout;