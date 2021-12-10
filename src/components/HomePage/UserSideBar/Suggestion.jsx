import React, { useEffect } from "react";
import useHttp from "../../../custom-hooks/useHttp";
import { getNewFeedSuggestion } from "../../../store/Api";
import SuggestionItem from "./SuggestionItem";
import classes from "./UserSideBar.module.scss";

const Suggestion = () => {
  const { sendRequest, data: suggestUsers } = useHttp(getNewFeedSuggestion);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <section className={classes.suggestion}>
      <span className={classes.header}>
        <p className={classes.suggestionText}>Suggestion For You </p>
        <p className={classes.seeMore}> See All</p>
      </span>
      <ul className={classes.suggestionList}>
        {suggestUsers &&
          suggestUsers.map((user) => (
            <SuggestionItem key={user.id} user={user} />
          ))}
      </ul>
    </section>
  );
};

export default Suggestion;
