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
 * Implementation follows VA Design System patterns
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

  return (
    <div className="vads-u-display--flex vads-u-flex-direction--column vads-u-min-height--viewport">
      <va-skip-nav anchor="#main-content"></va-skip-nav>
      <Header />
      
      <main id="main-content">
        <div className="row">
          <div className="columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
            <VaBreadcrumbs
              breadcrumbList={breadcrumbItems}
              label="Breadcrumb"
            />
          </div>
        </div>
        <article className="row">
          <div className="usa-width-two-thirds medium-8 columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
            <h1 className="vads-u-font-family--serif vads-u-font-size--h1 vads-u-margin-y--2">
              {title}
            </h1>
            {children}
            <Help />
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
