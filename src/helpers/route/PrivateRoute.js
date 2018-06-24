import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import LayoutMain from "../../components/LayoutMain"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    // hardcode login
    localStorage.getItem('jwtToken') || '1' ? (
      <div className="wrap-component">
        <LayoutMain>
          <Component {...props} />
        </LayoutMain>
      </div>
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

export default PrivateRoute
