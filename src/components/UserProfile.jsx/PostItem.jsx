import React, { useState } from "react";
import classes from "./PostItem.module.scss";
import Modal from "../UI/Modal";
import PostOverlay from "../UI/PostOverlay/PostOverlay";
import { handleTransformedVariable } from "../UI/PostOverlay/PostComment";
import useViewPort from "../../custom-hooks/useViewPort";
import clsx from "clsx";

const PostItem = ({ post, index, data}) => {
  const [isClicked, setIsClicked] = useState(false);
  const {isMobile} = useViewPort()
  const transformedComments = handleTransformedVariable(post.comments)

  const handleClick = () => {
    document.body.style.overflow = "hidden";
    setIsClicked(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "unset";
    setIsClicked(false);
  };
  return (
    <>
      {!isMobile && isClicked && (
        <Modal
          overlay={
            <PostOverlay index={index} posts={data} onClose={handleClose}/>
          }
          isShow={isClicked}
          noBackdrop
          isUnderRoot
          onClose={handleClose}
        />
      )}
      <div className={clsx(classes.postItem, {[classes.isMobile] : isMobile})} onClick={handleClick}>
        <img src={post.post} className={classes.postImage}/>
        <span className={classes.shortDescription}>
          <div className={classes.icon}>
            <i className="fas fa-heart"></i>
            {post.likes}
          </div>
          <div className={classes.comments}>
            <i className="fas fa-comment"></i>
            {transformedComments && transformedComments.length}
          </div>
        </span>
      </div>
    </>
  );
};

export default PostItem;
