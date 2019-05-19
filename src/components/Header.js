import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink exact activeClassName="selected" to="/">
      Home
    </NavLink>
    <NavLink activeClassName="selected" to="/about">
      About
    </NavLink>
    <NavLink activeClassName="selected" to="/portfolio">
      Portfolio
    </NavLink>
    <NavLink activeClassName="selected" to="/contact">
      Contact
    </NavLink>
  </div>
);

export default Header;
