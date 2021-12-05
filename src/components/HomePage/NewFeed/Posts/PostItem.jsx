import React, { useEffect, useRef, useState } from "react";
import useHttp from "../../../../custom-hooks/useHttp";
import {
  getLikePost,
  getPostComment,
  updateIsLikePost,
  updateLikeQuantityPost,
} from "../../../../store/Api";

import Card from "../../../UI/Card";
import { handleTransformedVariable } from "../../../UI/PostOverlay/PostComment";
import classes from "./PostItem.module.scss";

import PostItemNavigation from "./PostItemNavigation";
import CommentInput from "./PostItemNavigation/CommentInput";
import PostItemComment from "./PostItemNavigation/PostItemComment";
import PostItemDetail from "./PostItemNavigation/PostItemDetail";
import UploadDate from "./PostItemNavigation/UploadDate";
import UserInfo from "./PostItemNavigation/UserInfo";

const PostItem = ({ post }) => {
  const { sendRequest: getCommentFunc, data: updatedComments } =
    useHttp(getPostComment);
  const { sendRequest: updateLikesFunc } = useHttp(updateLikeQuantityPost);
  const {sendRequest: updateIsLikeFunc }= useHttp(updateIsLikePost)
  const { sendRequest: getLikeFunc, data: updatedLikes } = useHttp(getLikePost);
  const postRef = useRef();
  const [isDbClick, setDbClick] = useState(false);
  const counter = useRef(post.likes)
  
  const handleSubmit = () => {
    getCommentFunc({ postId: post.id });
  };
  
  const handleLikePost = async () => {
    if (isDbClick) return;
    
    await updateLikesFunc({
      postId: post.id,
      quantity: updatedLikes ? updatedLikes[1] + 1 : post.likes + 1,
    });
    await updateIsLikeFunc ({
      postId: post.id,
      isLike: true,
    })
    await getLikeFunc({ postId: post.id });
    setDbClick(true);
  };
  
  const handleUnlikePost = async () => {
    await updateLikesFunc({
      postId: post.id,
      quantity: updatedLikes ? updatedLikes[1] - 1 : post.likes - 1,
    });
    await updateIsLikeFunc ({
      postId: post.id,
      isLike: false,
    })
    await getLikeFunc({ postId: post.id });
    setDbClick(false);
  };

  useEffect(() => {
    getLikeFunc({ postId: post.id })
  }, [post.id])
  
  const transformedComments = updatedComments ? updatedComments : handleTransformedVariable(post.comments)
  return (
    <Card>
      <div className={classes.postItem}>
        <UserInfo url={post.url} userName={post.user} />
        <div
          className={classes.postImage}
          ref={postRef}
          onDoubleClick={handleLikePost}
        >
          <img src={post.url} alt="post" />
        </div>
        <PostItemNavigation
          onLike={handleLikePost}
          onUnlike={handleUnlikePost} 
          isLike={updatedLikes ? updatedLikes[0] : post.isLike}
        />
        <PostItemDetail
          likes={updatedLikes ? updatedLikes[1] : post.likes}
          userName={post.user}
          title={post.title}
        />
        {transformedComments
          && transformedComments.map((cmt) => (
              <PostItemComment key={cmt.id} comment={cmt} />
            )) }
        <UploadDate date={post.date} />
        <CommentInput postId={post.id} onSubmit={handleSubmit} />
      </div>
    </Card>
  );
};

export default PostItem;
