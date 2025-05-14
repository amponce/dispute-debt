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
import "@department-of-veterans-affairs/component-library/dist/main.css";
import Header from "./header";
import Footer from "./footer";
import { Help } from "./help";
import { 
  VaBreadcrumbs
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";

/**
 * Main layout component for VA applications
 * Provides consistent page structure with header, main content area, and footer
 * Implementation follows VA Design System patterns with custom max-width
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be rendered in the layout
 * @param {string} [props.title="VA Application Template"] - Page title
 * @returns {React.ReactElement} The Layout component
 */
const Layout = ({ children, title = "VA Application Template" }) => {
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

  // Custom max-width style for the content
  // This follows VA Design System guidelines while allowing for customization
  const contentStyle = {
    maxWidth: "1201px",
    margin: "0 auto",
    width: "100%"
  };

  return (
    <div className="vads-u-display--flex vads-u-flex-direction--column vads-u-min-height--viewport">
      {/* Accessibility: Skip navigation */}
      <va-skip-nav anchor="#main-content"></va-skip-nav>
      
      {/* Standard VA header */}
      <Header />
      
      {/* Main content area */}
      <main id="main-content">
        <div style={contentStyle}>
          {/* Breadcrumbs navigation */}
          <div className="row">
            <div className="columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
              <VaBreadcrumbs
                breadcrumbList={breadcrumbItems}
                label="Breadcrumb"
              />
            </div>
          </div>
          
          {/* Page content */}
          <article className="row">
            {/* 
              Default to a two-thirds column layout.
              This can be customized for different page layouts
              (e.g., full width, two-column, etc.)
            */}
            <div className="usa-width-two-thirds medium-8 columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
              <h1 className="vads-u-font-family--serif vads-u-font-size--h1 vads-u-margin-y--2">
                {title}
              </h1>
              
              {/* Render the child components */}
              {children}
              
              {/* Help component for standard VA help information */}
              <Help />
            </div>
            
            {/* 
              For two-column layouts, uncomment this section:
              <div className="usa-width-one-third medium-4 columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
                {/* Sidebar content */}
            {/* </div> */}
          </article>
        </div>
      </main>
      
      {/* Standard VA footer */}
      <Footer />
    </div>
  );
};

export default Layout;
