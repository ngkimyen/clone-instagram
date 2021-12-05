import clsx from "clsx";
import React from "react";
import classes from "./NextBtn.module.scss";

const NextBtn = ({ onClick }) => {
  return (
    <button
      className={clsx(classes.nextBtn, "flex-centered")}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  )};

export default NextBtn;
