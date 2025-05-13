import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { Layout } from "../components/layoutFsr";

export default function RequestHelp() {
  document.title =
    "Request help with VA debt for overpayments and copay bills | Veterans Affairs";

  return (
    <Layout>
      <h1 className="desktop:vads-u-font-size--h1">
        Request help with VA debt for overpayments and copay bills
      </h1>
      <div className="schemaform-subtitle">
        Financial Status Report (VA Form 5655)
      </div>
      <p>
        If you’re a Veteran who needs to request certain types of help with a VA
        benefit overpayment or health care copay debt, you can request help
        online now.
      </p>

      <p>
        <va-link-action
          href="javascript:void(0)"
          text="Start your request now"
        />
      </p>

      <va-process-list>
        {/*<va-process-list-item header="Check if this is the right form for you">*/}
        <va-process-list-item>
          <h2 className="vads-u-font-size--h3">
            Check if this is the right form for you
          </h2>
          <p>
            You should only use this form if all these descriptions are true for
            you:
          </p>
          <ul>
            <li>
              You’re a Veteran, <strong>and</strong>
            </li>
            <li>
              You need to request a repayment plan of more than 5 years or debt
              relief (a waiver or compromise offer), <strong>and</strong>
            </li>
            <li>
              You need to request help for a VA disability compensation,
              pension, or GI Bill benefit overpayment or a VA health care copay
              debt
            </li>
          </ul>
          <p>
            Not sure if this is the right form for you?{" "}
            <va-link
              text="Learn more about options for requesting help with VA debts"
              href="/help-options"
            />
          </p>
        </va-process-list-item>
        {/*<va-process-list-item header="Gather your information">*/}
        <va-process-list-item>
          <h2 className="vads-u-font-size--h3">Gather your information</h2>
          <p>Here’s what you may need to submit your request:</p>
          <ul>
            <li>
              <strong>Work history for the past 2 years.</strong> You’ll need
              the employer name, start and end dates, and monthly income for
              each job.
            </li>
            <li>
              <strong>Monthly income.</strong> This includes earned money from a
              job, VA or Social Security benefits, or other sources. You’ll find
              the details you’ll need on a recent pay stub or statement.
            </li>
            <li>
              <strong>Assets.</strong> This includes available cash.
            </li>
          </ul>
          <p>
            We may also ask you to share this information for you or and your
            spouse (if you’re married):
          </p>
          <ul>
            <li>
              <strong>Additional assets.</strong> This includes cash in a
              checking or savings account, stocks and bonds, real estate, cars,
              jewelry, and other items of value.
            </li>
            <li>
              <strong>Monthly living expenses.</strong> These include housing,
              food, and utilities (like gas, electricity, and water).
            </li>
            <li>
              <strong>Installment contracts or other debts.</strong> These
              include car loans, student loans, credit card debt, and other
              debts or purchase payment plans.
            </li>
            <li>
              <strong>Other living expenses.</strong> These include expenses
              like clothing, transportation, child care, or health care.
            </li>
            <li>
              <strong>If you've ever declared bankruptcy,</strong> you'll need
              any related documents.
            </li>
          </ul>
          <va-alert status="info" visible>
            <h2>Why do we ask for this information?</h2>
            <p>
              We want to make sure we fully understand your financial situation.
              If you're married, we also need to understand your spouse's
              financial situation. This helps us make the best decision on your
              request. We will not take collections on your household assets.
            </p>
            <p>
              <strong>Note:</strong> We keep this information confidential. We
              won't use or share this information to collect on your income or
              any assets.
            </p>
          </va-alert>
        </va-process-list-item>
        {/*<va-process-list-item header="Start your request">*/}
        <va-process-list-item>
          <h2 className="vads-u-font-size--h3">Start your request</h2>
          <p>
            We'll take you through each step of the process. It should take
            about 60 minutes. When you submit your request, you'll get a
            confirmation message. You can print this for your records.
          </p>
          <va-additional-info trigger="What happens after you submit your request">
            <p>We'll send you this information by mail:</p>
            <ul>
              <li>Our decision on your request</li>
              <li>Any payments you may need to make and how to make them</li>
              <li>How to appeal our decision if you disagree</li>
            </ul>
          </va-additional-info>
          <p>If you need to make any payments, be sure to pay on time.</p>
        </va-process-list-item>
      </va-process-list>
      <p>
        <va-link-action
          href="javascript:void(0)"
          text="Start your request now"
        />
      </p>
      <p>
        Respondent burden: <strong>60 minutes</strong>
        <br />
        OMB Control #: <strong>2900-0165</strong>
        <br />
        Expiration date: <strong>11/30/2026</strong>
      </p>
      <va-button
        onClick={function noRefCheck() {}}
        secondary
        text="View Privacy Act Statement"
      />
    </Layout>
  );
}
