import React from "react";
import userAva from "../../../Image/avatar.jpeg";
import classes from "./UserSideBar.module.scss";

const UserDetail = () => {

  return (
    <section className={classes.userDetail}>
      <img src={userAva} />
      <div className={classes.userInfo}>
        <div className={classes.userName}>
          <h4>{localStorage.getItem('user')}</h4>
          <p>Jasmine</p>
        </div>
        <button>Switch</button>
      </div>
    </section>
  );
};

export default UserDetail;
