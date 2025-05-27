import React, { useState } from "react";
import Layout from "../components/layout";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { widgets } from "../components/va-form-widgets";

/**
 * Multi-step form page using react-jsonschema-form with VA Design System components
 * Demonstrates creating a wizard-like interface with multiple form steps
 * Uses custom VA Design System widgets for the form controls
 */
const MultiStepForm = () => {
  // State to track the current step
  const [step, setStep] = useState(0);
  // State to store form data across steps
  const [formData, setFormData] = useState({});
  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define the steps with their schemas and UI schemas
  const steps = [
    {
      title: "Personal Information",
      schema: {
        type: "object",
        required: ["firstName", "lastName", "email"],
        properties: {
          firstName: {
            type: "string",
            title: "First Name",
          },
          lastName: {
            type: "string",
            title: "Last Name",
          },
          email: {
            type: "string",
            title: "Email Address",
            format: "email",
          },
          phone: {
            type: "string",
            title: "Phone Number",
          },
        },
      },
      uiSchema: {
        "ui:classNames": "va-form-step",
        firstName: {
          "ui:autofocus": true,
          "ui:placeholder": "Enter your first name",
        },
        lastName: {
          "ui:placeholder": "Enter your last name",
        },
        email: {
          "ui:placeholder": "Enter your email address",
        },
        phone: {
          "ui:placeholder": "(555) 555-5555",
        },
      },
    },
    {
      title: "Service Information",
      schema: {
        type: "object",
        required: ["serviceType", "serviceStatus"],
        properties: {
          serviceType: {
            type: "string",
            title: "Service Type",
            enum: ["Army", "Navy", "Air Force", "Marines", "Coast Guard", "Space Force"],
          },
          serviceStatus: {
            type: "string",
            title: "Current Status",
            enum: ["Active Duty", "Veteran", "Retired", "Reserve", "National Guard"],
          },
          serviceStartDate: {
            type: "string",
            title: "Service Start Date",
            format: "date",
          },
          serviceEndDate: {
            type: "string",
            title: "Service End Date (if applicable)",
            format: "date",
          },
        },
      },
      uiSchema: {
        "ui:classNames": "va-form-step",
        serviceType: {
          "ui:widget": "select",
          "ui:placeholder": "-- Select Service Type --",
          "ui:errorMessages": {
            required: "Please select a service type"
          }
        },
        serviceStatus: {
          "ui:widget": "select",
          "ui:placeholder": "-- Select Status --",
          "ui:errorMessages": {
            required: "Please select your current status"
          }
        },
        serviceStartDate: {
          "ui:widget": "date"
        },
        serviceEndDate: {
          "ui:widget": "date"
        }
      },
    },
    {
      title: "Benefits Information",
      schema: {
        type: "object",
        properties: {
          requestedBenefits: {
            type: "array",
            title: "Requested Benefits",
            items: {
              type: "string",
              enum: [
                "Health Care",
                "Education and Training",
                "Disability Compensation",
                "Home Loans",
                "Life Insurance",
                "Pension",
                "Employment Services",
              ],
            },
            uniqueItems: true,
          },
          priorityLevel: {
            type: "string",
            title: "Priority Level",
            enum: ["High", "Medium", "Low"],
            default: "Medium",
          },
          additionalInformation: {
            type: "string",
            title: "Additional Information",
          },
        },
        required: ["requestedBenefits"],
      },
      uiSchema: {
        "ui:classNames": "va-form-step",
        requestedBenefits: {
          "ui:widget": "checkboxes",
          "ui:options": {
            inline: false
          }
        },
        priorityLevel: {
          "ui:widget": "radio",
          "ui:options": {
            inline: true
          }
        },
        additionalInformation: {
          "ui:widget": "textarea",
          "ui:placeholder": "Please provide any additional information...",
          "ui:options": {
            rows: 5
          }
        },
      },
    },
  ];

  // Handle moving to the next step
  const handleNext = ({ formData: stepData }) => {
    setFormData((prevData) => ({ ...prevData, ...stepData }));
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  // Handle moving to the previous step
  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  // Handle form submission (on last step)
  const handleSubmit = ({ formData: stepData }) => {
    const finalFormData = { ...formData, ...stepData };
    setFormData(finalFormData);
    setIsSubmitted(true);
    // In a real application, you would submit this data to an API
    console.log("Form submitted with data:", finalFormData);
  };

  // Reset the form to start over
  const handleReset = () => {
    setStep(0);
    setFormData({});
    setIsSubmitted(false);
    window.scrollTo(0, 0);
  };

  return (
    <Layout title="Multi-step Form">
      <h1 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--3 vads-u-font-weight--bold">
        Multi-step Form
      </h1>

      <va-alert
        close-btn-aria-label="Close notification"
        status="info"
        visible
        class="vads-u-margin-bottom--4"
      >
        <h2
          id="multi-step-form-headline"
          slot="headline"
          className="vads-u-font-family--sans"
        >
          React JSON Schema Form Example
        </h2>
        <p className="vads-u-margin-y--0 vads-u-font-family--sans">
          This page demonstrates a multi-step form using{" "}
          <va-link
            href="https://github.com/department-of-veterans-affairs/react-jsonschema-form"
            text="react-jsonschema-form"
          />
          , which allows creating forms from JSON schemas.
        </p>
      </va-alert>

      {!isSubmitted ? (
        <div className="vads-u-margin-bottom--6">
          {/* Step indicator */}
          <div className="vads-u-display--flex vads-u-justify-content--space-between vads-u-margin-bottom--4">
            {steps.map((stepInfo, index) => (
              <div
                key={index}
                className={`vads-u-text-align--center vads-u-flex--1 vads-u-padding--1 ${index === step ? "vads-u-background-color--primary-alt-lightest vads-u-border--3px vads-u-border-color--primary" : ""}`}
              >
                <div className="vads-u-font-weight--bold vads-u-margin-bottom--1">
                  Step {index + 1}
                </div>
                <div>{stepInfo.title}</div>
              </div>
            ))}
          </div>

          {/* Current step form */}
          {step < 2 ? (
            <Form
              schema={steps[step].schema}
              uiSchema={steps[step].uiSchema}
              validator={validator}
              formData={formData}
              onSubmit={handleNext}
              className="rjsf-form vads-u-margin-bottom--4"
              widgets={widgets}
            >
              <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap vads-u-margin-top--4">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="usa-button-secondary usa-button vads-u-margin-right--2"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="submit"
                  className="usa-button"
                >
                  Next
                </button>
              </div>
            </Form>
          ) : (
            // Custom rendering for step 3 using VA components directly
            <form onSubmit={(e) => {
              e.preventDefault();
              // Manually collect form data from the VA components
              const checkedBenefits = [];
              document.querySelectorAll('va-checkbox').forEach(checkbox => {
                if (checkbox.checked) {
                  checkedBenefits.push(checkbox.value);
                }
              });
              
              const priorityLevel = document.querySelector('input[name="priorityLevel"]:checked')?.value || 'Medium';
              const additionalInfo = document.querySelector('textarea[name="additionalInformation"]')?.value || '';
              
              // Create final form data and submit
              const stepData = {
                requestedBenefits: checkedBenefits,
                priorityLevel,
                additionalInformation: additionalInfo
              };
              
              handleSubmit({ formData: stepData });
            }}>
              <div className="vads-u-margin-bottom--4">
                <h3>Requested Benefits</h3>
                <va-checkbox-group
                  label="Select the benefits you're interested in"
                  required
                >
                  {steps[2].schema.properties.requestedBenefits.items.enum.map(benefit => (
                    <va-checkbox
                      key={benefit}
                      label={benefit}
                      value={benefit}
                      checked={formData.requestedBenefits?.includes(benefit)}
                    />
                  ))}
                </va-checkbox-group>
              </div>
              
              <div className="vads-u-margin-bottom--4">
                <h3>Priority Level</h3>
                <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap">
                  {steps[2].schema.properties.priorityLevel.enum.map(level => (
                    <div key={level} className="vads-u-margin-right--4">
                      <input
                        type="radio"
                        id={`priority_${level}`}
                        name="priorityLevel"
                        value={level}
                        checked={formData.priorityLevel === level || (!formData.priorityLevel && level === 'Medium')}
                        className="usa-radio__input"
                      />
                      <label htmlFor={`priority_${level}`} className="usa-radio__label">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="vads-u-margin-bottom--4">
                <h3>Additional Information</h3>
                <textarea
                  name="additionalInformation"
                  className="usa-textarea"
                  placeholder="Please provide any additional information..."
                  rows={5}
                  value={formData.additionalInformation || ''}
                />
              </div>
              <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap vads-u-margin-top--4">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="usa-button-secondary usa-button vads-u-margin-right--2"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="usa-button"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <div className="vads-u-margin-bottom--6">
          <va-alert
            close-btn-aria-label="Close notification"
            status="success"
            visible
            class="vads-u-margin-bottom--4"
          >
            <h2
              id="submission-success-headline"
              slot="headline"
              className="vads-u-font-family--sans"
            >
              Form Submitted Successfully
            </h2>
            <p className="vads-u-margin-y--0 vads-u-font-family--sans">
              Thank you for your submission. In a real application, this data would be sent to a server.
            </p>
          </va-alert>

          <div className="vads-u-background-color--gray-lightest vads-u-padding--3 vads-u-margin-bottom--4">
            <h3 className="vads-u-font-family--sans vads-u-margin-top--0">
              Form Data Summary
            </h3>
            <pre className="vads-u-font-family--mono vads-u-background-color--white vads-u-padding--2">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>

          <va-button
            text="Start Over"
            onClick={handleReset}
            class="vads-u-width--auto"
          />
        </div>
      )}
    </Layout>
  );
};

export default MultiStepForm;
