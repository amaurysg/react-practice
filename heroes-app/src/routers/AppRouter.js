import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/login/Login";
import Navbar from "../components/ui/Navbar";
import DashboardRoutes from "./DashboardRoutes";

//initial screen
const AppRouter = () => {
  return (
    //here, there are initial router with component <Login/>
    <Router>
      <div>
        <Switch>
          {/* Here Login */}
          <Route exact path="/login" component={Login} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
