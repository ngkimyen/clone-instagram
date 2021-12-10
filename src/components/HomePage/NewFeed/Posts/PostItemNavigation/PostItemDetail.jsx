import React from "react";
import classes from './PostItemDetail.module.scss';

const PostItemDetail = ({likes, userName, title}) => {
  return (
    <div className={classes.postItemDetail}>
      <p className={classes.likes}> {likes} likes </p>
      {userName && title && 
      <div className={classes.postContent}>
        <p className={classes.userNameInDetail}>{userName}</p>
        <p className={classes.title}>{title}</p>
      </div>}
    </div>
  );
};

export default PostItemDetail;
