import classes from "./Navigation.module.scss";

import HomeIcon from "./HomeIcon";
import MessengerIcon from "./MessengerIcon";
import NewPostIcon from "./NewPostIcon";
import ExploreIcon from "./ExploreIcon";
import UserAvatar from "./UserAvatar";
import Notification from "./Notification";
import useViewPort from "../../../../custom-hooks/useViewPort";

const Navigation = () => {
  const {isMobile} = useViewPort()
  return (
    <nav className={classes.navigation}>
        {!isMobile && <HomeIcon />}
        <MessengerIcon />
        <NewPostIcon />
        <ExploreIcon />
        <Notification />
        <UserAvatar />
    </nav>
  );
};

export default Navigation;
