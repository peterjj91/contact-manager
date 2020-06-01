import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.session_id ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
