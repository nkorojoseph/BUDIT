import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {handleLogout, startLogin} from '../actions/auth'

export const Header = ({handleLogout}) => (
  <header className="header">
    <div className="content-container">    
      <div className="header__content">
    <Link className="header__title" to="/dashboard" >
      BUGIT
    </Link>
    <button onClick={handleLogout} className="button-layout button-layout--link">Logout</button>
    </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) =>({
  handleLogout: ()=> dispatch(handleLogout())
})


export default connect(undefined,mapDispatchToProps)(Header)
