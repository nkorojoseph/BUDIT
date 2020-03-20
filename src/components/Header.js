import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import {handleLogout, startLogin} from '../actions/auth'

export const Header = ({handleLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={handleLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) =>({
  handleLogout: ()=> dispatch(handleLogout())
})


export default connect(undefined,mapDispatchToProps)(Header)
