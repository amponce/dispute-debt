import React from "react";
import Layout from "../components/layout";

/**
 * Components showcase page
 * Displays examples of VA components for reference
 */
const ComponentsPage = () => {
  return (
    <Layout title="VA Components">
      <va-breadcrumbs uswds>
        <va-breadcrumb href="/">Home</va-breadcrumb>
        <va-breadcrumb current>Components</va-breadcrumb>
      </va-breadcrumbs>
      
      <p className="vads-u-font-size--lg vads-u-margin-bottom--4">
        This page demonstrates various VA components from the VA Design System.
      </p>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Alerts</h2>
        <div className="vads-u-margin-bottom--2">
          <va-alert status="info" visible>
            <p>This is an informational alert.</p>
          </va-alert>
        </div>
        <div className="vads-u-margin-bottom--2">
          <va-alert status="success" visible>
            <p>This is a success alert.</p>
          </va-alert>
        </div>
        <div className="vads-u-margin-bottom--2">
          <va-alert status="warning" visible>
            <p>This is a warning alert.</p>
          </va-alert>
        </div>
        <div className="vads-u-margin-bottom--2">
          <va-alert status="error" visible>
            <p>This is an error alert.</p>
          </va-alert>
        </div>
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Buttons</h2>
        <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap">
          <va-button text="Primary Button" class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
          <va-button text="Secondary Button" secondary class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
          <va-button text="Disabled Button" disabled class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
          <va-button text="Button with Icon" icon="arrow-right" class="vads-u-margin-bottom--2" />
        </div>
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Form Controls</h2>
        
        <h3>Text Input</h3>
        <div className="vads-u-margin-bottom--4">
          <va-text-input label="Standard Text Input" name="text-example" />
        </div>
        
        <h3>Select</h3>
        <div className="vads-u-margin-bottom--4">
          <va-select label="Select Dropdown" name="select-example">
            <option value="">-- Select an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </va-select>
        </div>
        
        <h3>Checkbox Group</h3>
        <div className="vads-u-margin-bottom--4">
          <va-checkbox-group label="Checkbox Group">
            <va-checkbox label="Option 1" name="checkbox-example" value="option1" />
            <va-checkbox label="Option 2" name="checkbox-example" value="option2" />
            <va-checkbox label="Option 3" name="checkbox-example" value="option3" />
          </va-checkbox-group>
        </div>
        
        <h3>Radio Group</h3>
        <div className="vads-u-margin-bottom--4">
          <va-radio-group label="Radio Group">
            <va-radio label="Option 1" name="radio-example" value="option1" />
            <va-radio label="Option 2" name="radio-example" value="option2" />
            <va-radio label="Option 3" name="radio-example" value="option3" />
          </va-radio-group>
        </div>
        
        <h3>Textarea</h3>
        <div className="vads-u-margin-bottom--4">
          <va-textarea label="Textarea" name="textarea-example" />
        </div>
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Cards</h2>
        <div className="vads-l-row">
          <div className="vads-l-col--12 medium-screen:vads-l-col--4 vads-u-padding--2">
            <va-card>
              <h3 slot="headline">Card Title</h3>
              <p>This is a basic card component that can be used to display content in a card format.</p>
              <va-button slot="actions" text="Card Action" secondary />
            </va-card>
          </div>
          <div className="vads-l-col--12 medium-screen:vads-l-col--4 vads-u-padding--2">
            <va-card background>
              <h3 slot="headline">Card with Background</h3>
              <p>This card has a background color applied.</p>
              <va-button slot="actions" text="Card Action" secondary />
            </va-card>
          </div>
          <div className="vads-l-col--12 medium-screen:vads-l-col--4 vads-u-padding--2">
            <va-card>
              <h3 slot="headline">Interactive Card</h3>
              <p>Cards can contain various interactive elements.</p>
              <va-button slot="actions" text="Primary Action" />
            </va-card>
          </div>
        </div>
      </section>
      
      <section className="vads-u-margin-bottom--6">
        <h2>Accordion</h2>
        <va-accordion>
          <va-accordion-item header="Accordion Item 1">
            <p>This is the content for accordion item 1.</p>
            <p>Accordions are useful for organizing content into collapsible sections.</p>
          </va-accordion-item>
          <va-accordion-item header="Accordion Item 2">
            <p>This is the content for accordion item 2.</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </va-accordion-item>
          <va-accordion-item header="Accordion Item 3">
            <p>This is the content for accordion item 3.</p>
            <va-button text="Button inside accordion" secondary />
          </va-accordion-item>
        </va-accordion>
      </section>
      
      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-justify-content--center">
        <va-button
          text="Return to Home"
          secondary
          href="/"
        />
      </div>
    </Layout>
  );
};

export default ComponentsPage; 