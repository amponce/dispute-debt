/**
 * VA Application Template - Navigation Component
 * 
 * This component implements navigation for the VA Application Template
 * with links to all available example pages.
 * 
 * @file navigation.jsx
 * @version 1.0.0
 */

import React from "react";
import { useLocation, Link } from "react-router-dom";

/**
 * Navigation component for VA Application Template
 * Provides consistent navigation between example pages
 * @returns {React.ReactElement} The Navigation component
 */
const Navigation = () => {
  const location = useLocation();
  
  // Define the navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/example-form", label: "Example Form" },
    { path: "/multi-step-form", label: "Multi-step Form" },
    { path: "/health-journey", label: "Health Journey Timeline" },
    { path: "/components", label: "Components" },
    { path: "/landing-template", label: "Landing Template" },
    { path: "/about", label: "About" }
  ];

  return (
    <nav className="vads-u-margin-bottom--4 vads-u-padding-y--2 vads-u-border-bottom--1px vads-u-border-color--gray-light">
      <div className="vads-u-display--flex vads-u-flex-wrap--wrap">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`vads-u-margin-right--3 vads-u-text-decoration--none vads-u-padding-y--1 vads-u-padding-x--1 ${location.pathname === link.path ? 'vads-u-font-weight--bold vads-u-color--primary vads-u-border-bottom--2px vads-u-border-color--primary' : 'vads-u-color--link'}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
