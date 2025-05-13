import React from "react";
import Layout from "../components/layout";

/**
 * About page explaining the purpose of the template
 */
const AboutPage = () => {
  return (
    <Layout title="About this Template">
      <va-breadcrumbs uswds>
        <va-breadcrumb href="/">Home</va-breadcrumb>
        <va-breadcrumb current>About</va-breadcrumb>
      </va-breadcrumbs>
      
      <div className="vads-l-row">
        <div className="vads-l-col--12 medium-screen:vads-l-col--8">
          <section className="vads-u-margin-bottom--4">
            <h2>Purpose</h2>
            <p>
              This template provides developers with a starting point for building web applications 
              using the Department of Veterans Affairs (VA) Design System. It demonstrates the 
              implementation of VA web components and design patterns for creating accessible, 
              user-friendly applications for Veterans.
            </p>
          </section>
          
          <section className="vads-u-margin-bottom--4">
            <h2>Features</h2>
            <ul className="vads-u-margin-bottom--2">
              <li>Integration with the VA Design System</li>
              <li>Ready-to-use VA web components</li>
              <li>Form validation and error handling</li>
              <li>Responsive layouts</li>
              <li>Accessibility-first implementation</li>
              <li>Example page templates</li>
            </ul>
          </section>
          
          <section className="vads-u-margin-bottom--4">
            <h2>Accessibility</h2>
            <p>
              This template follows Section 508 compliance guidelines and Web Content Accessibility 
              Guidelines (WCAG) 2.1 AA standards. Key accessibility features include:
            </p>
            <ul>
              <li>Proper heading hierarchy</li>
              <li>Form labels and error handling</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Sufficient color contrast</li>
              <li>Focus management</li>
            </ul>
          </section>
          
          <section className="vads-u-margin-bottom--4">
            <h2>Getting Started</h2>
            <p>
              To use this template for your own project:
            </p>
            <ol>
              <li>Clone the repository</li>
              <li>Install dependencies with <code>npm install</code></li>
              <li>Start the development server with <code>npm start</code></li>
              <li>Modify the components and pages for your specific needs</li>
            </ol>
          </section>
        </div>
        
        <div className="vads-l-col--12 medium-screen:vads-l-col--4">
          <va-card class="vads-u-margin-bottom--4">
            <h2 slot="headline">Resources</h2>
            <ul>
              <li>
                <a href="https://design.va.gov/" target="_blank" rel="noopener noreferrer">
                  VA Design System
                </a>
              </li>
              <li>
                <a href="https://department-of-veterans-affairs.github.io/component-library/" target="_blank" rel="noopener noreferrer">
                  VA Web Components
                </a>
              </li>
              <li>
                <a href="https://design.va.gov/patterns/forms/" target="_blank" rel="noopener noreferrer">
                  VA Form Patterns
                </a>
              </li>
              <li>
                <a href="https://design.va.gov/documentation/designers#accessibility" target="_blank" rel="noopener noreferrer">
                  VA Accessibility Guidelines
                </a>
              </li>
            </ul>
          </va-card>
          
          <va-card background>
            <h3 slot="headline">Technical Stack</h3>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>VA Design System</li>
              <li>VA Web Components</li>
            </ul>
          </va-card>
        </div>
      </div>
      
      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-justify-content--center vads-u-margin-top--6">
        <va-button
          text="Return to Home"
          secondary
          href="/"
        />
      </div>
    </Layout>
  );
};

export default AboutPage; 