import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <a className="show-on-focus" href="#content">
        Skip to Content
      </a>
      <va-header-minimal
        header="Request help with VA debt for overpayments and copay bills"
        subheader="Financial Status Report (VA Form 5655)"
        disable-headings
      />
    </header>
  );
};
