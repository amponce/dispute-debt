import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { Header } from "../components/headerFsr";
import { VaBreadcrumbs } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import { Footer } from "../components/footer";
import { Help } from "../components/help";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="content">
        <div className="row">
          <div className="columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
            <VaBreadcrumbs
              breadcrumbList={[
                { href: "#one", label: "VA.gov home" },
                { href: "/manage-va-debt", label: "Manage your VA debt" },
                {
                  href: "/request-help",
                  label: "Request help with your VA debt",
                },
              ]}
              label="Breadcrumb"
            />
          </div>
        </div>
        <article className="row">
          <div className="usa-width-two-thirds medium-8 columns vads-u-padding-x--2 desktop:vads-u-padding-x--0">
            {children}
            <Help />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};
