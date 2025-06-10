import React, { useState } from "react";
import Layout from "../../components/layout";

/**
 * FORM FLOW LAYOUT TEMPLATE
 * 
 * Use this template for: Multi-step forms, applications, wizards
 * Layout: 8-column form area with progress indicator and va-need-help at bottom
 * 
 * CRITICAL RULES:
 * - Use correct React event handlers for VA components
 * - va-text-input: onInput={(e) => setValue(e.target.value)}
 * - va-select: onVaSelect={(e) => setValue(e.detail.value)}
 * - va-checkbox: onVaChange={(e) => setValue(e.detail.checked)}
 * - NO uswds prop on va-button
 * - va-need-help at bottom of form
 * - Follow VA typography and 8pt spacing system
 */
const FormFlowTemplate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    benefitType: '',
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <div className="vads-grid-container vads-u-padding-y--3">
        <div className="vads-grid-row">
          <div className="vads-grid-col-12 medium-screen:vads-grid-col-8">
            {/* Page Title - H1 with correct VA typography */}
            <h1 className="vads-u-font-family--serif vads-u-font-size--2xl vads-u-font-weight--bold vads-u-margin-bottom--2">
              Application Form Title
            </h1>

            {/* Progress Bar - Required for multi-step forms */}
            <va-segmented-progress-bar 
              current={1} 
              total={3} 
              labels="Personal Info,Review,Submit"
              className="vads-u-margin-bottom--4"
            />

            {/* Before You Start Alert - Required pattern */}
            <va-alert status="info" visible className="vads-u-margin-bottom--4">
              <h2 slot="headline">Before you start</h2>
              <p>Gather all required documents and information before beginning this application.</p>
            </va-alert>

            <form onSubmit={handleSubmit}>
              {/* Text Input - CRITICAL: Use onInput for React */}
              <va-text-input
                label="Full Name"
                name="fullName"
                required
                value={formData.fullName}
                onInput={(e) => setFormData({...formData, fullName: e.target.value})}
                className="vads-u-margin-bottom--3"
              />

              {/* Select Dropdown - CRITICAL: Use onVaSelect for React */}
              <va-select
                label="Benefit Type"
                name="benefitType"
                required
                value={formData.benefitType}
                onVaSelect={(e) => setFormData({...formData, benefitType: e.detail.value})}
                className="vads-u-margin-bottom--3"
              >
                <option value="">Select a benefit type</option>
                <option value="health">Health Benefits</option>
                <option value="disability">Disability Benefits</option>
                <option value="education">Education Benefits</option>
                <option value="home-loan">Home Loan Benefits</option>
              </va-select>

              {/* Additional Form Fields as needed */}
              <va-textarea
                label="Additional Information"
                name="additionalInfo"
                hint="Provide any additional details that may help us process your application"
                className="vads-u-margin-bottom--3"
              />

              {/* Checkbox - CRITICAL: Use onVaChange for React */}
              <va-checkbox
                label="I agree to the terms and conditions"
                name="agreeToTerms"
                required
                checked={formData.agreeToTerms}
                onVaChange={(e) => setFormData({...formData, agreeToTerms: e.detail.checked})}
                className="vads-u-margin-bottom--4"
              />

              {/* Form Action Buttons - CRITICAL: NO uswds prop */}
              <div className="vads-u-margin-bottom--4">
                <va-button text="Continue" type="submit" />
                <va-button text="Save and Exit" secondary className="vads-u-margin-left--2" />
              </div>
            </form>

            {/* CRITICAL: va-need-help at bottom of forms */}
            <va-need-help className="vads-u-margin-top--5" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormFlowTemplate; 