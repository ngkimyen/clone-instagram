import React from "react";
import { Link } from "react-router-dom";
import TypoImg from "../../../../Image/logo-typo.png";

import classes from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div className={classes.typoImg}>
      <Link to='/clone-instagram/'>
        <div className={classes.imgWrapper}>
          <img src={TypoImg} alt="Instagram" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
