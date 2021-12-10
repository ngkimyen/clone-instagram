import React, { useContext, useEffect, useState } from "react";
import NavigationIconContext from "../../../../store/NavigationIconContext";
import useFillIcon from "../../../../custom-hooks/useFillIcon";
import classes from "./UserAvatar.module.scss";
import avatarUrl from "../../../../Image/avatar.jpeg";

import clsx from "clsx";
import UserOption from "../../../UI/UserOption";
import Modal from "../../../UI/Modal";

const UserAvatar = () => {
  const { ref, handleClick } = useFillIcon();
  const [state, dispatch] = useContext(NavigationIconContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (state.id === ref.current.id) {
      setIsActive(true);
    } else setIsActive(false);
  }, [state.id, ref]);

  const className = clsx(classes.navIcon, classes.userAvatarIcon, {
    [classes.active]: isActive,
  });

  const handleClose = () => {
    setIsActive(false)
    dispatch({ type: 'BACK_TO_HOME'})
    console.log('close')
  }

  return (
    <section className={className}>
      <div
        className={classes.userAvatar}
        id="user-avatar"
        ref={ref}
        onClick={handleClick}
      >
        <img src={avatarUrl} alt="user" />
      </div>
      {isActive && (
        <Modal overlay={<UserOption/>} isShow = {isActive} onClose={handleClose}/>
      )}
    </section>
  );
};

export default UserAvatar;
