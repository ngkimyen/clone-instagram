import React from "react";
import classes from "./Login.module.scss";

import PhoneMockup from "../../Image/login-phone.png";
import TypoImg from "../../Image/logo-typo.png";

import LoginImgContainer from "./LoginImgContainer";
import LoginForm from "./LoginForm";
import LoginImg from "./LoginImg";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import GetApp from "./GetApp";
import useViewPort from "../../custom-hooks/useViewPort";

const Login = () => {
  const {isTabletMobile} = useViewPort()

  return (
    <section className={classes.login}>
      {!isTabletMobile && <div className={classes.sideImg}>
        <img
          src={PhoneMockup}
          alt="phone mockup"
          className={classes.phoneMockup}
        />
        <LoginImg img={LoginImgContainer} />
      </div>}

      <div className={classes.userSection}>
        <div className={classes.loginSection}>
          <img src={TypoImg} alt="typography" className={classes.typoLogo} />
          <LoginForm/>
          <div className={classes.option}>
            <span className={classes.line}>______________</span>
            <span className={classes.text}>OR</span>
            <span className={classes.line}>______________</span>
          </div>
          <div className={classes.loginLink}>
            <NavLink to="" className={classes.fbLogin}>
              <i className="fab fa-facebook-square"></i>
              Log In With Facebook
            </NavLink>
            <NavLink to="" className={classes.forgot}>
              Forgot password?
            </NavLink>
          </div>
        </div>

        <SignUp />
        <GetApp />
      </div>
    </section>
  );
};

export default Login;
