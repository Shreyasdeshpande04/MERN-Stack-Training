import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="header">
      <div className="logo">🎬 MovieFlix</div>
      <nav>
        <a href="#">Home</a>

   

        <a href="#">Movies</a>
        <a href="#">My List</a>
      </nav>
    </header>
  );
};

export default Header;
