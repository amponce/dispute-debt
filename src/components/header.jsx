import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <a className="show-on-focus" href="#content">
        Skip to Content
      </a>

      <va-header-minimal
        header="Dispute VA overpayments"
        subheader=""
        disable-headings="true"
        role="banner"
        class="hydrated"
      />
    </header>
  );
};
