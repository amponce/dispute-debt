import React from "react";
import "@department-of-veterans-affairs/component-library/dist/main.css";
import { CONTACTS } from "@department-of-veterans-affairs/component-library/contacts";

/**
 * Help component that provides standardized help information
 * for the VA application template
 */
export const Help = () => {
  return (
    <div className="vads-u-margin-top--6 vads-u-padding-top--3 vads-u-border-top--1px vads-u-border-color--gray-lighter">
      <h2>Need help?</h2>
      <p>If you have questions about the VA Design System or this template:</p>
      <ul>
        <li>
          <a href="https://design.va.gov/" target="_blank" rel="noopener noreferrer">
            Visit the VA Design System
          </a>
        </li>
        <li>
          <a href="https://department-of-veterans-affairs.github.io/component-library/" target="_blank" rel="noopener noreferrer">
            View the Web Components Documentation
          </a>
        </li>
        <li>
          <a href="https://github.com/department-of-veterans-affairs/component-library/" target="_blank" rel="noopener noreferrer">
            Check the GitHub Repository
          </a>
        </li>
      </ul>
    </div>
  );
};
