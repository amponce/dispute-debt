import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { Layout } from "../components/layoutManage";

export default function ManageVaDebt() {
  document.title =
    "Manage your VA debt for benefit overpayments and copay bills | Veterans Affairs";

  return (
    <Layout>
      <h1
        className="desktop:vads-u-font-size--h1"
        data-testid="overview-page-title"
      >
        Manage your VA debt for benefit overpayments and copay bills
      </h1>

      {/*
        <div class="header">
          Manage your VA debt for benefit overpayments and copay bills
        </div>*/}
      <p className="va-introtext">
        Review your current VA benefit debt or copay bill balances online. And
        find out how to make payments or request help now.
      </p>
      <va-on-this-page className="vads-u-margin-top--2 medium-screen:vads-u-margin-top--0" />
      <h2 id="review-your-benefit-debt-and-c">
        Review your benefit debt and copay bills online
      </h2>
      <va-alert disable-analytics heading-level="3" visible>
        <h3 slot="headline" id="sign-in">
          Sign in with a verified account to manage your VA debt
        </h3>
        <div>
          <p>
            You’ll need to sign in with an identity-verified account through one
            of our account providers. Identity verification helps us protect all
            Veterans' information and prevent scammers from stealing your
            benefits.
          </p>
          <p>
            <strong>Don’t yet have a verified account?</strong> Create a{" "}
            <strong>Login.gov</strong> or <strong>ID.me</strong> account. We’ll
            help you verify your identity for your account now.
          </p>
          <p>
            <strong>Not sure if your account is verified?</strong> Sign in here.
            If you still need to verify your identity, we’ll help you do that
            now.
          </p>
          <p>
            <va-button text="Sign in or create an account"></va-button>
          </p>
          <p>
            <va-link
              href="javascript:void(0)"
              text="Learn about creating an account"
            ></va-link>
          </p>
        </div>
      </va-alert>
      <h3 id="who-can-sign-in-to-manage-debt">
        Who can sign in to manage debt online
      </h3>
      <p>
        At this time, only Veterans and service members can use this tool to
        review their benefit overpayments and copay bills online.
      </p>
      <h3 id="what-you-can-do-when-you-sign-">
        <strong>What you can do when you sign in</strong>
      </h3>
      <ul>
        <li>
          Check the amount and status of your VA debt related to VA disability
          compensation, non-service-connected pension, or education benefits
        </li>
        <li>
          Check the amount and status of copay bills at each VA health facility
          where you receive care
        </li>
        <li>Find out how to make payments or request help</li>
        <li>
          Download billing statements, debt notices, and collection letters
        </li>
      </ul>
      <h2 id="make-a-payment-now">Make a payment now</h2>
      <p>
        Avoid late charges, interest, or collection actions. Pay your full
        balance or request help by the due date on your collection letter or
        billing statement.
      </p>
      <h3 id="make-a-payment-online">Make a payment online</h3>
      <h4>For VA benefit debt</h4>
      <p>
        Benefit debt includes debt related to VA disability compensation,
        non-service-connected pension, or education benefits.
      </p>
      <p>
        <va-link-action
          type="secondary"
          href="javascript:void(0)"
          text="Repay your VA benefit debt at Pay.va.gov"
        />
      </p>
      <va-additional-info trigger="Information you’ll need to repay benefit debt online">
        <p>
          <strong>Here's what you'll need:</strong>
        </p>

        <ul>
          <li>Your VA file number or Social Security number</li>
          <li>Your deduction code for each debt</li>
          <li>Your credit card, debit card, or bank account information</li>
        </ul>

        <p>
          You’ll find your VA file number or deduction code in your online debt
          information or paper payment remittance stubs or collection letters.
        </p>

        <p>
          <strong>Note:</strong> Are you paying a full debt balance? Or do you
          get monthly VA benefits? Call us first at{" "}
          <va-telephone contact="8008270648"></va-telephone> (or&nbsp;
          <va-telephone contact="16127136415"></va-telephone> from
          overseas)&nbsp;(
          <va-telephone tty="true" contact="711">
            {" "}
          </va-telephone>
          ). We’re here Monday through Friday, 7:30 a.m. to 7:00 p.m. ET. We’ll
          confirm the amount you owe so you don’t overpay.
        </p>
      </va-additional-info>
      <h4>For copay bills</h4>
      <p>
        Copay bills include bills for services at VA health facilities or
        in-network community providers.
      </p>
      <p>
        <va-link-action
          type="secondary"
          href="javascript:void(0)"
          text="Pay your copay bill at Pay.gov"
        />
      </p>
      <va-additional-info trigger="Information you’ll need to repay copay bills online">
        <p>
          <strong>Here's what you'll need:</strong>
        </p>

        <ul>
          <li>Your account number</li>
          <li>Your credit card, debit card, or bank account information</li>
        </ul>

        <p>
          You’ll find your account number by signing in to manage your VA debt
          online. You’ll also find this number on your paper billing statement.
        </p>
      </va-additional-info>
      <h3 id="other-ways-to-make-a-payment">Other ways to make a payment</h3>
      <va-accordion>
        <va-accordion-item id="overpayments">
          <h4 slot="headline">How to repay benefit debt by phone or mail</h4>
          <p>
            You can also repay debt related to VA disability compensation,
            non-service-connected pension, or education benefits in any of these
            3 ways:
          </p>

          <ul>
            <li>
              <strong>Pay by phone:</strong> Call us at{" "}
              <va-telephone contact="8008270648"></va-telephone> (
              <va-telephone contact="16127136415"></va-telephone> from
              overseas)&nbsp;(
              <va-telephone tty="true" contact="711"></va-telephone>
              {/*<a aria-label="8 0 0. 8 2 7. 0 6 4 8." href="javascript:void(0)">
                800-827-0648
              </a>{" "}
              (
              <a
                aria-label="1. 6 1 2. 7 1 3. 6 4 1 5."
                href="javascript:void(0)"
              >
                1-612-713-6415
              </a>{" "}
              from overseas) (
              <a aria-label="TTY. 7 1 1." href="javascript:void(0)">
                TTY: 711
              </a>*/}
              ). We’re here Monday through Friday, 7:30 a.m. to 7:00 p.m. ET.
            </li>
            <li>
              <strong>Pay by mail:</strong> Send a separate check or money order
              for each debt, payable to “U.S. Department of Veterans Affairs.”
              On each, print your full name, VA file number or Social Security
              number, and deduction code. Include your payment stubs or a note
              with the amount you’re paying on each debt.
              <br />
              <br />
              Mail to this address:
            </li>
          </ul>
          <p className="va-address-block">
            U.S. Department of Veterans Affairs
            <br />
            Debt Management Center
            <br />
            PO Box 11930
            <br />
            St. Paul, MN 55111
          </p>
        </va-accordion-item>
        <va-accordion-item id="copays">
          <h4 slot="headline">
            How to pay copay bills by phone, mail, or in person
          </h4>

          <p>You can also pay your VA copay bills in any of these 3 ways:</p>

          <ul>
            <li>
              <strong>Pay by phone: </strong>Call us at{" "}
              <va-telephone contact="8008274817"></va-telephone> (
              <va-telephone tty="true" contact="711"></va-telephone>
              ).
              <p>
                Call the VA Health Resource Center at{" "}
                <va-telephone contact="8664001238"></va-telephone> (
                <va-telephone tty="true" contact="711"></va-telephone>
                ). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
              </p>
            </li>
            <li>
              <strong>Pay by mail: </strong>Send your payment stub and a check
              or money order made payable to “VA” to the address listed here.
              Include your account number on the check or money order.
            </li>
          </ul>
          <p className="va-address-block">
            Department of Veterans Affairs
            <br />
            PO Box 3978
            <br />
            Portland, OR 97208-3978
          </p>

          <ul>
            <li>
              <strong>Pay in person: </strong>Go to the VA health facility that
              sent the bill. Ask for the agent cashier’s office. Bring your
              payment stub, along with a check or money order made payable to
              “VA.” Include your account number on the check or money order.
              <br />
              <br />
              <a href="javascript:void(0)">Find your VA health facility</a>
            </li>
          </ul>
        </va-accordion-item>
      </va-accordion>
      <h2 id="request-financial-help-or-disptue">Request financial help</h2>
      <p>
        If you're struggling to pay your VA benefit debt or copay bills, we're
        here to help.
      </p>
      <p>
        You can request help for VA debt online if all of these descriptions are
        true for you:
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
          You need to request help for a VA disability compensation, pension, or
          GI Bill benefit overpayment or a VA health care copay debt
        </li>
      </ul>
      <h3>If you want to request debt relief (a waiver or compromise offer)</h3>
      <p>
        Submit a Financial Status Report (VA Form 5655) online to request help
        with your debt.
      </p>
      <p>
        <va-link-action
          href="/request-help"
          type="secondary"
          text="Request help with overpayments and copay bills online"
        />
      </p>
      <h3>Other options to request help with VA debt</h3>
      <p>
        If this list doesn't describe you, you can still request help with VA
        debt in other ways. If you think your debt is an error, you can dispute
        the charges or appeal a decision.
      </p>
      <p>
        <va-link-action
          href="/help-options"
          type="secondary"
          text="Learn about other ways to request help with VA debt"
        />
      </p>
      <p>
        <strong>Note:</strong> The time limit to request a waiver (debt
        forgiveness) has changed. You now have <strong>1 year</strong> from the
        date you received your first debt letter or copay bill to request a
        waiver.
      </p>
      <h2 id="what-to-do-if-you-have-questions-about-your-debt">
        What to do if you have questions about your debt and bills
      </h2>
      <h3>Questions about benefit debt</h3>
      <p>
        Call the Debt Management Center (DMC) at{" "}
        <va-telephone contact="8008270648"></va-telephone> (
        <va-telephone tty="true" contact="711"></va-telephone>
        ). We’re here Monday through Friday, 7:30 a.m. to 7:00 p.m. ET.
      </p>
      <h3>Questions about medical copayment bills</h3>
      <p>
        Call the VA Health Resource Center at{" "}
        <va-telephone contact="8664001238"></va-telephone> (
        <va-telephone tty="true" contact="711"></va-telephone>
        ). We’re here Monday through Friday, 8:00 a.m. to 8:00 p.m. ET.
      </p>
      <section className="field_content_block">
        <h2 id="more-helpful-information" className="va-nav-linkslist-heading">
          More helpful information
        </h2>
        <ul className="va-nav-linkslist-list no-bullets">
          <li>
            {/*<h3
              className="va-nav-linkslist-title vads-u-font-size--h4"
              id="va-debt-management"
            >
              <a
                href="javascript:void(0)"
                className="vads-u-text-decoration--underline"
              >
                VA debt management
              </a>
            </h3>*/}
            <span class="hub-page-link-list__header">
              <va-link
                href="javascript:void(0)"
                text="VA debt management"
                class="hydrated"
              ></va-link>
            </span>
            <p className="va-nav-linkslist-description">
              Get answers to common questions about managing debt related to VA
              disability compensation, non-service-connected pension, and
              education benefits.
            </p>
          </li>
          <li>
            {/*<h3
              className="va-nav-linkslist-title vads-u-font-size--h4"
              id="va-debt-management"
            >
              <a
                href="javascript:void(0)"
                className="vads-u-text-decoration--underline"
              >
                Request VA financial hardship assistance for copay bills
              </a>
            </h3>*/}
            <span class="hub-page-link-list__header">
              <va-link
                href="javascript:void(0)"
                text="Request VA financial hardship assistance for copay bills"
                class="hydrated"
              ></va-link>
            </span>
            <p className="va-nav-linkslist-description">
              If you’re struggling to pay your copays, you can request help.
              Options may include a repayment plan, debt relief, or copay
              exemption.
            </p>
          </li>
          <li>
            {/*<h3
              className="va-nav-linkslist-title vads-u-font-size--h4"
              id="va-debt-management"
            >
              <a
                href="javascript:void(0)"
                className="vads-u-text-decoration--underline"
              >
                Dispute your VA copay charges
              </a>
            </h3>*/}
            <span class="hub-page-link-list__header">
              <va-link
                href="javascript:void(0)"
                text="Dispute your VA copay charges"
                class="hydrated"
              ></va-link>
            </span>
            <p className="va-nav-linkslist-description">
              If you disagree with the charges or amounts on your bill, you can
              file a dispute.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
import "@department-of-veterans-affairs/component-library/dist/main.css";
