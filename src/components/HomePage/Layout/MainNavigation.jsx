import classes from "./MainNavigation.module.scss";

import SearchInput from "./SearchInput";
import Navigation from "./Navigation/Navigation";
import HeaderLogo from "./Navigation/HeaderLogo";
import useViewPort from "../../../custom-hooks/useViewPort"

const MainNavigation = () => {
  const { isMobile} = useViewPort()
  
  return (
    <section className={classes.header}>
      <div className={classes.headerContainer}>
        <HeaderLogo/>
        {!isMobile && <SearchInput /> }
        <Navigation />
      </div>
    </section>
  );
};

export default MainNavigation;
