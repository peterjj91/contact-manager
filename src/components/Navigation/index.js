import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Login from '../../pages/Login';
import Registration from '../../pages/Registration';
import Contacts from '../../pages/Contacts';
import ContactsDetail from '../../pages/ContactsDetail';
import ErrorPage from '../../pages/ErrorPage';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const { location } = useHistory();
  const auth = useSelector((state) => state.auth);

  // If the user exists, then redirect from login page and registration page
  if (
    auth.session_id &&
    (location.pathname === '/login' || location.pathname === '/registration')
  ) {
    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <PrivateRoute path="/contacts/:id">
        <ContactsDetail />
      </PrivateRoute>
      <PrivateRoute path="/contacts" exact>
        <Contacts />
      </PrivateRoute>
      <PrivateRoute path="/" exact>
        <Contacts />
      </PrivateRoute>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Route path="/404" component={ErrorPage} />

      <Redirect to="/404" />
    </Switch>
  );
};
