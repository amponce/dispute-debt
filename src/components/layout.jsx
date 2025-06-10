/**
 * VA Application Template - Layout Component
 * 
 * This is the main layout component for VA applications.
 * It provides a consistent page structure with header, main content area, and footer.
 * The implementation follows VA Design System patterns with a custom max-width.
 * 
 * This component serves as a template that can be used for various page layouts
 * including landing pages, informational pages, and multi-column layouts.
 * 
 * @file layout.jsx
 * @version 1.0.0
 */

import React from "react";
// CSS imports are handled in main.jsx via va-css.css
import Header from "./header";
import Footer from "./footer";
import { Help } from "./help";
import { 
  VaBreadcrumbs
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";

/**
 * Main layout component for VA applications
 * Provides consistent page structure with header, main content area, and footer
 * Implementation follows VA Design System patterns with support for both standard and full-width layouts
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered in the layout
 * @param {string} [props.title="VA Application Template"] - Page title (deprecated, use H1 in page content)
 * @param {boolean} [props.fullWidth=false] - Whether to use full-width layout without content width constraints
 * @returns {React.ReactElement} The Layout component
 */
const Layout = ({ children, title = "VA Application Template", fullWidth = false }) => {
  // Build breadcrumb items based on the title
  const breadcrumbItems = [
    { href: '/', label: 'Home' }
  ];
  
  // Add current page to breadcrumbs if not on home page
  if (title !== "VA Application Template") {
    breadcrumbItems.push({ 
      href: '#current', 
      label: title 
    });
  }

  return (
    <div className="vads-u-display--flex vads-u-flex-direction--column vads-u-min-height--viewport">
      {/* Accessibility: Skip navigation */}
      <va-skip-nav anchor="#main-content"></va-skip-nav>
      
      {/* Standard VA header */}
      <Header />
      
      {/* Main content area with proper semantic structure */}
      <main id="main-content" className="vads-u-flex--1">
        {!fullWidth && (
          <div className="vads-grid-container desktop-lg:vads-u-padding-x--0">
            {/* Breadcrumbs navigation - only shown in standard layout */}
            <div className="vads-grid-row vads-u-margin-x--neg2p5 vads-u-margin-bottom--2">
              <div className="vads-grid-col-12 vads-u-padding-x--2p5">
                <VaBreadcrumbs
                  breadcrumbList={breadcrumbItems}
                  label="Breadcrumb"
                />
              </div>
            </div>
            
            {/* Container for main content and help component */}
            <div className="vads-grid-row vads-u-margin-x--neg2p5">
              <div className="vads-grid-col-12 vads-u-padding-x--2p5">
                {/* Main content wrapper with consistent vertical spacing */}
                <div>
                  {children}
                </div>
                
                {/* Help component with consistent spacing following VA 8-point grid system */}
                <div className="vads-u-margin-top--4 vads-u-margin-bottom--4">
                  <Help />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full-width content - no column constraints */}
        {fullWidth && (
          <>
            {children}
          </>
        )}
      </main>
      
      {/* Standard VA footer */}
      <Footer />
    </div>
  );
};

export default Layout;
