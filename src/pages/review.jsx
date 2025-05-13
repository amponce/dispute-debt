import React from "react";
import { VaTextInput } from "@department-of-veterans-affairs/component-library/dist/react-bindings";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/layout";

export default function Review() {
  document.title = "Review and submit your dispute | Veterans Affairs";
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/confirmation");
  };

  const goToPreviousPage = () => {
    navigate("/dispute-reason-compensation");
  };
  return (
    <Layout>
      <va-segmented-progress-bar
        current={4}
        heading-text="Review and submit"
        total={4}
        use-div="true"
      />
      <h1 className="vads-u-font-size--h1">Review your details</h1>

      <va-accordion bordered>
        <va-accordion-item
          bordered="true"
          header="Veteran information"
          expanded
          id="first"
        >
          <div class="form-review-panel-page">
            <div class="form-review-panel-page-header-row">
              <h3 class="form-review-panel-page-header vads-u-font-size--h4">
                Personal information
              </h3>
            </div>
            <dl class="review">
              <div class="review-row">
                <dt>Name</dt>
                <dd>Hector Smith</dd>
              </div>
              <div class="review-row">
                <dt>Last 4 of Social Security number</dt>
                <dd>4444</dd>
              </div>
              <div class="review-row">
                <dt>VA File number</dt>
                <dd>6789</dd>
              </div>
              <div class="review-row">
                <dt>Date of birth</dt>
                <dd>01/10/1980</dd>
              </div>
            </dl>
          </div>

          <div class="form-review-panel-page">
            <div class="form-review-panel-page-header-row">
              <h3 class="form-review-panel-page-header vads-u-font-size--h4">
                Contact information
              </h3>
            </div>
            <dl class="review">
              <div class="review-row">
                <dt>Mobile phone</dt>
                <dd>(510) 922-4444</dd>
              </div>
              <div class="review-row">
                <dt>Email address</dt>
                <dd>test@user.com</dd>
              </div>
              <div class="review-row">
                <dt>Street address</dt>
                <dd>1200 Park Ave</dd>
              </div>
              <div class="review-row">
                <dt>Street address line 2</dt>
                <dd>c/o Pixar</dd>
              </div>
              <div class="review-row">
                <dt>City</dt>
                <dd>Emeryville</dd>
              </div>
              <div class="review-row">
                <dt>State</dt>
                <dd>CA</dd>
              </div>
              <div class="review-row">
                <dt>Postal code</dt>
                <dd>94608</dd>
              </div>
            </dl>
          </div>
        </va-accordion-item>
        <va-accordion-item bordered="true" header="Dispute options" id="second">
          <div class="form-review-panel-page">
            <div class="form-review-panel-page-header-row">
              <h3 class="form-review-panel-page-header vads-u-font-size--h4">
                $227.42 Overpayment for Post-9/11 GI Bill debt for housing 
              </h3>
            </div>
            <dl class="review">
              <div class="review-row">
                <dt>Dispute reason</dt>
                <dd>I don't think I owe this debt to VA</dd>
              </div>
              <div class="review-row">
                <dt class="vads-u-width--fit">Dispute statement</dt>
                <dd class="vads-u-width--full vads-u-padding-left--4">
                  I never had a Post-9/11 GI Bill before so I don't know why I
                  have this debt. I'd like to have it canceled.
                </dd>
              </div>
            </dl>
          </div>
          <div class="form-review-panel-page">
            <div class="form-review-panel-page-header-row">
              <h3 class="form-review-panel-page-header vads-u-font-size--h4">
                $300.00 for Disability Compensation and Pension debt
              </h3>
            </div>
            <dl class="review">
              <div class="review-row">
                <dt>Dispute reason</dt>
                <dd>The amount of this debt</dd>
              </div>
              <div class="review-row">
                <dt class="vads-u-width--fit">Dispute statement</dt>
                <dd class="vads-u-width--full vads-u-padding-left--4">
                  This is the incorrect amount, it should only be $250
                </dd>
              </div>
            </dl>
          </div>
        </va-accordion-item>
      </va-accordion>

      <br />

      <p>
        <strong>Note: </strong>
        It is a crime to knowingly submit false statements or information that
        could affect our decision on this request. Penalties may include a fine,
        imprisonment, or both.
      </p>
      <va-card background>
        <div className="vads-u-padding--2">
          <h2 className="vads-u-font-size--h3 vads-u-margin-top--0">
            Statement of truth
          </h2>
          <p>
            I confirm that the identifying information in this form is accurate
            and has been represented correctly.
          </p>
          <p>I have read and accept the privacy policy.</p>

          <VaTextInput
            label="Veteran's full name"
            class="signature-input"
            id="veteran-signature"
            name="veteran-signature"
            type="text"
            required
            // error="Please enter your name exactly as it appears on your VA profile:"
          />
          <va-checkbox
            description={null}
            error={null}
            hint={null}
            label="I certify that the information above is correct and true to the best of my knowledge and belief."
            // message-aria-describedby="Optional description text for screen readers"
            onBlur={function noRefCheck() {}}
            required
          />
        </div>
      </va-card>

      <br />
      {/* <va-button-pair
          submit
          onPrimaryClick={onSubmit}
          onSecondaryClick={goToPreviousPage}
          className="vads-u-padding-bottom--2"
        /> */}
      <div className="mobile-lg:vads-u-display--flex vads-u-padding-bottom--2">
        <va-button
          back
          onClick={goToPreviousPage}
          class="vads-u-width--full mobile-lg:vads-u-width--auto vads-u-margin-bottom--1 mobile-lg:vads-u-padding-right--1"
        />
        <va-button
          text="Submit dispute"
          submit
          onClick={onSubmit}
          class="vads-u-width--full mobile-lg:vads-u-width--auto submit"
        />
      </div>
      <va-link href="javascript:void(0)" text="Finish this request later" />
    </Layout>
  );
}
