import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VaButtonPair } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";

const RadioOptions = ({ config }) => {
  const [selectedPath, setSelectedPath] = useState("");
  const navigate = useNavigate();

  // Add event listener to catch custom events from va-radio
  React.useEffect(() => {
    const handleCustomEvent = (event) => {
      if (event.target.tagName.toLowerCase() === "va-radio") {
        const selected = config.find(
          (option) => option.value === event.detail.value
        );
        if (selected) {
          console.log("Selected path:", selected.path);
          setSelectedPath(selected.path);
        }
      }
    };

    document.addEventListener("vaValueChange", handleCustomEvent);
    return () =>
      document.removeEventListener("vaValueChange", handleCustomEvent);
  }, [config]);

  const handleContinue = () => {
    console.log("Attempting to navigate to:", selectedPath);
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="vads-u-padding-y--2">
      <va-radio
        label="Please select an option"
        name="navigationOptions"
        required={true}
      >
        {config.map((option) => (
          <va-radio-option
            key={option.value}
            name="navigationOptions"
            label={option.label}
            value={option.value}
            description={option.description}
          />
        ))}
      </va-radio>

      <div className="vads-u-margin-top--4">
        <VaButtonPair
          continue
          onPrimaryClick={handleContinue}
          onSecondaryClick={handleBack}
          primaryDisabled={!selectedPath}
        />
      </div>
    </div>
  );
};

export default RadioOptions;
