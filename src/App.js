import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import Layout from './layout';
import { Navigation } from './components/Navigation';
import { fetchAuth } from './redux/auth/auth.actions';

function App({ fetchAuth }) {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.user) {
      fetchAuth({ user: auth.user, session_id: auth.session_id });
    }
  }, [auth.user, auth.session_id, fetchAuth]);

  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
      </Layout>
    </BrowserRouter>
  );
}

const mapDispatchToProps = {
  fetchAuth: fetchAuth,
};

export default connect(null, mapDispatchToProps)(App);
