import React, { useEffect, useRef, useState } from "react";
import classes from "./StoryProcess.module.scss";

const StoryProcess = ({
  isPaused,
  isNext,
  isPrev,
  onReset,
  onNext,
  index,
  total,
  onPause,
}) => {
  const [process, setProcess] = useState(0);
  const counter = useRef(0);
  const PercentPerHalfSecond = 100 / 50;

  useEffect(() => {
    if (isNext || isPrev) {
      counter.current = 0;
      setProcess(0);
      onReset(isNext ? "NEXT" : "PREV");
    }

    const timer = setInterval(() => {
      if (counter.current >= 50) {
        if (index >= total) {
          onPause();
          return;
        }
        onNext();
        return;
      }
      counter.current++;
      setProcess(counter.current * PercentPerHalfSecond);
    }, 200);

    if (isPaused) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isPaused, isNext, isPrev, onReset]);

  return (
    <div className={classes.storyProcess}>
      <div className={classes.background}></div>
      <div
        className={classes.runningProcess}
        style={{ width: `${process}%` }}
      ></div>
    </div>
  );
};

export default StoryProcess;
