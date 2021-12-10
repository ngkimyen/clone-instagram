import React from "react";
import { Link } from "react-router-dom";
import TypoImg from "../../../../Image/logo-typo.png";

import classes from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div className={classes.typoImg}>
<<<<<<< HEAD
      <Link to="/">
=======
      <Link to="/clone-instagram/">
>>>>>>> 74116d9099fb08d7106f6ab9d1592e7da8910975
        <div className={classes.imgWrapper}>
          <img src={TypoImg} alt="Instagram" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
