import Posts from "./Posts";
import Story from "./Story";
import classes from "./NewFeed.module.scss";
import Card from "../../UI/Card";
import UserSideBar from "../UserSideBar";
import clsx from "clsx";
import useViewPort from "../../../custom-hooks/useViewPort";

const NewFeed = () => {
  const { isTabletMobile, isMobile } = useViewPort();
  return (
    <section className={clsx(classes.newFeed, {[classes.isMobile] : isMobile})}>
      <div
        className={clsx(classes.content, {
          [classes.center]: isTabletMobile,
          [classes.isMobile]: isMobile,
        })}
      >
        <Card>
          <Story />
        </Card>
        <Posts />
      </div>
      {!isTabletMobile && <UserSideBar />}
    </section>
  );
};

export default NewFeed;
