import React from 'react';
import Navigation from './Navigation';
import PostList from './PostList';
import classes from './UserPost.module.scss';

const UserPost = ({data}) => {
   return (
      <div className={classes.userPost}>
         <Navigation />
         <PostList data={data} />
      </div>
   );
};

export default UserPost;