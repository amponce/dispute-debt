import React, { createContext, useContext, useRef, useCallback } from 'react';

// Create a context for error handling
const ErrorContext = createContext();

export function ErrorProvider({ children }) {
  // Reference to store the error element that should receive focus
  const errorRef = useRef(null);

  // Function to set focus on an error element
  const setErrorFocus = useCallback((ref) => {
    errorRef.current = ref;
    
    // Set focus after a small delay to ensure the DOM has updated
    setTimeout(() => {
      if (errorRef.current) {
        console.log('Focus attempt on:', errorRef.current);
        
        // For VA checkbox group components - special handling
        if (errorRef.current.tagName && 
            (errorRef.current.tagName.toLowerCase() === 'va-checkbox-group' || 
             errorRef.current.querySelector('va-checkbox-group'))) {
          
          // Find the specific error element inside the component
          const messageElement = errorRef.current.querySelector('[role="alert"], .usa-error-message');
          if (messageElement) {
            // Add tabindex if not already focusable
            if (!messageElement.getAttribute('tabindex')) {
              messageElement.setAttribute('tabindex', '-1');
            }
            
            // Ensure screen readers announce this
            messageElement.setAttribute('aria-live', 'assertive');
            messageElement.focus();
            console.log('VA component message focused');
            return;
          }
          
          // If we couldn't find the message, try to focus the group itself
          // Force it to be focusable
          errorRef.current.setAttribute('tabindex', '-1');
          errorRef.current.focus();
          console.log('VA component group focused');
          return;
        }
        
        // If it's a DOM element
        if (errorRef.current.focus) {
          // Make sure it's focusable
          if (!errorRef.current.getAttribute('tabindex')) {
            errorRef.current.setAttribute('tabindex', '-1');
          }
          
          errorRef.current.focus();
          console.log('Direct focus applied');
          
          // Explicitly prevent other elements from stealing focus
          const preventFocusSteal = (e) => {
            const focused = document.activeElement;
            if (focused !== errorRef.current) {
              console.log('Focus was stolen, restoring');
              errorRef.current.focus();
            }
          };
          
          // Monitor focus for a short period
          setTimeout(preventFocusSteal, 50);
          setTimeout(preventFocusSteal, 150);
          setTimeout(preventFocusSteal, 300);
        } 
        // If it's a React ref
        else if (errorRef.current.current && errorRef.current.current.focus) {
          // Make sure it's focusable
          if (!errorRef.current.current.getAttribute('tabindex')) {
            errorRef.current.current.setAttribute('tabindex', '-1');
          }
          
          errorRef.current.current.focus();
          console.log('Ref focus applied');
        }
        // For VA components that might need special handling
        else if (errorRef.current.querySelector) {
          // Enhanced selector for VA components
          const errorElement = errorRef.current.querySelector(
            '.usa-input-error-message, .usa-error-message, .va-error-message, va-error-messages, [role="alert"]'
          );
          if (errorElement) {
            // Make sure it's focusable
            if (!errorElement.getAttribute('tabindex')) {
              errorElement.setAttribute('tabindex', '-1');
            }
            
            errorElement.focus();
            console.log('Error element focus applied to:', errorElement);
          } else {
            // Fallback to focusing the container element itself
            // Make sure it's focusable
            if (!errorRef.current.getAttribute('tabindex')) {
              errorRef.current.setAttribute('tabindex', '-1');
            }
            
            errorRef.current.focus();
            console.log('Fallback focus applied');
          }
        }
      } else {
        console.log('No element to focus');
      }
    }, 100);
  }, []);

  return (
    <ErrorContext.Provider value={{ setErrorFocus }}>
      {children}
    </ErrorContext.Provider>
  );
}

// Custom hook to use the error context
export function useError() {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
} 