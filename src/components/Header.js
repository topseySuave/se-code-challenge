import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>se code challenge</h1>
      </div>

      <div className="navigations">
        <Link to="/" className="latest">Latest</Link>
        <Link to="/search" className="search">Search</Link>
      </div>
    </header>
  )
};

export default Header;
