import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'


const PrivateRoute = (
  { isAuthenticated,
    component: Component,
    //...rest lo que sea que le mande
    ...rest
  }
) => {

  // console.log("rest:", rest.location.pathname)

  localStorage.setItem('lastPathname', rest.location.pathname)



  return (
    <Route
      // aca es recibido
      {...rest}
      component={
        (props) => (isAuthenticated)
          ? <Component {...props} />
          : <Redirect to="/login" />
      }
    />

  )
}


PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRoute
