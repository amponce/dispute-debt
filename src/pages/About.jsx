import React from "react";
import Layout from "../components/layout";

/**
 * About page explaining the purpose of the template
 * Uses the two-column layout pattern from the VA Design System
 */
const AboutPage = () => {
  return (
    <Layout title="About">
      <h1 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--3 vads-u-font-weight--bold">
        About this Template
      </h1>
      
      <div className="vads-grid-container desktop-lg:vads-u-padding-x--0">
        <div className="vads-grid-row vads-u-margin-x--neg2p5">
          {/* Left column - Main content */}
          <div className="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-8">
            <section className="vads-u-margin-bottom--4">
              <h2 className="vads-u-font-family--serif vads-u-font-size--h3 vads-u-margin-top--4 vads-u-margin-bottom--3">Purpose</h2>
              <p>
                This template provides developers with a starting point for building web applications 
                using the Department of Veterans Affairs (VA) Design System. It demonstrates the 
                implementation of VA web components and design patterns for creating accessible, 
                user-friendly applications for Veterans.
              </p>
            </section>
            
            <section className="vads-u-margin-bottom--4">
              <h2 className="vads-u-font-family--serif vads-u-font-size--h3 vads-u-margin-top--4 vads-u-margin-bottom--3">Features</h2>
              <ul className="vads-u-margin-bottom--2 vads-u-font-family--sans">
                <li>Integration with the VA Design System</li>
                <li>Ready-to-use VA web components</li>
                <li>Form validation and error handling</li>
                <li>Responsive layouts</li>
                <li>Accessibility-first implementation</li>
                <li>Example page templates</li>
              </ul>
            </section>
            
            <section className="vads-u-margin-bottom--4">
              <h2 className="vads-u-font-family--serif vads-u-font-size--h3 vads-u-margin-top--4 vads-u-margin-bottom--3">Accessibility</h2>
              <p>
                This template follows Section 508 compliance guidelines and Web Content Accessibility 
                Guidelines (WCAG) 2.1 AA standards. Key accessibility features include:
              </p>
              <ul className="vads-u-font-family--sans">
                <li>Proper heading hierarchy</li>
                <li>Form labels and error handling</li>
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>Sufficient color contrast</li>
                <li>Focus management</li>
              </ul>
            </section>
            
            <section className="vads-u-margin-bottom--4">
              <h2 className="vads-u-font-family--serif vads-u-font-size--h3 vads-u-margin-top--4 vads-u-margin-bottom--3">Getting Started</h2>
              <p>
                To use this template for your own project:
              </p>
              <ol className="vads-u-font-family--sans">
                <li className="vads-u-margin-bottom--1">Clone the repository</li>
                <li className="vads-u-margin-bottom--1">Install dependencies with <code>npm install</code></li>
                <li className="vads-u-margin-bottom--1">Start the development server with <code>npm run dev</code></li>
                <li>Modify the components and pages for your specific needs</li>
              </ol>
            </section>
          </div>
          
          {/* Right column - Sidebar */}
          <div className="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-4">
            <va-card class="vads-u-margin-bottom--4">
              <h2 slot="headline" className="vads-u-font-family--serif">Resources</h2>
              <ul className="vads-u-font-family--sans">
                <li className="vads-u-margin-bottom--2">
                  <a href="https://design.va.gov/" target="_blank" rel="noopener noreferrer">
                    VA Design System
                  </a>
                </li>
                <li className="vads-u-margin-bottom--2">
                  <a href="https://department-of-veterans-affairs.github.io/component-library/" target="_blank" rel="noopener noreferrer">
                    VA Web Components
                  </a>
                </li>
                <li className="vads-u-margin-bottom--2">
                  <a href="https://design.va.gov/patterns/forms/" target="_blank" rel="noopener noreferrer">
                    VA Form Patterns
                  </a>
                </li>
                <li className="vads-u-margin-bottom--2">
                  <a href="https://design.va.gov/documentation/designers#accessibility" target="_blank" rel="noopener noreferrer">
                    VA Accessibility Guidelines
                  </a>
                </li>
              </ul>
            </va-card>
            
            <va-card background>
              <h3 slot="headline" className="vads-u-font-family--serif">Technical Stack</h3>
              <ul className="vads-u-font-family--sans">
                <li className="vads-u-margin-bottom--1">React</li>
                <li className="vads-u-margin-bottom--1">React Router</li>
                <li className="vads-u-margin-bottom--1">VA Design System</li>
                <li>VA Web Components</li>
              </ul>
            </va-card>
          </div>
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