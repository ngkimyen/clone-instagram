import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationIconContext from "../../../../store/NavigationIconContext";
import useFillIcon from "../../../../custom-hooks/useFillIcon";
import classes from "./Navigation.module.scss";


const initPath =
  "M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z";
const activePath =
  "M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z";

const ExploreIcon = () => {
  const { ref, handleClick } = useFillIcon();
  const [state] = useContext(NavigationIconContext);
  const [path, setPath] = useState(initPath);

  useEffect(() => {
    if (state.id === ref.current.id) {
      setPath(activePath);
    } else setPath(initPath);
  }, [state.id, ref]);
  
  return (
    <div ref={ref} className={classes.navIcon} onClick={handleClick} id="explore">
      <Link to="">
        <svg
          aria-label="Find People"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height="22"
          role="img"
          viewBox="0 0 48 48"
          width="22"
        >
          <path clipRule="evenodd" d={path} fillRule="evenodd"></path>
        </svg>
      </Link>
    </div>
  );
};

export default ExploreIcon;
