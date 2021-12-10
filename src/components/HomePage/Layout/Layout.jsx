import MainNavigation from './MainNavigation';

import classes from './Layout.module.scss'
import NavIconProvider from '../../../store/NavIconProvider';

const Layout = ({children}) => {
  return (
    <NavIconProvider >
      <MainNavigation />
      <main className={classes.mainWrap}>
        {children}
      </main>
    </NavIconProvider >
  );
};

export default Layout;