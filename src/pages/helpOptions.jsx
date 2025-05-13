import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { Layout } from "../components/layoutOptions";

export default function HelpOptions() {
  document.title = "Options to request help with VA debt | Veterans Affairs";

  return (
    <Layout>
      <h1
        className="desktop:vads-u-font-size--h1"
        data-testid="overview-page-title"
      >
        Options to request help with VA debt
      </h1>
      <p className="va-introtext">
        Find the best way to get help with different types of VA debt.
      </p>
      <p>
        <va-link-action
          type="secondary"
          href="/manage-va-debt"
          text="Manage your VA debt"
        />
      </p>
      <p>
        <va-link-action
          type="secondary"
          href="javascript:void(0)"
          text="Make a payment now"
        />
      </p>
      <va-on-this-page className="vads-u-margin-top--2 medium-screen:vads-u-margin-top--0" />
      <h2 id="disability-compensation-pensio">
        Disability compensation, pension, and GI Bill benefits
      </h2>

      <p>
        You can also repay debt related to VA disability compensation,
        non-service-connected pension, or education benefits in any of these 3
        ways:
      </p>
      <h3 id="veterans">Veterans</h3>
      <p>Read our guidance for how to request help for your specific need.</p>
      <va-accordion>
        <va-accordion-item id="repaymentlessthan">
          <h4 slot="headline">Request a repayment plan of less than 5 years</h4>
          <p>
            If you can pay back a debt in less than 5 years, you don’t need to
            submit a Financial Status Report (VA Form 5655). You can request a
            plan online, by phone, or by mail:{" "}
          </p>
          <ul>
            <li>
              <strong>Online:</strong>{" "}
              <va-link
                href="javascript:void(0)"
                text="Contact us through Ask VA"
              />
            </li>
            <li>
              <strong>Mail:</strong>
            </li>
          </ul>
          <p className="va-address-block">
            VA Regional Processing Office
            <br />
            PO Box 4616
            <br />
            Buffalo, NY 14240-4616
          </p>
        </va-accordion-item>
        <va-accordion-item id="repaymentmorethan">
          <h4 slot="headline">
            Request a repayment plan of 5 or more years or debt relief (a waiver
            or compromise offer)
          </h4>

          <p>
            Submit a request for help now with a Financial Status Report (VA
            Form 5655).
          </p>
          <p>The fastest way to submit your request is online.</p>
          <p>
            <va-link-action
              type="primary"
              href="/request-help"
              text="Start your request for debt help online"
            />
          </p>
          <p>You can also submit a PDF version of VA Form 5655.</p>

          <va-link
            href="javascript:void(0)"
            text="Get VA Form 5655 to download"
          />
          <p>Mail your completed form and statement to this address:</p>
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
        <va-accordion-item id="disputeyouroverpayment">
          <h4 slot="headline">Dispute your overpayment</h4>

          <p>
            If you think your debt is an error, your first step should be to
            dispute the charges.
          </p>
          <p>
            The time limit to dispute a debt is <strong>1 year</strong> from the
            date you received your first debt letter. If you dispute the debt
            within <strong>30 days</strong>, you can avoid collection actions.
          </p>
          <p>
            You’ll need to continue making payments on your debt while we review
            your dispute.
          </p>
          <p>
            <va-link-action
              type="secondary"
              href="/"
              text="Dispute an overpayment online"
            />
          </p>
        </va-accordion-item>
        <va-accordion-item id="disputeyouroverpayment">
          <h4 slot="headline">
            Appeal the VA decision that resulted in this overpayment
          </h4>

          <p>
            You can submit a Supplemental Claim or request a Higher Level Review
            or a Board Appeal.
          </p>
          <p>
            <va-link
              href="https://www.va.gov/resources/choosing-a-decision-review-option/"
              text="Learn more about choosing a decision review option"
            />
          </p>
        </va-accordion-item>
        <va-accordion-item id="appealadecision">
          <h4 slot="headline">Appeal a decision on a waiver request</h4>
          <p>
            First, you can ask our Committee of Waivers and Compromises to
            reconsider your waiver. To do this, you’ll need to tell us why you
            think we should reconsider. You can submit your request online or by
            mail:
          </p>
          <ul>
            <li>
              <strong>Online: </strong>
              <va-link
                href="javascript:void(0)"
                text="Contact us through Ask VA"
              />
            </li>
            <li>
              <strong>Mail:</strong>
            </li>
          </ul>
          <p className="va-address-block">
            Debt Management Center
            <br />
            PO Box 11930
            <br />
            St. Paul, MN 55111-0930
          </p>
          <p>
            If you disagree with our decision, you can request a Board Appeal.
            When you choose this option, you appeal to a Veterans Law Judge at
            the Board of Veterans’ Appeals in Washington, D.C. A judge who’s an
            expert in Veterans law will review your case.
          </p>
          <va-link
            href="https://www.va.gov/decision-reviews/board-appeal/"
            text="Learn how to request a Board Appeal"
          />
          <p>
            <strong>Note:</strong> You have 1 year from the date on your
            decision letter to request a Board Appeal, unless you have a
            contested claim.
          </p>
          <va-link
            href="https://www.va.gov/decision-reviews/contested-claims/"
            text="Learn more about contested claims"
          />
        </va-accordion-item>
      </va-accordion>
      <h3 id="veterans">Spouses and dependents</h3>
      <p>Read our guidance for how to request help for your specific need.</p>
      <va-accordion>
        <va-accordion-item id="overpayments">
          <h4 slot="headline">Request a payment plan or debt relief</h4>
          <p>
            Submit a PDF version of the Financial Status Report (VA Form 5655).
          </p>
          <p>
            <a
              href="javascript:void(0)"
              data-entity-type="node"
              data-entity-uuid="e001a698-c100-444b-8ab1-db84987f4027"
              data-entity-substitution="canonical"
              title="Get VA Form 5655 to download"
              hreflang="en"
            >
              Get VA Form 5655 to download
            </a>
          </p>
          <p>Mail your completed form and statement to this address:</p>
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
          <h4 slot="headline">Appeal a benefit or waiver decision</h4>
          <p>
            <strong>
              To appeal a benefit decision that caused an overpayment,
            </strong>{" "}
            submit a Supplemental Claim, request a Higher Level Review, or a
            Board Appeal.
          </p>
          <p>
            <a
              href="https://www.va.gov/resources/choosing-a-decision-review-option"
              data-entity-type="node"
              data-entity-uuid="16176ace-c5f9-4cc5-bee8-5a608459623a"
              data-entity-substitution="canonical"
              title="Choosing a decision review option"
              hreflang="en"
            >
              Learn more about choosing a decision review option
            </a>
          </p>
          <p>
            <strong>To appeal a decision on a waiver request,</strong> you can
            ask our Committee of Waivers and Compromises to reconsider your
            waiver. To do this, you’ll need to tell us why you think we should
            reconsider.&nbsp;You can submit your request online or by mail:
          </p>

          <ul>
            <li>
              <strong>Online: </strong>
              <a href="javascript:void(0)" hreflang="en">
                Contact us through Ask VA
              </a>
              &nbsp;
            </li>
            <li>
              <strong>Mail:</strong>
            </li>
          </ul>
          <p className="va-address-block">
            Debt Management Center
            <br />
            PO Box 11930
            <br />
            St. Paul, MN 55111-0930
          </p>
          <p>
            If you disagree with our decision, you can request a Board Appeal.
            When you choose this option, you appeal to a Veterans Law Judge at
            the Board of Veterans’ Appeals in Washington, D.C. A judge who’s an
            expert in Veterans law will review your case.&nbsp;
          </p>
          <p>
            <a
              href="https://www.va.gov/decision-reviews/board-appeal/"
              data-entity-type="node"
              data-entity-uuid="ddbd4833-9bed-478e-b649-3cd072fe1bf4"
              data-entity-substitution="canonical"
              title="Board Appeals"
              hreflang="en"
            >
              Learn how to request a Board Appeal
            </a>
            &nbsp;
          </p>
          <p>
            <strong>Note: </strong>You have 1 year from the date on your
            decision letter to request a Board Appeal, unless you have a
            contested claim.
          </p>
          <p>
            <a
              href="https://www.va.gov/decision-reviews/contested-claims"
              data-entity-type="node"
              data-entity-uuid="fde26236-1f13-4249-bd86-66c8ec9c86cd"
              data-entity-substitution="canonical"
              title="Contested claims"
              hreflang="en"
            >
              Learn more about contested claims
            </a>
          </p>
        </va-accordion-item>
      </va-accordion>
      <br></br>
      <hr></hr>
      <h2 id="health-care-copays">Health care copays</h2>

      <h4>If you want to request debt relief (a waiver or compromise offer)</h4>

      <p>
        Submit a Financial Status Report (VA Form 5655) online to request help
        with your debt.
      </p>

      <p>
        <va-link-action
          type="primary"
          href="/request-help"
          text="Start your request for debt help online"
        />
      </p>

      <h4>If you disagree with a copay debt</h4>

      <p>You have the right to dispute all or part of your VA copay charges.</p>
      <p>
        <va-link
          href="https://www.va.gov/health-care/pay-copay-bill/dispute-charges/"
          text="Learn how to dispute your VA copay charges"
        />
      </p>

      <h4>If you can’t pay future copays</h4>
      <p>
        If your income has decreased, you can request a copay extension for VA
        hardship.
      </p>
      <p>
        <va-link
          href="javascript:void(0)"
          text="Learn how to request a VA hardship determination and copay exemption"
        />
      </p>
      <br></br>
      <hr></hr>
      <h2 id="rogers-stem-scholarship">Rogers STEM Scholarship</h2>

      <p>For help with STEM Scholarship debt, contact us by email or mail.</p>
      <ul>
        <li>
          <strong>Email: </strong>
          <a href="mailto:stem.vbauf@va.gov" hreflang="en">
            STEM.VBAUF@va.gov
          </a>
        </li>
        <li>
          <strong>Mail:</strong>
        </li>
      </ul>
      <p className="va-address-block">
        VA Regional Processing Office
        <br />
        PO Box 4616
        <br />
        Buffalo, NY 14240-4616
      </p>
      <br></br>
      <hr></hr>
      <h2 id="vet-tec-program">VET TEC program</h2>
      <p>
        <strong>For help with VET TEC program debt,</strong> contact us by
        email, phone, or mail.
      </p>
      <ul>
        <li>
          <strong>Email: </strong>
          <a href="mailto:vettec.vbauf@va.gov" hreflang="en">
            VETTEC.VBAUF@va.gov
          </a>
        </li>
        <li>
          <strong>Phone: </strong>Call us at{" "}
          <va-telephone contact="8888274817"></va-telephone> (
          <va-telephone tty="true" contact="711"></va-telephone>) and leave a
          detailed message. We’ll call you back as soon as possible.
        </li>
        <li>
          <strong>Mail:</strong>
        </li>
      </ul>
      <p className="va-address-block">
        VA Regional Processing Office
        <br />
        PO Box 4616
        <br />
        Buffalo, NY 14240-4616
      </p>
      <br></br>
      <hr></hr>
      <section className="field_content_block">
        <h2 id="separation-pay">Separation pay</h2>
        <p>
          Call us at <va-telephone contact="8888274817"></va-telephone> (
          <va-telephone tty="true" contact="711"></va-telephone>
          ). We’re here Monday through Friday, 7:00 a.m. to 8:00 p.m. ET.
        </p>
        <br></br>
        <hr></hr>
      </section>
      <section className="field_content_block">
        <h2 id="attorney-fees">Attorney fees</h2>
      </section>
      <section className="field_content_block">
        <p>
          Call us at <va-telephone contact="8888274817"></va-telephone> (
          <va-telephone tty="true" contact="711"></va-telephone>
          ). We’re here Monday through Friday, 7:00 a.m. to 8:00 p.m. ET.&nbsp;
        </p>
        <p>
          <va-link-action
            type="secondary"
            href="/manage-va-debt"
            text="Manage your VA debt"
          />
        </p>
        <p>
          <va-link-action
            type="secondary"
            href="javascript:void(0)"
            text="Make a payment now"
          />
        </p>
      </section>
      <section className="field_content_block vads-u-padding-y--3">
        <h2
          id="more-helpful-information"
          className="vads-u-margin-y--0 vads-u-font-size--h3"
        >
          Related information
        </h2>
        <ul className="va-nav-linkslist-list no-bullets">
          <li className="vads-u-margin-y--2">
            <p className="vads-u-margin--0">
              <strong>
                <a href="javascript:void(0)">Waivers for VA benefit debt</a>
              </strong>
            </p>
          </li>
          <li className="vads-u-margin-y--2">
            <p className="vads-u-margin-top--0">
              <strong>
                <a href="javascript:void(0)">VA debt management</a>
              </strong>
            </p>
          </li>
        </ul>
      </section>
      <section className="field_content_block vads-u-padding-y--3">
        <h2
          id="more-helpful-information"
          className="vads-u-margin-y--0 vads-u-font-size--h3"
        >
          VA benefits
        </h2>
        <ul className="va-nav-linkslist-list no-bullets">
          <li>
            <p className="vads-u-margin--0">
              <strong>
                <a href="javascript:void(0)">Health care</a>
              </strong>
            </p>
            <p className="vads-u-margin--0">
              Apply for VA health care, find out how to access services, and
              manage your health and benefits online.
            </p>
          </li>
          <li>
            <p className="vads-u-margin--0">
              <strong>
                <a href="javascript:void(0)">Disability</a>
              </strong>
            </p>
            <p className="vads-u-margin--0">
              File a claim for disability compensation for conditions related to
              your military service, and manage your benefits over time.
            </p>
          </li>
          <li>
            <p className="vads-u-margin--0">
              <strong>
                <a href="javascript:void(0)">Education and training</a>
              </strong>
            </p>
            <p className="vads-u-margin--0">
              Apply for and manage your GI Bill and other education benefits to
              help pay for college and cover expenses while you’re training for
              a job.
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
import "@department-of-veterans-affairs/component-library/dist/main.css";
