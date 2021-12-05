import React from 'react';
import LikeIcon from './LikeIcon';
import CommentIcon from './CommentIcon';
import DirectMessageIcon from './DirectMessageIcon';
import classes from './index.module.scss';
import SavePostIcon from './SavePostIcon';

const PostItemNavigation = ({onLike, onUnlike, isLike}) => {
  return (
    <section className={classes.postItemNavigation}>
      <div>
        <LikeIcon onLike={onLike} onUnlike={onUnlike} isLike={isLike} />
        <CommentIcon />
        <DirectMessageIcon />
      </div>

      <div >
        <SavePostIcon />
      </div>
    </section>
  );
};

export default PostItemNavigation;