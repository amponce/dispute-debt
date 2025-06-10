import React from "react";
import Layout from "../../components/layout";

/**
 * SINGLE COLUMN CONTENT PAGE TEMPLATE
 * 
 * Use this template for: Content pages, informational pages, articles
 * Layout: 8-column main content area with va-need-help at bottom
 * 
 * CRITICAL RULES:
 * - ALWAYS use Layout component (not LandingLayout)
 * - ALWAYS put va-need-help at bottom of content
 * - Use medium-screen:vads-grid-col-8 for main content
 * - Follow VA typography and spacing guidelines
 */
const SingleColumnTemplate = () => (
  <Layout>
    <div className="vads-grid-container vads-u-padding-y--3">
      <div className="vads-grid-row">
        <div className="vads-grid-col-12 medium-screen:vads-grid-col-8">
          {/* Page Title - REQUIRED H1 */}
          <h1 className="vads-u-font-family--serif vads-u-font-size--2xl vads-u-font-weight--bold vads-u-margin-bottom--2">
            Page Title Goes Here
          </h1>
          
          {/* Intro Text - Use va-introtext class */}
          <p className="va-introtext vads-u-font-family--sans vads-u-margin-bottom--3">
            Brief introductory paragraph that provides context and overview of the page content.
          </p>

          {/* Important Information Alert - Optional */}
          <va-alert status="info" visible className="vads-u-margin-bottom--3">
            <h2 slot="headline">Important Information</h2>
            <p>Key information that users need to know before proceeding.</p>
          </va-alert>

          {/* Section Heading */}
          <h2 className="vads-u-font-family--serif vads-u-font-size--xl vads-u-margin-top--4 vads-u-margin-bottom--2">
            Main Section Heading
          </h2>
          
          {/* Body Content */}
          <p className="vads-u-margin-bottom--3">
            Main content goes here. Use proper VA spacing utilities for consistent layout.
          </p>

          {/* Process List - For step-by-step content */}
          <va-process-list>
            <va-process-list-item header="Step 1">
              Description of the first step in the process.
            </va-process-list-item>
            <va-process-list-item header="Step 2">
              Description of the second step in the process.
            </va-process-list-item>
            <va-process-list-item header="Step 3">
              Description of the third step in the process.
            </va-process-list-item>
          </va-process-list>

          {/* Additional Content Sections as needed */}
          <h2 className="vads-u-font-family--serif vads-u-font-size--xl vads-u-margin-top--4 vads-u-margin-bottom--2">
            Additional Section
          </h2>
          
          <p className="vads-u-margin-bottom--3">
            Additional content and information.
          </p>

          {/* CRITICAL: va-need-help MUST be at bottom of single column content pages */}
          <va-need-help className="vads-u-margin-top--5" />
        </div>
      </div>
    </div>
  </Layout>
);

export default SingleColumnTemplate; 