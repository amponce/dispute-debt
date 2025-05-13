import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
/**
 * Standard VA header component
 * Implements VA header and navigation patterns
 */
const Header = () => {
  return (
    <>
    <header id="header">
      <a className="show-on-focus" href="#content">
        Skip to Content
      </a>
      <va-header-minimal
        header="VA Application Template"
        subheader=""
        disable-headings="true"
        role="banner"
        class="hydrated"
      />
    </header>
    </>
  );
};

export default Header;
