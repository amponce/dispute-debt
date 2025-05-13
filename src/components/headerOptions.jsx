import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <a className="show-on-focus" href="#content">
        Skip to Content
      </a>
      <va-header-minimal
        header="Options To Request Help With VA Debt"
        subheader=""
        disable-headings="true"
        role="banner"
        class="hydrated"
      />
    </header>
  );
};
