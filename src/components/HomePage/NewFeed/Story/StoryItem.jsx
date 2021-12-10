import clsx from "clsx";
import React, {useState } from "react";
import classes from "./StoryItem.module.scss";
import StoryOverlay from "../../../UI/StoryOverlay";
import Modal from "../../../UI/Modal";

const StoryItem = ({ user, avatar, style, story, index }) => {
  const [isWatched, setIsWatched] = useState(false);

  const handleClick = () => {
    setIsWatched(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsWatched(false);
    document.body.style.overflow = 'unset';

  };

  const className = clsx(classes.storyBorder, {
    [classes.watched]: isWatched,
  });

  return (
    <>
      {isWatched && (
        <Modal
          overlay={<StoryOverlay index={index} story={story} onClose={handleClose}/>}
          noBackdrop
          isShow = {isWatched}
          onClose={handleClose}
          isUnderRoot
        />
      )}
      <button className={classes.storyItem} onClick={handleClick} style={style}>
        <div className={className}>
          <img src={avatar} />
        </div>
        <p>{user}</p>
      </button>

      {/* <Routes>
        <Route
          path={`/stories/${user}`}
          element={
            <Modal
              overlay={
                <StoryOverlay
                  index={index}
                  story={story}
                  onClose={handleClose}
                />
              }
              noBackdrop
              isShow={isWatched}
              onClose={handleClose}
              isUnderRoot
            />
          }
        />
      </Routes> */}
    </>
  );
};

export default StoryItem;
