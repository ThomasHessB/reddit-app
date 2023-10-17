import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/your-logo.png" alt="Reddit Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Reddit" />
      </div>
      {/* Navigation links can be added here */}
    </header>
  );
};

export default Header;