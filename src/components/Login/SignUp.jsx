import React from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.scss"

const SignUp = () => {
  return (
    <div className={classes.signUpSection}>
      Don't have an account?
      <Link to="" className={classes.signUpLink}>
        Sign Up
      </Link>
    </div>
  );
};

export default SignUp;
