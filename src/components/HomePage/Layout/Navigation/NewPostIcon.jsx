import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationIconContext from "../../../../store/NavigationIconContext";
import useFillIcon from "../../../../custom-hooks/useFillIcon";
import { ActivePath, InitPath } from "./ExporePath";
import classes from "./Navigation.module.scss";


const NewPostIcon = () => {
  const { ref, handleClick } = useFillIcon();
  const [state] = useContext(NavigationIconContext);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if (state.id === ref.current.id) {
      setIsActive(true);
    } else setIsActive(false);
  }, [state.id,ref]);

  return (
    <div ref={ref} className={classes.navIcon} onClick={handleClick} id="new-post">
      <Link to="">
        <svg
          aria-label="New Post"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height="22"
          role="img"
          viewBox="0 0 48 48"
          width="22"
        >
        {isActive ? <ActivePath /> : <InitPath />}
        </svg>{" "}
      </Link>
    </div>
  );
};

export default NewPostIcon;
