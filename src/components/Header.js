import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
      <h1>
        BUGIT
      </h1>
      <NavLink to="/" activeClassName="is-active">Dashboard </NavLink>
      <NavLink to="/about" activeClassName="is-active"> About</NavLink>
      <NavLink to="/edit" activeClassName="is-active"> Edit</NavLink>
      <NavLink to="/create" activeClassName="is-active"> Create</NavLink>
      <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
  );

  export default Header;