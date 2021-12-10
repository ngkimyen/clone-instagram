import React, { useState } from "react";
import classes from "./StoryDetail.module.scss";
import StoryFooter from "./StoryFooter";
import StoryHeaderIcon from "./StoryHeaderIcon";
import StoryProcess from "./StoryProcess";
import PrevBtn from "../../HomePage/NewFeed/Story/PrevBtn";
import NextBtn from "../../HomePage/NewFeed/Story/NextBtn";
import useViewPort from "../../../custom-hooks/useViewPort";
import clsx from "clsx";
import { useRef } from "react";

const StoryDetail = ({ displayedStory, onNext, onPrev, index, total }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const { isMobile } = useViewPort();
  const storyRef = useRef();

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handlePrev = () => {
    setPrev(true);
    onPrev();
  };
  const handleNext = () => {
    setNext(true);
    onNext();
  };

  const resetBtn = (type) => {
    if (type === "NEXT") {
      setNext(false);
    } else if (type === "PREV") setPrev(false);
    if (isPaused) setIsPaused(false);
  };

  const handleClick = (e) => {
      if (e.clientX < window.innerWidth / 2) {
        handlePrev();
      } else {
        handleNext();
      }
  };

  let timer = 0;

  // const handleMouseDown = (e) => {
  //   setInterval(() => (timer += 1), 1000);
  // };

  return (
    <div
      ref={storyRef}
      onMouseUp={handleClick}
      // onMouseDown={handleMouseDown}
      className={clsx(classes.storyDetail, { [classes.isMobile]: isMobile })}
    >
      <img src={displayedStory.post} className={classes.post} />
      <div className={classes.navigation}>
        <StoryProcess
          isPaused={isPaused}
          isNext={next}
          isPrev={prev}
          onReset={resetBtn}
          onNext={handleNext}
          index={index}
          total={total}
          onPause={handlePause}
        />
        <header>
          <span className={classes.userWrap}>
            <img src={displayedStory.avatar} />
            <p>{displayedStory.user}</p>
          </span>
          <StoryHeaderIcon
            isMobile={isMobile}
            onTogglePause={handlePause}
            isPaused={isPaused}
          />
        </header>
        <StoryFooter username={displayedStory.user} />
        {!isMobile && index > 0 && <PrevBtn onClick={handlePrev} />}
        {!isMobile && index < total && <NextBtn onClick={handleNext} />}
      </div>
    </div>
  );
};

export default StoryDetail;
