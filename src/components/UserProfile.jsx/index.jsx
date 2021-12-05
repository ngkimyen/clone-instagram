import clsx from "clsx";
import React, {useEffect } from "react";
import useHttp from "../../custom-hooks/useHttp";
import useViewPort from "../../custom-hooks/useViewPort";
import { getUserPosts } from "../../store/Api";
import Spinner from "../UI/Spinner";
import UserInfo from "./UserInfo";
import UserPost from "./UserPost";
import classes from "./UserProfile.module.scss";

const UserProfile = () => {
  const {isMobile} = useViewPort()
  const { sendRequest, data, status } = useHttp(getUserPosts);
  useEffect(() => sendRequest(), [sendRequest]);
  
  return (
    <>
      {status === "pending" ? (
        <Spinner isCentered />
      ) : (
        <div className={clsx(classes.container, {[classes.isMobile] : isMobile})}>
          {data && (
            <>
              <UserInfo postQuantity={data.length} />
              <UserPost data={data} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserProfile;
