import React, { useEffect, useRef } from "react";
import {
  VaCheckboxGroup,
  VaButtonPair,
  VaCheckbox, // optional: use the React bindings
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { useFormError } from "../components/useFormError";

export default function DebtSelection() {
  document.title = "Select the debt you want to dispute | Veterans Affairs";

  const navigate = useNavigate();
  const checkboxGroupRef = useRef(null);
  const srErrorRef = useRef(null);
  const [errorRef, showError, setShowError, clearError] = useFormError();

  // Connect errorRef to checkboxGroupRef for the useFormError hook
  useEffect(() => {
    errorRef.current = checkboxGroupRef.current;
  }, [errorRef]);

  // Handle error focus with shadow DOM support and SR announcement
  useEffect(() => {
    if (showError) {
      // Focus on our SR error message first for screen readers
      if (srErrorRef.current) {
        // Make it focusable and focus it
        srErrorRef.current.setAttribute('tabindex', '-1');
        srErrorRef.current.focus();
        console.log('Focused on SR error message');
        
        // Update the error message text to match the component's error
        const errorMessage = "Please select a debt you need help with";
        srErrorRef.current.textContent = `Error: ${errorMessage}`;
        
        // Then set focus on the checkbox group for visual users
        // This happens after a short delay to ensure screen readers announce the error first
        setTimeout(() => {
          if (checkboxGroupRef.current) {
            checkboxGroupRef.current.setAttribute('tabindex', '-1');
            checkboxGroupRef.current.focus();
          }
        }, 200);
      }
    }
  }, [showError]);

  const goToNextPage = () => {
    // look at the *property*, not an attribute
    const anyChecked = Array.from(
      document.querySelectorAll("#debt-selection-checkbox-group va-checkbox")
    ).some((cb) => cb.checked);

    if (!anyChecked) {
      setShowError(true);
      // Log when error is set to true
      console.log('Error state set to true, focus should be applied');
      return;
    }
    navigate("/existence-or-amount-housing");
  };

  const goToPreviousPage = () => navigate("/contact-information");

  // clear the error as soon as a box is toggled
  const handleGroupChange = () => clearError();

  // CSS for screen reader only elements
  const srOnlyStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0'
  };

  return (
    <Layout>
      <va-segmented-progress-bar
        current={2}
        heading-text="Debt Selection"
        total={4}
        use-div="true"
      />

      <h1 className="vads-u-font-size--h1">Which debt are you disputing?</h1>

      {/* Screen reader accessible error message */}
      {showError && (
        <div 
          ref={srErrorRef}
          className="sr-only"
          role="alert"
          aria-live="assertive"
          style={srOnlyStyle}
        >
          Error: Please select a debt you need help with
        </div>
      )}

      <VaCheckboxGroup
        id="debt-selection-checkbox-group"
        label="Select one or more debts you need help with:"
        error={
          showError ? "Please select a debt you need help with" : undefined
        }
        onVaChange={handleGroupChange} /* custom event listener */
        required
        ref={checkboxGroupRef}
      >
        <VaCheckbox
          label="$227.42 Overpayment for Post‑9/11 GI Bill debt for housing"
          checkboxDescription="Pay or request help by November 1, 2024"
          name="housing"
          value="1"
          tile
        />
        <VaCheckbox
          label="$300.00 for Disability Compensation and Pension debt"
          checkboxDescription="Pay or request help by November 1, 2024"
          name="disability"
          value="2"
          tile
        />
      </VaCheckboxGroup>

      <br />

      <va-additional-info trigger="If your debt isn't listed here">
        To dispute a benefit overpayment debt that's not listed here, call us at{" "}
        <va-telephone contact="8008270648" /> (or{" "}
        <va-telephone contact="6127136415" international /> from overseas).
        We're here Monday – Friday, 7:30 a.m.–7 p.m. ET.
      </va-additional-info>

      <br />

      <VaButtonPair
        continue
        onPrimaryClick={goToNextPage}
        onSecondaryClick={goToPreviousPage}
        className="vads-u-padding-bottom--2"
      />

      <va-link href="javascript:void(0)" text="Finish this request later" />
    </Layout>
  );
}
