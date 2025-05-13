import React from "react";
import { VaBreadcrumbs } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { Layout } from "../components/layout";

export default function IntroPage() {
  document.title = "Dispute your VA debt | Veterans Affairs";

  return (
    <Layout>
      <h1 className="vads-u-font-size--h1">Dispute your VA debt</h1>
      <p className="va-introtext">
        If you think your VA overpayment is an error, use this form to dispute
        all or part of the debt.
      </p>
      <va-alert
        close-btn-aria-label="Close notification"
        status="info"
        slim
        visible
      >
        <div>
          <p className="vads-u-margin-y--0">
            <strong>Note:</strong> Since you're signed into your account, you
            can save your application in progress and come back later to finish
            filling it out.
          </p>
        </div>
      </va-alert>
      <br />
      <va-link-action href="/personal-information" text="Start your dispute" />
      <h2 className="vads-u-font-size--h2 vads-u-margin-top--2 vads-u-margin-bottom--0">
        What to know before you fill out this form
      </h2>
      <ul>
        {
          <li>
            Right now, you can only use this form to dispute debts from benefit
            overpayments. You can’t use it to dispute copay bills at this time.{" "}
            <br />{" "}
            <a href="https://www.va.gov/health-care/pay-copay-bill/dispute-charges/">
              Learn how to dispute copay bills
            </a>
          </li>
        }
        <li>
          The time limit to dispute a debt is <strong>1 year</strong> from the
          date you received your first debt letter or or copay bill. If you
          dispute the debt within <strong>30 days,</strong> you can avoid
          collection actions.
        </li>
        <li>
          You’ll need to continue making payments on your debt while we review
          your dispute.
        </li>
      </ul>
      {/* <va-link-action href="/personal-information" text="Start your dispute" /> */}
      <br />
      <br />
      {/* <va-omb-info exp-date="12/31/2025" res-burden={15} /> */}
    </Layout>
  );
}
