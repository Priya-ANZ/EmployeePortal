import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="ml-auto" to="/">
       <label className="header-text">Employee Portal</label>
      </Link>
    </nav>
  );
};

export default Header;
