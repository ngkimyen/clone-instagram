import clsx from "clsx";
import React from "react";
import classes from "./UserInfo.module.scss";

const UserInfo = ({ url, userName, isComment, comment }) => {
  return (
    <div className={clsx(classes.userInfo, { [classes.isComment] : isComment })}>
      <div className={classes.userInfoWrap}>
        <div className={classes.avatarWrap}> 
          <img className={classes.avatar} src={url} alt="avatar" />
        </div>
        <div className={classes.contentWrap}>
          <p className={classes.userName}>{userName}</p>
          {comment && comment}
        </div>
      </div>
      {!isComment && (
        <svg
          aria-label="More options"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6.5" cy="12" r="1.5"></circle>
          <circle cx="17.5" cy="12" r="1.5"></circle>
        </svg>
      )}
    </div>
  );
};

export default UserInfo;
