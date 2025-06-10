import React from 'react';
import type { Step, StepperProps } from '@/types';
import { defaultSteps } from '@/constants';
import { ArrowRight } from 'lucide-react';

const Stepper: React.FC<StepperProps> = ({ steps, isDarkMode, variant = 'default' }) => {
  const stepperSteps = steps || defaultSteps;
  const isCompact = variant === 'compact';

  const getStepClassName = (step: Step): string => {
    const baseClasses = 'flex items-center space-x-1 md:space-x-2 rounded-full text-xs md:text-sm whitespace-nowrap transition-all duration-200';
    const paddingClasses = isCompact ? 'px-2 py-1' : 'px-2 md:px-3 py-2';
    
    let stateClasses = '';
    
    if (step.active) {
      stateClasses = isDarkMode 
        ? 'bg-blue-900 text-blue-300 font-medium shadow-lg'
        : 'bg-blue-100 text-blue-700 font-medium shadow-md';
    } else if (step.completed) {
      stateClasses = isDarkMode
        ? 'bg-green-900 text-green-300 shadow-sm'
        : 'bg-green-100 text-green-700 shadow-sm';
    } else {
      stateClasses = isDarkMode
        ? 'bg-gray-700 text-gray-400'
        : 'bg-gray-100 text-gray-500';
    }
    
    return `${baseClasses} ${stateClasses} ${paddingClasses}`;
  };

  return (
    <div className={`flex justify-center ${isCompact ? 'mb-6' : 'mb-8'}`}>
      <div className="flex items-center space-x-1 overflow-x-auto pb-2 md:pb-0 max-w-full">
        {stepperSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={getStepClassName(step)}>
              <step.icon className={`flex-shrink-0 ${isCompact ? 'w-3 h-3' : 'w-3 h-3 md:w-4 md:h-4'}`} />
              <span className={isCompact ? 'hidden md:inline text-xs' : 'hidden sm:inline'}>
                {step.label}
              </span>
            </div>
            {index < stepperSteps.length - 1 && (
              <ArrowRight className={`flex-shrink-0 ${isCompact ? 'w-3 h-3' : 'w-3 h-3 md:w-4 md:h-4'} ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;