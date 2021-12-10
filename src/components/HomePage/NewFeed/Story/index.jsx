import React, { useEffect, useRef, useState } from "react";
import useHttp from "../../../../custom-hooks/useHttp";
import { getAllStory } from "../../../../store/Api";
import useViewPort from "../../../../custom-hooks/useViewPort"

import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import classes from "./Story.module.scss";

import StoryItem from "./StoryItem";
import Spinner from '../../../UI/Spinner'
import clsx from "clsx";

const Story = () => {
  const { sendRequest, data, status } = useHttp(getAllStory);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [margin, setMargin] = useState();
  const counterRef = useRef(0);
  const {isMobile} = useViewPort()

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  
  const quantityStoryOnShow = isMobile ? 5 : 8;

  const handleNext = () => {
    setShowPrev(true);
    if (counterRef.current >= data.length - quantityStoryOnShow) setShowNext(false);

    counterRef.current++;
    setMargin(`-${counterRef.current * 80}px`);
  };

  const handlePrev = () => {
    if (counterRef.current <= 1) setShowPrev(false);

    counterRef.current--;
    setShowNext(true);
    setMargin(`-${counterRef.current * 80}px`);
  };

  return (
    <section className={clsx(classes.story, {[classes.isMobile] : isMobile})}>
      {status === 'pending' ? <Spinner/> : 
      <div className={classes.storyList}>
        {data &&
          data.map((item, index) => (
            <StoryItem
              key={`story-${item.id}`}
              user={item.user}
              avatar={item.avatar}
              style={{ left: margin }}
              story={data}
              index={index}
            />
          ))}
      </div> }
      {!isMobile && showNext && <NextBtn onClick={handleNext} />}
      {!isMobile && showPrev && <PrevBtn onClick={handlePrev} />}
    </section>
  );
};

export default Story;
