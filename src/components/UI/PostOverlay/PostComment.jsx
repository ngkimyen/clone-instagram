import React from "react";
import UserInfo from "../../HomePage/NewFeed/Posts/PostItemNavigation/UserInfo";
import classes from "./PostComment.module.scss";

export const handleTransformedVariable = (object) => {
   let transformedVariable = [];
   for ( let key in object ) {
      transformedVariable.push({
         id: key,
         ...object[key]
      })
   }

   return transformedVariable;
};

const PostComment = ({ comments }) => {
   const transformedComments = handleTransformedVariable(comments)
   return (
    <div className={classes.postComment}>
      {transformedComments && transformedComments.map(comment => 
        <div className={classes.commentItem} key={comment.id}>
          <UserInfo url={comment.avatar} userName={comment.user} isComment comment={comment.content}/>
        </div>
      ) }
    </div>
  );
};

export default PostComment;
