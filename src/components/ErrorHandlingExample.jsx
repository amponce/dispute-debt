import React from 'react';
import { useFormError } from './useFormError';

/**
 * Example component showing how to use the error handling system
 * This demonstrates the pattern to use in all form components
 */
export function ErrorHandlingExample() {
  // 1. Use the hook to get error handling functionality
  const [errorRef, showError, setShowError, clearError] = useFormError();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 2. Set validation logic
    const isValid = validateForm();
    
    if (!isValid) {
      // 3. Set error to true, which will automatically focus the error
      setShowError(true);
      return;
    }
    
    // Continue with form submission...
  };
  
  const validateForm = () => {
    // Your validation logic here
    return false; // Just for example purposes
  };
  
  // 4. Clear error when input changes
  const handleInputChange = () => {
    if (showError) {
      clearError();
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* 5. Attach errorRef to the element that should receive focus */}
        <label htmlFor="example-input">Example Input</label>
        <div ref={errorRef}>
          <input 
            id="example-input"
            type="text" 
            onChange={handleInputChange}
            aria-describedby={showError ? "error-message" : undefined}
            aria-invalid={showError ? "true" : "false"}
          />
          {/* 6. Display error message when showError is true */}
          {showError && (
            <div id="error-message" className="error-message" role="alert">
              This field is required
            </div>
          )}
        </div>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
} 