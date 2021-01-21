import React from "react";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";
import NavLinks from "./nav-links";
import SocialLinks from "../social-links";

import logoDark from "../../assets/images/logo-dark.png";

const HeaderTwo = () => {
  return (
    <div className="main-header__two">
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link to="/">
              <img src={logoDark} width="101" alt="" />
            </Link>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>
          <div className="main-header__social">
            <SocialLinks />
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks extraClassName="dynamic-radius" />
          <Link className="thm-btn dynamic-radius" to="/contact">
            Donate Now
          </Link>
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
