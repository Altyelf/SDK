import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.svg"
import './Header.scss'

const Header: FC = () => {
  return (
    <section className="header">
      <div className="row">
        <div className="col-xs-4">
          <Link className="header-title" to="/">Sonarworks</Link>
        </div>
        <div className="col-xs-4">
          <Link className="header-subtext" to="legal">Legal centre</Link>
        </div>
        <div className="col-xs-4">
          <Link to="/">
          <img className="logo" src={logo} alt="logo-image"/>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
