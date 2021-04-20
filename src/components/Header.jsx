import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import {logoutRequest} from '../actions';
import '../assets/styles/components/Header.scss';
import logo from  '../assets/static/logo.png';
import usericon from '../assets/static/user-icon.png';
import { object } from 'prop-types';

const Header = props => {
  const {user, isLogin, isRegister} = props;
  const hasUser= Object.keys(user).length > 0;

  const handleLogout = () =>{
    props.logoutRequest({})
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

    return (
      <header className={headerClass}>
        <Link to="/">
          <img className="header__img" src={logo} alt="logo dev" />
        </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ? <img src={gravatar(user.email)} alt={user.email} /> 
            : <img src={usericon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ? 
            <li><a href="/">{user.name}</a></li>
            : null
          }
          
          {hasUser ?
          <li><a href="#logout" onClick={handleLogout}>
            Cerrar sesion 
            </a></li>
          : <li>
            <Link to="/login">Iniciar Sesión</Link>
            </li>
          }

          
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.object
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

