/**
 * VA Design System Widget Components for react-jsonschema-form
 * 
 * Custom widgets that integrate VA Design System components with react-jsonschema-form
 */

import React from 'react';

// Custom Checkbox Widget that uses VA Design System components
export const VACheckboxWidget = (props) => {
  const { id, options, value, required, disabled, onChange } = props;
  const { enumOptions } = options;
  
  // Handle checkbox change events
  const handleCheckboxChange = (event) => {
    const optionValue = event.target.value;
    const isChecked = event.target.checked;
    
    const newValue = Array.isArray(value) ? [...value] : [];
    if (isChecked) {
      // Add value if checked
      if (!newValue.includes(optionValue)) {
        newValue.push(optionValue);
      }
    } else {
      // Remove value if unchecked
      const index = newValue.indexOf(optionValue);
      if (index !== -1) {
        newValue.splice(index, 1);
      }
    }
    
    onChange(newValue);
  };
  
  return (
    <div className="vads-u-margin-bottom--3">
      <va-checkbox-group
        label=""
        required={required}
        error=""
      >
        {enumOptions.map((option, index) => {
          const checked = Array.isArray(value) && value.includes(option.value);
          
          return (
            <va-checkbox
              key={`${id}_${index}`}
              label={option.label}
              name={id}
              value={option.value}
              checked={checked}
              disabled={disabled}
              onVaChange={handleCheckboxChange}
            />
          );
        })}
      </va-checkbox-group>
    </div>
  );
};

// Custom Radio Widget that uses VA Design System components
export const VARadioWidget = (props) => {
  const { id, options, value, required, disabled, onChange } = props;
  const { enumOptions } = options;
  
  // Handle radio change
  const handleRadioChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="vads-u-margin-bottom--3">
      <va-radio
        label=""
        required={required}
        error=""
        onVaValueChange={handleRadioChange}
      >
        {enumOptions.map((option, index) => (
          <va-radio-option
            key={`${id}_${index}`}
            label={option.label}
            name={id}
            value={option.value}
            checked={value === option.value}
            disabled={disabled}
          />
        ))}
      </va-radio>
    </div>
  );
};

// Custom Textarea Widget that uses VA Design System components
export const VATextareaWidget = (props) => {
  const { id, value, required, disabled, onChange, placeholder } = props;
  
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="vads-u-margin-bottom--3">
      <va-textarea
        label=""
        name={id}
        required={required}
        disabled={disabled}
        value={value || ''}
        placeholder={placeholder}
        onInput={handleChange}
        error=""
      />
    </div>
  );
};

// Custom Text Input Widget that uses VA Design System components
export const VATextInputWidget = (props) => {
  const { id, value, required, disabled, onChange, placeholder, type = 'text' } = props;
  
  const _onChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="vads-u-margin-bottom--3">
      <va-text-input
        label=""
        name={id}
        type={type}
        required={required}
        disabled={disabled}
        onInput={_onChange}
        value={value || ''}
        placeholder={placeholder}
      />
    </div>
  );
};

// Custom Select Widget that uses VA Design System components
export const VASelectWidget = (props) => {
  const { id, options, value, required, disabled, onChange, placeholder } = props;
  const { enumOptions } = options;
  
  // Use a regular select element instead of va-select for better RJSF integration
  return (
    <div className="vads-u-margin-bottom--3">
      <select
        id={id}
        name={id}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        value={value || ''}
        className="usa-select"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {enumOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Export all widgets as a collection
export const widgets = {
  CheckboxWidget: VACheckboxWidget,
  RadioWidget: VARadioWidget,
  TextareaWidget: VATextareaWidget,
  TextWidget: VATextInputWidget,
  SelectWidget: VASelectWidget
};
