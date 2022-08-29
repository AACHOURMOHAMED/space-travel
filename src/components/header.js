/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.scss';
import logo from '../assets/planet.png';

const Header = () => (
  <>
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className={classes.logoImg} />
        <span>SPACE TRAVELS HUB</span>
      </div>
      <nav className={classes.nav}>
        <NavLink to="/">Rokets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/dragons">Dragons</NavLink>
        <NavLink to="/myProfile">My profile</NavLink>
      </nav>
    </header>
  </>
);

export default Header;
