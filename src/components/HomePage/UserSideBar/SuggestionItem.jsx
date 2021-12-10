import React, { useState } from "react";
import classes from "./SuggestionItem.module.scss";
import ava from "../../../Image/avatar.jpeg";

const SuggestionItem = ({ user }) => {
  const { avatar, followMe, username } = user;
  const [follow, setFollow] = useState(false);

  const handleClick = () => {
    setFollow(true);
  };

  return (
    <li className={classes.suggestionItem}>
      <img src={avatar} alt={username} />
      <div>
        <span className={classes.userInfo}>
          <h4>{username}</h4>
          {followMe ? <p>Follows you</p> : <p>Suggested for you</p>}
        </span>
        {!follow ? (
          <button onClick={handleClick}>Follow</button>
        ) : (
          <button className={classes.following}>Following</button>
        )}
      </div>
    </li>
  );
};

export default SuggestionItem;
