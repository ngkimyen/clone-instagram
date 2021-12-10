import React from "react";
import classes from "./GetApp.module.scss";
import AppStoreImg from "../../Image/Appstore.png";
import GooglePlayImg from "../../Image/GooglePlay.png";

const GetApp = () => {
  return (
    <div className={classes.getApp}>
      <p>Get the app.</p>
      <div className={classes.appWrap}>
        <img src={AppStoreImg} alt='AppStore'/>
        <img src={GooglePlayImg} alt='Google Play'/>
      </div>
    </div>
  );
};

export default GetApp;
