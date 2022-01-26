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
  
  useEffect(() => {
    if (localStorage.getItem("isLogin") === true) dispatch("LOGIN");
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path={"/"}
            element={!loginState.isLogin ? <Login /> : <HomePage isHomePage />}

          />
          <Route
            path={`/${localStorage.getItem("user")}`}
            element={<HomePage />}
          />
          <Route path={`*`} element={<div>Not found hehe</div>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
