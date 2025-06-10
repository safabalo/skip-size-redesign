import React, { useState, useEffect } from 'react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import SkipGrid from '../components/SkipGrid';
import PageLayout from '../components/layout/PageLayout';
import CheckoutBottomSheet from '../components/CheckoutBottomSheet';
import Stepper from '../components/Stepper';
import type { ApiSkipData, SkipOption } from '../types';


const SkipSelectionPage: React.FC = () => {
  const [skips, setSkips] = useState<SkipOption[]>([]);
  const [selectedSkipId, setSelectedSkipId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiSkipData[] = await response.json();
        const transformedSkips: SkipOption[] = data.map((apiSkip) => {
          const finalPrice = Math.round(apiSkip.price_before_vat * (1 + apiSkip.vat / 100));
          
          return {
            id: apiSkip.id.toString(),
            name: `${apiSkip.size} Yard Skip`,
            size: `${apiSkip.size} Yards`,
            price: finalPrice,
            hirePeriod: `${apiSkip.hire_period_days} day hire period`,
            description: `${apiSkip.allowed_on_road ? 'Road placement allowed' : 'Permit required'} • ${apiSkip.allows_heavy_waste ? 'Heavy waste allowed' : 'Standard waste only'}`,
          };
        });
        
        setSkips(transformedSkips);
      } catch (err) {
        console.error('Error fetching skip data:', err);
        setError('Failed to load skip options. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSkipSelect = (skipId: string) => {
    if (selectedSkipId === skipId) {
      setSelectedSkipId(null);
    } else {
      setSelectedSkipId(skipId);
    }
  };

  const handleContinue = () => {
    if (!selectedSkipId) return;
    console.log('Continuing with skip:', selectedSkipId);
    alert(`Proceeding with selected skip: ${selectedSkipId}`);
  };

  const handleBack = () => {
    console.log('Going back to previous step');
  };

  const handleCloseCheckout = () => {
    setSelectedSkipId(null);
  };
  const selectedSkip = selectedSkipId ? skips.find(skip => skip.id === selectedSkipId) || null : null;
  if (error) {
    return (
      <PageLayout isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className={`w-full max-w-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Oops! Something went wrong
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {error}
              </p>
              <Button onClick={() => window.location.reload()} className="w-full">
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageLayout>
    );
  }

  return (
    <>
      <PageLayout isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode}>
        <Stepper isDarkMode={isDarkMode} variant="default" />
        <div className="text-center mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Skip Size
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Select the skip size that best suits your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className={`${isDarkMode ? 'bg-blue-900 text-blue-300 border-blue-700' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
              📍 Lowestoft, NR32
            </Badge>
            <Badge variant="outline" className={`${isDarkMode ? 'bg-green-900 text-green-300 border-green-700' : 'bg-green-50 text-green-700 border-green-200'}`}>
              🌱 Garden Waste
            </Badge>
          </div>
        </div>
        <SkipGrid
          skips={skips}
          selectedSkipId={selectedSkipId}
          onSkipSelect={handleSkipSelect}
          isLoading={isLoading}
          isDarkMode={isDarkMode}
        />

        <div className={`transition-all duration-300 ${selectedSkip ? 'pb-32' : 'pb-8'}`} />
      </PageLayout>
      <CheckoutBottomSheet
        selectedSkip={selectedSkip}
        isDarkMode={isDarkMode}
        onContinue={handleContinue}
        onBack={handleBack}
        onClose={handleCloseCheckout}
      />
    </>
  );
};

export default SkipSelectionPage;