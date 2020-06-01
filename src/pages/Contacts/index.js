import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Table from '../../components/Table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts.actions';
import CallApi from '../../api/api';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.fetchedContacts);
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.session_id) {
      const queryBody = {
        params: {
          delay: 3,
        },
      };

      CallApi.get('/unknown', queryBody)
        .then((data) => {
          return dispatch(
            fetchContacts({
              fetchedContacts: data.data,
            })
          );
        })
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
  }, [auth.session_id, dispatch]);

  return loading ? <CircularProgress /> : <Table rows={contacts} />;
};

export default Contacts;
