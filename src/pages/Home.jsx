import React from "react";
import Layout from "../components/layout";
import { Link } from "react-router-dom";

/**
 * Home page template for VA applications
 * Implements the two-column content on left layout pattern from VA Design System
 */
const HomePage = () => {
  return (
    <Layout title="VA Application Template">
      <div className="vads-grid-container desktop-lg:vads-u-padding-x--0">
        <va-alert
          close-btn-aria-label="Close notification"
          status="info"
          visible
          class="vads-u-margin-bottom--4"
        >
          <h2
            id="welcome-alert-headline"
            slot="headline"
            className="vads-u-font-family--sans"
          >
            Welcome to the VA Application Template
          </h2>
          <p className="vads-u-margin-y--0 vads-u-font-family--sans">
            This template provides a starting point for building VA applications
            using the official VA Design System and Web Components.{' '}
            <va-link
              href="/components"
              text="View component examples"
            />
            {' '}to see what's available.
          </p>
        </va-alert>

        {/* Two-column layout using VA Design System grid patterns */}
        <div className="vads-grid-row vads-u-margin-x--neg2p5 vads-u-margin-bottom--6">
          {/* Main content column - 8 columns on tablet and above */}
          <div className="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-8">
            <h1 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--3 vads-u-font-weight--bold">
              VA Application Template
            </h1>
            <p className="va-introtext vads-u-font-family--sans vads-u-margin-bottom--4 vads-u-font-size--lg vads-u-line-height--3 vads-u-measure--5">
              This template includes examples of common patterns for VA applications,
              including form patterns, component usage, and accessibility best practices.
            </p>

            <h2 className="vads-u-font-family--serif vads-u-margin-top--5 vads-u-margin-bottom--3 vads-u-font-size--h3">Getting Started</h2>
            <p className="vads-u-font-family--sans vads-u-line-height--5 vads-u-measure--4">
              Find examples of VA components and patterns to help you build your application.
            </p>

            <h3 className="vads-u-font-family--serif vads-u-margin-bottom--2 vads-u-margin-top--4">Included Examples:</h3>
            <ul className="vads-u-margin-top--0 vads-u-font-family--sans">
              <li className="vads-u-margin-bottom--2">
                <Link to="/example-form">Example Form</Link> - A sample form using VA form components
              </li>
              <li className="vads-u-margin-bottom--2">
                <Link to="/components">Components</Link> - A showcase of VA components
              </li>
              <li className="vads-u-margin-bottom--2">
                <Link to="/about">About</Link> - Information about this template
              </li>
              <li className="vads-u-margin-bottom--2">
                <Link to="/landing-template">Landing Page Template</Link> - Full-width landing page example
              </li>
            </ul>
          </div>

          {/* Sidebar/promotional column - 4 columns on tablet and above */}
          <div className="vads-grid-col-12 vads-u-padding-x--2p5 tablet:vads-grid-col-4">
            <va-card class="vads-u-margin-top--2">
              <h2 slot="headline" className="vads-u-font-family--serif">Resources</h2>
              <div>
                <ul className="vads-u-padding-left--2 vads-u-margin-y--0 vads-u-font-family--sans">
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
                    <a href="https://design.va.gov/patterns/" target="_blank" rel="noopener noreferrer">
                      Design Patterns
                    </a>
                  </li>
                </ul>
              </div>
            </va-card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage; 