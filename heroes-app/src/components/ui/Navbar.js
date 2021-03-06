import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import types from "../../types/types";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext)
  const history = useHistory()

  // console.log(" login:", user)
  // console.log("dispatch:", dispatch)

  const handleLogout = () => {
    // e.preventDefault();
    console.log('test prop(onClick)()')
    dispatch({
      type: types.logout,
    })

    //in jest test compared this history.replace with historyMocks 
    history.replace("/login")

  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {/* //in  jest test used class text-info  */}
          <span className="nav-item nav-link text-info">{user.name}</span>

          <button
            className="nav-item nav-link btn btn-primary"
            onClick={handleLogout}

          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
