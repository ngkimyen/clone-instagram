import React, { useEffect } from "react";
import classes from "./NotificationOverlay.module.scss";
import { getNotifications } from "../../store/Api";
import useHttp from "../../custom-hooks/useHttp";
import Spinner from "../UI/Spinner";
import NotificationItem from "./NotificationItem";
import useViewPort from "../../custom-hooks/useViewPort";
import clsx from "clsx";

const NotificationOverlay = () => {
  const { sendRequest, data, status } = useHttp(getNotifications);
  const {isMobile} = useViewPort()

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <section className={clsx(classes.overlay, { [classes.isMobile] : isMobile})}>
      {status === "pending" ? (
        <Spinner isBig />
      ) : (
        <ul className={classes.container}>
          {data &&
            data.map((item) => <NotificationItem key={item.id} noti={item}/>)}
        </ul>
      )}
    </section>
  );
};

export default NotificationOverlay;
