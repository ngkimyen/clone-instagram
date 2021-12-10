import clsx from "clsx";
import React from "react";
import classes from "./NotificationItem.module.scss";

function calculateWeekFromDate(date) {
   let happenDate = new Date(date)
   let currentDate = new Date()
   let differentInTime = currentDate.getTime() - happenDate.getTime()
   let differentInWeek = differentInTime / ( 1000 * 3600 * 24 * 7)

   // console.log(happenDate)
   return Math.ceil(differentInWeek)
}

const NotificationItem = ({ noti }) => {
  let notiTypeText;

  switch (noti.action.type) {
    case "reply-comment":
      notiTypeText = " mentioned you in a comment: ";
      break;
    case "follow":
      notiTypeText = " started following you";
      break;
    case "like-comment":
      notiTypeText = ` liked your comment: `;
      break;
    default:
      notiTypeText = "";

      return notiTypeText;
  }

  const week = calculateWeekFromDate(noti.date)

  return (
    <li className={classes.notiItem}>
      <img src={noti.user.avatar} className={classes.userAvatar} />
      <div className={clsx(classes.notiContent, {
         [classes.dateInline] : noti.action.type === 'follow'
      }) }>
        <div className={classes.heading}>
          <p className={classes.userName}> {noti.user.name}</p>
          <p>{notiTypeText}</p>
        </div>
        <div className={classes.notiFooter}>
          <p>
            {noti.action.content
              ? noti.action.content
              : noti.action.comment && noti.action.comment}
          </p>
          <p  className={classes.notiDate}> {week}w</p>
        </div>
      </div>
      {noti.action.post && (
        <img src={noti.action.post} className={classes.post} />
      )}
    </li>
  );
};

export default NotificationItem;
