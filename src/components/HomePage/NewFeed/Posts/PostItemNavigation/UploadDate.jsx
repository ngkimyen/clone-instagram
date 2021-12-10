import React from 'react';
import classes from './UploadDate.module.scss';

const UploadDate = ({date}) => {
  return (
    <p className={classes.date}>
      {date}
    </p>
  );
};

export default UploadDate;