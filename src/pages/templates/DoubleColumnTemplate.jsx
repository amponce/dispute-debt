import React from "react";
import Layout from "../../components/layout";

/**
 * DOUBLE COLUMN LAYOUT TEMPLATE
 * 
 * Use this template for: Content pages with sidebar, resource pages with actions
 * Layout: 8-column main content + 4-column sidebar
 * 
 * CRITICAL RULES:
 * - Main content: medium-screen:vads-grid-col-8 with vads-u-padding-right--3
 * - Sidebar: medium-screen:vads-grid-col-4 
 * - va-need-help goes in SIDEBAR, NOT main content
 * - Use va-card for sidebar content blocks
 */
const DoubleColumnTemplate = () => (
  <Layout>
    <div className="vads-grid-container vads-u-padding-y--3">
      <div className="vads-grid-row">
        {/* Main Content Column - 8/12 columns */}
        <div className="vads-grid-col-12 medium-screen:vads-grid-col-8 vads-u-padding-right--3">
          {/* Page Title - REQUIRED H1 */}
          <h1 className="vads-u-font-family--serif vads-u-font-size--2xl vads-u-font-weight--bold vads-u-margin-bottom--2">
            Main Content Title
          </h1>
          
          {/* Intro Text - Use va-introtext class */}
          <p className="va-introtext vads-u-font-family--sans vads-u-margin-bottom--3">
            Primary content introduction and overview explaining the main topic.
          </p>

          {/* Main Content Section */}
          <h2 className="vads-u-font-family--serif vads-u-font-size--xl vads-u-margin-top--4 vads-u-margin-bottom--2">
            Primary Content Section
          </h2>
          
          <p className="vads-u-margin-bottom--3">
            Detailed content that forms the main body of the page. This is the primary information users came to find.
          </p>

          {/* Important Notice - Optional */}
          <va-alert status="warning" visible className="vads-u-margin-bottom--3">
            <h3 slot="headline">Important Notice</h3>
            <p>Critical information that requires user attention goes here.</p>
          </va-alert>

          {/* Additional Content Section */}
          <h2 className="vads-u-font-family--serif vads-u-font-size--xl vads-u-margin-top--4 vads-u-margin-bottom--2">
            Additional Information
          </h2>
          
          <p className="vads-u-margin-bottom--3">
            More detailed content, explanations, or supporting information.
          </p>

          {/* Process List - Optional */}
          <va-process-list>
            <va-process-list-item header="Step 1">
              First step in the process or procedure.
            </va-process-list-item>
            <va-process-list-item header="Step 2">
              Second step in the process or procedure.
            </va-process-list-item>
          </va-process-list>
        </div>

        {/* Sidebar Column - 4/12 columns */}
        <div className="vads-grid-col-12 medium-screen:vads-grid-col-4">
          {/* Quick Actions Card */}
          <va-card className="vads-u-margin-bottom--3">
            <h3 slot="headline">Quick Actions</h3>
            <ul className="vads-u-margin-top--2">
              <li><a href="#action1">Primary Action</a></li>
              <li><a href="#action2">Secondary Action</a></li>
              <li><a href="#action3">Additional Action</a></li>
            </ul>
          </va-card>

          {/* Related Resources Card */}
          <va-card className="vads-u-margin-bottom--3">
            <h3 slot="headline">Related Resources</h3>
            <ul className="vads-u-margin-top--2">
              <li><a href="#resource1">Important Resource</a></li>
              <li><a href="#resource2">Additional Information</a></li>
              <li><a href="#resource3">External Link</a></li>
            </ul>
          </va-card>

          {/* Contact Information Card - Optional */}
          <va-card className="vads-u-margin-bottom--3">
            <h3 slot="headline">Contact Information</h3>
            <p className="vads-u-margin-top--2">
              Specific contact details or phone numbers related to this content.
            </p>
          </va-card>

          {/* CRITICAL: va-need-help goes in SIDEBAR, NOT main content */}
          <va-need-help />
        </div>
      </div>
    </div>
  </Layout>
);

export default DoubleColumnTemplate; 