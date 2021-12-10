import React, { useEffect, useRef, useState } from "react";
import useHttp from "../../../custom-hooks/useHttp";
import clsx from "clsx";
import ava from "../../../Image/avatar.jpeg";
import {
  getLikePost,
  getPostComment,
  updateIsLikePost,
  updateLikeQuantityPost,
} from "../../../store/Api";
import PostItemNavigation from "../../HomePage/NewFeed/Posts/PostItemNavigation";
import CommentInput from "../../HomePage/NewFeed/Posts/PostItemNavigation/CommentInput";
import PostItemDetail from "../../HomePage/NewFeed/Posts/PostItemNavigation/PostItemDetail";
import UserInfo from "../../HomePage/NewFeed/Posts/PostItemNavigation/UserInfo";
import PostComment from "./PostComment";
import useViewPort from "../../../custom-hooks/useViewPort";
import classes from "./PostDetails.module.scss";

const PostDetails = ({ displayedItem }) => {
  const { sendRequest: getCommentsFunc, data: updatedComments } =
    useHttp(getPostComment);
  let {
    sendRequest: getLikesFunc,
    data: updatedLikes,
    likeStatus,
  } = useHttp(getLikePost);
  const { sendRequest: updateLikesFunc } = useHttp(updateLikeQuantityPost);
  const { sendRequest: updateIsLikeFunc } = useHttp(updateIsLikePost);
  const likeRef = useRef(displayedItem.likes);
  const [isChanged, setIsChanged] = useState(false);

  const { isTablet } = useViewPort();
  const dummy = {
    postId: displayedItem.id,
    isUserPost: true,
  };

  const handleSubmit = async () => {
    await getCommentsFunc({
      ...dummy,
    });
    setIsChanged(false);
  };

  const handleLikePost = async () => {
    await updateLikesFunc({
      ...dummy,
      quantity: (likeRef.current += 1),
    });
    await updateIsLikeFunc({
      ...dummy,
      isLike: true,
    });
    await getLikesFunc({
      ...dummy,
    });
    setIsChanged(false);
  };

  const handleUnlikePost = async () => {
    await updateLikesFunc({
      ...dummy,
      quantity: (likeRef.current -= 1),
    });
    await updateIsLikeFunc({
      ...dummy,
      isLike: false,
    });
    await getLikesFunc({
      ...dummy,
    });
    setIsChanged(false);
  };

  useEffect(() => {
    async function fetchData() {
      await getLikesFunc({
        ...dummy,
      });
      setIsChanged(true);
      likeRef.current = displayedItem.likes;
    }
    fetchData();
  }, [displayedItem.id]);

  return (
    <div className={`${classes.postDetails} ${isTablet && classes.isTablet}`}>
      {likeStatus === "pending" ? (
        <div></div>
      ) : (
        <>
          <div className={classes.postImage}>
            <img src={displayedItem.post} />
          </div>
          <div className={`${classes.details} ${isTablet && classes.isTablet}`}>
            <UserInfo url={ava} userName={localStorage.getItem("user")} />
            <PostComment
              comments={
                !isChanged
                  ? updatedComments
                    ? updatedComments
                    : displayedItem.comments
                  : displayedItem.comments
              }
            />
            <PostItemNavigation
              onLike={handleLikePost}
              onUnlike={handleUnlikePost}
              isLike={updatedLikes && updatedLikes[0]}
            />
            <PostItemDetail likes={updatedLikes && updatedLikes[1]} />
            <CommentInput
              postId={displayedItem.id}
              onSubmit={handleSubmit}
              isUserPost
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
