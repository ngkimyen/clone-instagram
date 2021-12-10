import { Suspense } from "react";
import { lazy, useContext, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Spinner from "./components/UI/Spinner";

import { LoginContext } from "./store/LoginProvider";

const HomePage = lazy(() => import("./components/HomePage"));
const Login = lazy(() => import("./components/Login/Index"));

function App() {
  const [loginState, dispatch] = useContext(LoginContext);
<<<<<<< HEAD
  
  useEffect(() => {
    if (localStorage.getItem("isLogin") === true) dispatch("LOGIN");
  }, [dispatch]);
=======
  useEffect(() => {
    if (localStorage.getItem("isLogin") === true) dispatch("LOGIN");
  }, []);
>>>>>>> 74116d9099fb08d7106f6ab9d1592e7da8910975

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
<<<<<<< HEAD
            path="/"
            element={!loginState.isLogin ? <Login /> : <HomePage isHomePage />}
          />
          <Route
            path={`/${localStorage.getItem("user")}`}
            element={<HomePage />}
          />
          <Route path={`*`} element={<div>Not found</div>} />
=======
            path="/clone-instagram/"
            element={!loginState.isLogin ? <Login /> : <HomePage isHomePage />}
          />
          <Route
            path={`/clone-instagram/${localStorage.getItem("user")}`}
            element={<HomePage />}
          />
          {/* <Route path={`*`} element={<div>Not found</div>} /> */}
>>>>>>> 74116d9099fb08d7106f6ab9d1592e7da8910975
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
