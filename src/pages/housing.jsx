import React, { useState, useRef, useEffect } from "react";
import {
  VaRadio,
  VaRadioOption,
  VaButtonPair,
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";
import { useFormError } from "../components/useFormError";

export default function DisputeHousing() {
  document.title = "Reason for dispute | Veterans Affairs";

  const navigate = useNavigate();
  const radioGroupRef = useRef(null);
  const [selected, setSelected] = useState(""); // user's choice
  const [errorRef, showError, setShowError, clearError] = useFormError();

  // Connect errorRef to radioGroupRef for the useFormError hook
  useEffect(() => {
    errorRef.current = radioGroupRef.current;
  }, [errorRef]);

  /* custom‑event handler */
  const handleValueChange = (e) => {
    setSelected(e.detail.value); // event.detail.value is the picked option
    clearError(); // hide error immediately using our utility function
  };

  const goForward = () => {
    if (!selected) {
      // nothing picked yet
      setShowError(true);
      return;
    }
    navigate("/dispute-reason-housing");
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
          className="sr-only"
          role="alert"
          aria-live="assertive"
          style={srOnlyStyle}
        >
          Error: Please select the reason you are disputing this debt
        </div>
      )}

      <VaRadio
        label="Why are you disputing this benefit overpayment debt?"
        required
        error={
          showError
            ? "Please select the reason you are disputing this debt"
            : undefined // no banner until we need it
        }
        onVaValueChange={handleValueChange} /* ← correct event */
        ref={radioGroupRef}
      >
        <VaRadioOption
          label="I don't think I owe this debt to VA"
          name="dispute-reason"
          value="not-owe"
        />
        <VaRadioOption
          label="The amount of this debt"
          name="dispute-reason"
          value="amount-wrong"
        />
      </VaRadio>
      <br />
      <va-additional-info trigger="If your debt is correct and you can't afford to pay it">
        <p>
          Request help with your VA debt instead. You'll need to submit a
          different form instead of this dispute form.
        </p>
        <p>
          <va-link
            active
            text="Request help with VA debt"
            href="/request-help"
          />
        </p>
      </va-additional-info>
      <br />
      <VaButtonPair
        continue
        onPrimaryClick={goForward}
        onSecondaryClick={() => navigate("/select-debt")}
        className="vads-u-padding-bottom--2"
      />
      <va-link href="javascript:void(0)" text="Finish this request later" />
    </Layout>
  );
}
