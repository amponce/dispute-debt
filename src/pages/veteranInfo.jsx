import React from "react";
import { VaButtonPair } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

export default function VeteranInfo() {
  document.title = "Your personal information | Veterans Affairs";
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/contact-information");
  };
  const goToPreviousPage = () => {
    navigate("/");
  };

  return (
    <Layout>
      <va-segmented-progress-bar
        current={1}
        heading-text="Veteran Information"
        total={4}
        use-div="true"
      />
      <h1 className="vads-u-font-size--h1">Your personal information</h1>
      <p>This is the personal information we have on file for you.</p>
      <va-card background>
        <h2 className="vads-u-font-size--h4 vads-u-margin-y--0">
          Hector Smith
        </h2>
        <p className="vads-u-margin-bottom--0 vads-u-margin-top--1">
          <strong>VA file number:</strong> 6789 <br />
          <strong>Date of birth:</strong> 01/10/1988
          <br />
          <strong>Gender:</strong> Male
        </p>
      </va-card>
      <p>
        <strong>Note:</strong> If you need to update your personal information,
        call our VA benefits hotline at 800-827-1000 (TTY: 711). We’re here
        Monday through Friday, 8:00 a.m. to 9:00 p.m. ET.
      </p>

      <VaButtonPair
        continue
        onPrimaryClick={goToNextPage}
        onSecondaryClick={goToPreviousPage}
        className="vads-u-padding-bottom--2"
      />
      <va-link href="javascript:void(0)" text="Finish this request later" />
    </Layout>
  );
}
