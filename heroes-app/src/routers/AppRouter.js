import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import Login from "../components/login/Login";
import Navbar from "../components/ui/Navbar";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//initial screen
const AppRouter = () => {

  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    //here, there are initial router with component <Login/>
    <Router>
      <div>
        <Switch>
          {/* Here Login */}
          {/* <Route exact path="/login" component={Login} /> */}

          {/* Here routePublic, when user writing in path /login redirect 
          the same actual component */}
          <PublicRoute
            exact path="/login"
            component={Login}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
