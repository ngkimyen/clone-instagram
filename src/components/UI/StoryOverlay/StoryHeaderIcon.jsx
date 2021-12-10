import React, { useState } from "react";
import classes from "./StoryDetail.module.scss";

const playingPath =
  "M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z";
const pausePath =
  "M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z";

const StoryHeaderIcon = ({ isMobile, onTogglePause, isPaused }) => {
  const handleTogglePlay = () => {
    onTogglePause();
  };

  return (
    <span className={classes.icon}>
      {!isMobile && (
        <svg
          aria-label="Pause"
          className="_8-yf5 "
          color="#ffffff"
          fill="#ffffff"
          height="16"
          role="img"
          viewBox="0 0 48 48"
          width="16"
          onClick={handleTogglePlay}
        >
          <path d={!isPaused ? playingPath : pausePath}></path>
        </svg>
      )}
      <svg
        aria-label="Audo is muted."
        className="_8-yf5 "
        color="#ffffff"
        fill="#ffffff"
        height="16"
        role="img"
        viewBox="0 0 48 48"
        width="16"
      >
        <path
          clipRule="evenodd"
          d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z"
          fillRule="evenodd"
        ></path>
      </svg>
      <svg
        aria-label="Menu"
        className="_8-yf5 "
        color="#ffffff"
        fill="#ffffff"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z"
          fillRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

export default StoryHeaderIcon;
