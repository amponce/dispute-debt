import React from "react";
import { VaButtonPair } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";

export default function ContactInfo() {
  document.title = "Your contact information | Veterans Affairs";
  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/select-debt");
  };

  const goToPreviousPage = () => {
    navigate("/personal-information");
  };
  return (
    <Layout>
      <va-segmented-progress-bar
        current={1}
        heading-text="Veteran Information"
        total={4}
        use-div="true"
      />
      <h1 className="vads-u-font-size--h1">Contact Information</h1>
      <p>
        This is the contact information we have on file for you. We’ll send any
        important information about your debt to this address.
      </p>
      <p>
        <strong>Note:</strong> Any updates you make here will be reflected in
        your VA.gov profile.
      </p>
      <ul className="remove-bullets">
        <li className="vads-u-margin-bottom--3">
          <va-card show-shadow>
            <h2 className="vads-u-font-size--h4 vads-u-margin-top--0">
              Mobile number
            </h2>
            <p className="vads-u-margin-top--0p5 vads-u-margin-bottom--0p5">
              (248) 387-2666
            </p>
            <p className="vads-u-margin-top--0p5 vads-u-margin-bottom--0">
              <va-link
                active
                id="edit-mobile-phone"
                label="Edit mobile phone number"
                text="Edit"
                href="javascript:void(0)"
              />
            </p>
          </va-card>
        </li>
        <li className="vads-u-margin-bottom--3">
          <va-card show-shadow>
            <h2 className="vads-u-font-size--h4 vads-u-margin-top--0">
              Email address
            </h2>
            <p className="vads-u-margin-top--0p5 vads-u-margin-bottom--0p5">
              hector@gmail.com
            </p>
            <p className="vads-u-margin-top--0p5 vads-u-margin-bottom--0">
              <va-link
                active
                id="edit-email"
                label="Edit email address"
                text="Edit"
                href="javascript:void(0)"
              />
            </p>
          </va-card>
        </li>
        <li className="vads-u-margin-bottom--3">
          <va-card show-shadow>
            <h2 className="vads-u-font-size--h4 vads-u-margin-top--0">
              Mailing address
            </h2>
            <p
              className="dd-privacy-hidden vads-u-margin-bottom--0 vads-u-margin-top--0p5"
              data-dd-action-name="street"
            >
              375 Mountainhigh Dr
            </p>
            <p
              className="dd-privacy-hidden vads-u-margin-top--0 vads-u-margin-bottom--0p5"
              data-dd-action-name="city, state and zip code"
            >
              Antioch, TN 37013
            </p>
            <p className="vads-u-margin-top--0p5 vads-u-margin-bottom--0">
              <va-link
                active
                id="edit-address"
                label="Edit mailing address"
                text="Edit"
                href="javascript:void(0)"
              />
            </p>
          </va-card>
        </li>
      </ul>

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
