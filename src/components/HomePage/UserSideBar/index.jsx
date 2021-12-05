import React from 'react';
import Suggestion from './Suggestion';
import UserDetail from './UserDetail';
import classes from './UserSideBar.module.scss'

const UserSideBar = () => {
     return (
          <div className={classes.userSideBar}>
               <UserDetail />
               <Suggestion />
          </div>
     );
};

export default UserSideBar;