import React, {  useContext, useRef, useState } from "react";
import { LoginContext } from "../../store/LoginProvider";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
  const userNameInput = useRef();
  const passwordInput = useRef();
  const [btnIsActive, setBtnIsActive] = useState(false);
  const [,dispatch] = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN'})
    localStorage.setItem('isLogin', true)
    localStorage.setItem('user', userNameInput.current.value)
  };

  const handleChangeForm = () => {
    const enteredUserName = userNameInput.current.value;
    const enteredPassword = passwordInput.current.value;
    if (enteredUserName.trim() === "" || enteredPassword.length < 6) {
      setBtnIsActive(false);
      return
    }
    setBtnIsActive(true);
    
  }

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit} onChange={handleChangeForm}>
      <input
        ref={userNameInput}
        type="text"
        placeholder="Type your name"
      />
      <input ref={passwordInput} type="password" placeholder="Type anything greater than 6 characters !!! " />
      <button
        disabled={!btnIsActive}
        className={btnIsActive ? classes.active : classes.disabled}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
