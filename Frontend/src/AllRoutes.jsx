import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Signin from "./components/auth/Signin";
import EditProfile from "./components/user/EditProfile";
import Profile from "./components/user/Profile";
import Signup from "./components/user/Signup";
import Users from "./components/user/Users";
import PrivateRoute from "./components/auth/PrivateRoute";
import Menu from "./components/home/Menu";
import CastDetails from "./components/movie/CastDetails";
import MovieDetailsPage from "./components/movie/MovieDetailsPage";
import TvDetailsPage from "./components/movie/TvDetailsPage";
import PersonPage from "./components/person/PersonPage";

const routes = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/signin",
    Component: Signin,
  },
  {
    path: "/user/edit/:userId",
    private: true,
    Component: EditProfile,
  },
  {
    path: "/user/:userId",
    Component: Profile,
  },
  {
    path: "/movie/:id",
    Component: MovieDetailsPage,
  },
  {
    path: "/tv/:id",
    Component: TvDetailsPage,
  },
  {
    path: "/person/:id",
    Component: PersonPage,
  },
  {
    path: "/movie/:id/cast",
    Component: CastDetails,
  },
];
const AllRoutes = () => {
  return (
    <div className="main-components">
      <Menu />
      <div className="routes">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={
                  route.private ? (
                    <PrivateRoute Component={route.Component} />
                  ) : (
                    <route.Component></route.Component>
                  )
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default AllRoutes;
