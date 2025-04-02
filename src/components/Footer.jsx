import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 sm:py-6 px-4 sm:px-6 fixed bottom-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm sm:text-base">
          &copy; 2025 MedRemind. All rights reserved.
        </p>
        <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-xs sm:text-sm">
          <a href="/privacy" className="hover:text-blue-200 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-200 transition-colors">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-blue-200 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
