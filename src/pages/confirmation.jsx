import React from "react";
import {
  VaModal,
  VaBreadcrumbs,
  VaButtonPair,
} from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { Layout } from "../components/layout";

export default function Confirmation() {
  document.title = "Your dispute confirmation | Veterans Affairs";
  return (
    <Layout>
      <h1 className="vads-u-font-size--h1">Dispute your VA debt</h1>
      <va-alert
        close-btn-aria-label="Close notification"
        status="success"
        visible
      >
        <h2 slot="headline">Form submission in progress</h2>
        <div>
          <p>
            It can take up to 5 days for us to receive your form in our system.
          </p>
          <p className="vads-u-margin-bottom--0">
            When we receive your form, we’ll mail you a letter and send an email
            to <strong>hector@gmail.com</strong> to confirm we have it.
          </p>
        </div>
      </va-alert>
      <br />
      <va-summary-box>
        <h3 className="vads-u-margin-top--0">Your submission information</h3>
        <h4>Veteran name</h4>
        <p>Hector Smith</p>
        <h4>Requested dispute</h4>
        <ul>
          <li>Overpayment for Post-9/11 GI Bill debt for housing </li>
          <li>Disability Compensation and Pension debt</li>
        </ul>
        <h4>Date submitted</h4>
        <p>November 1, 2024</p>
        <h4>Confirmation for your records</h4>
        <p>You can print this confirmation page for your records.</p>
        <va-button
          href="javascript:void(0)"
          text="Print this page for your records"
        />
      </va-summary-box>
      <h2 className="vads-u-font-size--h2">What to expect next</h2>
      <p>
        After we receive your dispute form, we’ll review your dispute. You’ll
        need to continue making payments on your debt while we review your
        dispute.
      </p>
      <p>Then we’ll mail you a letter with our decision.</p>
      <p>
        If you have questions about your dispute, call us at 866-400-1238
        (TTY:711). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
      </p>
      <va-link-action href="javascript:void(0)" text="Go back to VA.gov" />
      <br />
    </Layout>
  );
}
