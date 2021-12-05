import React, { useEffect, useRef, useState } from "react";
// import {CSSTransition} from "react-transition-group";
import classes from "./Login.module.scss";

const LoginImg = ({ img }) => {
  const [imgIndex, setImgIndex] = useState(img[0]);
  let counter = useRef(1);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setImgIndex(img[counter.current]);

      if (counter.current >= img.length - 1) {
        counter.current = 0;
      } else counter.current += 1;
    }, 4000);

    return () => clearTimeout(imgTimer);
  }, [img]);
  
  return (
    // <CSSTransition
    //   mountOnEnter
    //   unmountOnExit
    //   in={isChanged}
    //   timeout={300}
    //   className='appear'
    // >
      <img src={imgIndex} alt="phone img" className={classes.phoneImg} />
    // </CSSTransition>
  );
};

export default LoginImg;
