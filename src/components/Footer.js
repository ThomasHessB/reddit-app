import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="pagination">
        {/* Add pagination or infinite scroll controls here */}
      </div>
      <div className="footer-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://example.com/documentation"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
