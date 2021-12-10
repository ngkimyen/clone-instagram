import React, { useEffect } from "react";
import useHttp from "../../../../custom-hooks/useHttp";
import { getPosts } from "../../../../store/Api";
import Spinner from "../../../UI/Spinner";
import PostItem from "./PostItem";

const Posts = () => {
  const { data : loadedPosts, sendRequest } = useHttp(getPosts);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <>{loadedPosts && loadedPosts.map((post) => <PostItem key={post.id} post={post}/>)}</>
  );
};

export default Posts;
