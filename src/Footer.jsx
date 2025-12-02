import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-primary text-base-content rounded p-16">
        <nav className="grid grid-flow-col gap-4">
          {/* LOGO */}
          <Link className="btn text-xl sm:text-3xl text-primary ">
            <img
              className="hidden sm:block w-8 h-8 mr-2"
              src="/logo.png"
              alt="GreenNest Logo"
            />
            GreenNest
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link className="text-white" to="/about">
              About Us
            </Link>
            <Link className="text-white" to="/contact">
              Contact
            </Link>
            <Link
              className="text-white"
              target="_blank"
              to="https:linkedin.com/in/devmuttaky"
            >
              LinkedIn
            </Link>
          </div>
        </nav>
        <aside>
          <p className="text-secondary">
            © 2025 GreenNest. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
