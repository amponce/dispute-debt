import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DebtSelection from '../pages/debts';
import { ErrorProvider } from '../components/ErrorProvider';

// Mock navigation function
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Error Focus Behavior', () => {
  test('should focus on error message when validation fails', () => {
    // Arrange: Render the component with ErrorProvider
    render(
      <BrowserRouter>
        <ErrorProvider>
          <DebtSelection />
        </ErrorProvider>
      </BrowserRouter>
    );

    // Create a spy for the focus function
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    // Act: Click the Next button without selecting checkboxes
    const nextButton = screen.getByText('Continue');
    fireEvent.click(nextButton);

    // Assert: Expect focus to be called
    expect(focusSpy).toHaveBeenCalled();
    
    // Check if error message is shown
    expect(screen.getByText('Please select a debt you need help with')).toBeInTheDocument();

    // Cleanup
    focusSpy.mockRestore();
  });
}); 