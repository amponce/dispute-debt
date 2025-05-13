import React, { useState, useRef, useEffect } from "react";
import { VaButtonPair } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { useFormError } from "../components/useFormError";

export default function HousingReason() {
  document.title = "Reason for dispute | Veterans Affairs";
  const navigate = useNavigate();
  const textareaRef = useRef(null);
  const srErrorRef = useRef(null);
  const [errorRef, showError, setShowError, clearError] = useFormError();

  // Connect errorRef to textarea for the useFormError hook
  useEffect(() => {
    errorRef.current = textareaRef.current;
  }, [errorRef, textareaRef.current]);

  // Add specific focus handling for textarea
  useEffect(() => {
    if (showError) {
      // Focus the screen reader message first
      if (srErrorRef.current) {
        srErrorRef.current.setAttribute('tabindex', '-1');
        srErrorRef.current.focus();
        
        // Then after a brief delay, focus the textarea for visual users
        setTimeout(() => {
          if (textareaRef.current) {
            // Ensure the textarea can receive focus
            textareaRef.current.setAttribute('tabindex', '-1');
            
            // Focus the textarea
            textareaRef.current.focus();
            
            // Try to access inside the shadow DOM for better focus
            try {
              // If the component has a shadowRoot, try to focus the inner textarea
              if (textareaRef.current.shadowRoot) {
                const innerTextarea = textareaRef.current.shadowRoot.querySelector('textarea');
                if (innerTextarea) {
                  innerTextarea.focus();
                  // Add strong visual indicator
                  innerTextarea.style.outline = '2px solid #2491ff';
                  innerTextarea.style.boxShadow = '0 0 5px #2491ff';
                }
              }
            } catch (e) {
              console.error('Error accessing shadow DOM:', e);
            }
          }
        }, 100);
      }
    }
  }, [showError]);

  // Clear error when user starts typing
  const handleInput = (e) => {
    if (showError) {
      clearError();
    }
  };

  const goToNextPage = () => {
    const text = textareaRef.current?.value?.trim() || "";

    if (text === "") {
      setShowError(true);
      // Log when error is set to true
      console.log('Error state set to true, focus should be applied');
      return;
    }
    navigate("/existence-or-amount-compensation");
  };

  const goToPreviousPage = () => {
    navigate("/existence-or-amount-housing");
  };
  
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
        current={3}
        heading-text="Reason for dispute"
        total={4}
        use-div="true"
      />
      <h1 className="vads-u-font-size--h1">
        Debt 1 of 2: $227.42 Overpayment for Post-9/11 GI Bill debt for housing
      </h1>
      
      {/* Screen reader accessible error message */}
      {showError && (
        <div 
          ref={srErrorRef}
          className="sr-only"
          role="alert"
          aria-live="assertive"
          style={srOnlyStyle}
        >
          Error: Please enter the reason you are disputing this debt
        </div>
      )}
      
      <va-textarea
        ref={textareaRef}
        header-aria-describedby={null}
        hint={null}
        label="Tell us why you're disputing this debt:"
        label-header-level={null}
        name="dispute-reason"
        onBlur={function noRefCheck() {}}
        onVaInput={handleInput}
        placeholder=""
        required
        error={
          showError
            ? "Please enter the reason you are disputing this debt"
            : undefined
        }
      />

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
