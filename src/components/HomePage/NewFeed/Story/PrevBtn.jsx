import clsx from "clsx";
import React from "react";
import classes from "./PrevBtn.module.scss";

const PrevBtn = ({ onClick }) => {
  return (
    <button
      className={clsx(classes.prevBtn, "flex-centered")}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

export default PrevBtn;
