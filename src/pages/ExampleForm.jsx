import React, { useState } from "react";
import Layout from "../components/layout";
import { useFormError } from "../components/useFormError";

/**
 * Example form page showcasing VA form components and validation patterns
 */
const ExampleFormPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    feedback: "",
    services: []
  });
  
  // Use form error hooks for validation
  const [nameErrorRef, showNameError, setShowNameError, clearNameError] = useFormError();
  const [emailErrorRef, showEmailError, setShowEmailError, clearEmailError] = useFormError();
  const [servicesErrorRef, showServicesError, setShowServicesError, clearServicesError] = useFormError();
  
  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate name
    if (!formData.fullName.trim()) {
      setShowNameError(true);
      isValid = false;
    }
    
    // Validate email
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setShowEmailError(true);
      isValid = false;
    }
    
    // Validate services
    if (formData.services.length === 0) {
      setShowServicesError(true);
      isValid = false;
    }
    
    // If valid, show success message
    if (isValid) {
      alert("Form submitted successfully!");
      // In a real app, you would submit to an API here
    }
  };
  
  // Input change handler
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Clear errors when user starts typing
    if (field === 'fullName' && showNameError) {
      clearNameError();
    } else if (field === 'email' && showEmailError) {
      clearEmailError();
    }
  };
  
  // Checkbox change handler
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    let updatedServices = [...formData.services];
    
    if (isChecked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter(item => item !== value);
    }
    
    setFormData({
      ...formData,
      services: updatedServices
    });
    
    if (showServicesError) {
      clearServicesError();
    }
  };
  
  return (
    <Layout title="Example Form">
      <va-breadcrumbs uswds>
        <va-breadcrumb href="/">Home</va-breadcrumb>
        <va-breadcrumb current>Example Form</va-breadcrumb>
      </va-breadcrumbs>
      
      <va-alert
        status="info"
        headline="Form Example"
        visible
        class="vads-u-margin-bottom--4"
      >
        <p>
          This page demonstrates a simple form using VA components with error handling and validation.
        </p>
      </va-alert>
      
      <form onSubmit={handleSubmit} className="vads-u-margin-bottom--6">
        {/* Name field with error handling */}
        <div ref={nameErrorRef} className="vads-u-margin-bottom--3">
          <va-text-input
            label="Full Name"
            name="fullName"
            required
            error={showNameError ? "Please enter your full name" : ""}
            onInput={(e) => handleInputChange('fullName', e.target.value)}
            value={formData.fullName}
          />
        </div>
        
        {/* Email field with error handling */}
        <div ref={emailErrorRef} className="vads-u-margin-bottom--3">
          <va-text-input
            label="Email Address"
            name="email"
            type="email"
            required
            error={showEmailError ? "Please enter a valid email address" : ""}
            onInput={(e) => handleInputChange('email', e.target.value)}
            value={formData.email}
          />
        </div>
        
        {/* Phone field (optional) */}
        <div className="vads-u-margin-bottom--3">
          <va-text-input
            label="Phone Number (Optional)"
            name="phone"
            type="tel"
            onInput={(e) => handleInputChange('phone', e.target.value)}
            value={formData.phone}
          />
        </div>
        
        {/* Services checkboxes with error handling */}
        <div ref={servicesErrorRef} className="vads-u-margin-bottom--3">
          <va-checkbox-group
            label="Which VA services are you interested in?"
            required
            error={showServicesError ? "Please select at least one service" : ""}
          >
            <va-checkbox
              label="Health Care"
              value="health"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('health')}
            />
            <va-checkbox
              label="Education and Training"
              value="education"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('education')}
            />
            <va-checkbox
              label="Disability"
              value="disability"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('disability')}
            />
            <va-checkbox
              label="Housing Assistance"
              value="housing"
              onInput={handleCheckboxChange}
              checked={formData.services.includes('housing')}
            />
          </va-checkbox-group>
        </div>
        
        {/* Feedback textarea */}
        <div className="vads-u-margin-bottom--4">
          <va-textarea
            label="Additional Feedback (Optional)"
            name="feedback"
            onInput={(e) => handleInputChange('feedback', e.target.value)}
            value={formData.feedback}
          />
        </div>
        
        {/* Form buttons */}
        <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap">
          <va-button
            text="Submit Form"
            submit
            class="vads-u-width--auto vads-u-margin-right--2"
          />
          <va-button
            text="Cancel"
            secondary
            class="vads-u-width--auto"
            onClick={() => window.location.href = '/'}
          />
        </div>
      </form>
    </Layout>
  );
};

export default ExampleFormPage; 