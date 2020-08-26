//------------------------------ import libraries
import React, { Component, Fragment } from "react";

//------------------------------ import styles and images
import "./styles/Com--Header-landing.scss";
import Logo from "../images/logo-walle.png";

class HeaderLanding extends Component {
  render() {
    return (
      <Fragment>
        <header className="HeaderLanding">
          <img
            className="HeaderLanding__brand"
            src={Logo}
            alt="Logo de Walle"
          />
          <div className="HeaderLanding__nav">
            <button className="second-button">Login</button>
            <button className="main-button">Registro</button>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default HeaderLanding;
