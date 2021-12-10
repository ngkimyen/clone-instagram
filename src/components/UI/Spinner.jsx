import clsx from "clsx";
import React from "react";
import classes from './Spinner.module.scss'

const Spinner = ({isBig, isCentered}) => {
  return (
    <div className={clsx(classes.spinner, {
      [classes.bigSpinner] : isBig ,
      [classes.centeredSpinner] : isCentered
    })} ></div>
  );
};

export default Spinner;
