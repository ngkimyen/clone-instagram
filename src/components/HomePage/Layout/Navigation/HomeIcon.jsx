import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationIconContext from "../../../../store/NavigationIconContext";
import useFillIcon from "../../../../custom-hooks/useFillIcon";
import classes from "./Navigation.module.scss";


const initPath =
  "M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z";
const activePath =
  "M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z";

const HomeIcon = () => {
  const { ref, handleClick } = useFillIcon();
  const [state] = useContext(NavigationIconContext);
  const [path, setPath] = useState(initPath);

  useEffect(() => {
    if (state.id === ref.current.id) {
      setPath(activePath);
    } else setPath(initPath);
  }, [state.id, ref]);

  return (
      <div ref={ref} className={classes.navIcon} onClick={handleClick} id="home-icon">
        <Link to="">
          <svg
            aria-label="Home"
            className="_8-yf5 "
            color="#262626"
            fill="#262626"
            height="22"
            role="img"
            viewBox="0 0 48 48"
            width="22"
          >
            <path d={path}></path>
          </svg>
        </Link>
      </div>
  );
};

export default HomeIcon;
