import { useState, useRef, useEffect } from 'react';
import { useError } from './ErrorProvider';

/**
 * A custom hook for handling form errors with automatic focus
 * 
 * @param {boolean} initialState - Initial error state (default: false)
 * @returns {Array} - [errorRef, showError, setShowError, clearError]
 */
export function useFormError(initialState = false) {
  const [showError, setShowError] = useState(initialState);
  const errorRef = useRef(null);
  const { setErrorFocus } = useError();

  // Set focus on the error element when error state changes to true
  useEffect(() => {
    if (showError && errorRef.current) {
      console.log('useFormError detected error state change - element:', errorRef.current);
      
      // Delay slightly to ensure any conditional DOM elements are rendered
      setTimeout(() => {
        setErrorFocus(errorRef.current);
        
        // Monitor focus to verify it worked and prevent focus stealing
        const checkAndMaintainFocus = () => {
          if (document.activeElement) {
            console.log('Active element is now:', document.activeElement);
            
            // Check if focus is where we expect
            const isExpectedTarget = 
              document.activeElement === errorRef.current || 
              (errorRef.current.contains && errorRef.current.contains(document.activeElement));
            
            console.log('Is this the expected element?', isExpectedTarget);
            
            // If focus was lost/stolen, try to restore it
            if (!isExpectedTarget) {
              console.log('Focus appears to be in wrong place, attempting to restore');
              setErrorFocus(errorRef.current);
            }
          }
        };
        
        // Check multiple times to ensure focus remains on error
        const timers = [
          setTimeout(checkAndMaintainFocus, 200),
          setTimeout(checkAndMaintainFocus, 500),
          setTimeout(checkAndMaintainFocus, 1000)
        ];
        
        return () => timers.forEach(timer => clearTimeout(timer));
      }, 50);
    }
  }, [showError, setErrorFocus]);

  // Helper to clear the error
  const clearError = () => {
    console.log('Clearing error state');
    setShowError(false);
  };

  return [errorRef, showError, setShowError, clearError];
} 