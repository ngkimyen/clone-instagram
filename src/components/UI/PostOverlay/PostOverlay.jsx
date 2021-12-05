import React from "react";
import classes from "./PostOverlay.module.scss";
import CloseBtn from "../Svg/CloseBtn";
import PostDetails from "./PostDetails";
import PrevBtn from "../../HomePage/NewFeed/Story/PrevBtn";
import NextBtn from "../../HomePage/NewFeed/Story/NextBtn";
import useHandleNextPrev from "../../../custom-hooks/useHandleNextPrev";

const PostOverlay = ({ index, posts, onClose}) => {
  const { handlePrevItem, handleNextItem, displayedItem, counter } =
    useHandleNextPrev(index, posts);
  return (
    <section className={classes.postOverlay}>
      <PostDetails
        displayedItem={displayedItem}
        index={index}
        posts={posts}
      />
      <CloseBtn onClick={onClose} />
      {counter > 0 && <PrevBtn onClick={handlePrevItem} />}
      {counter < posts.length - 1 && (
        <NextBtn onClick={handleNextItem} />
      )}
    </section>
  );
};

export default PostOverlay;
