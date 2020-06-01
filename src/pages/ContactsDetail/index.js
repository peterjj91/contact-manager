import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CircularProgress, Typography, Divider, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CallApi from '../../api/api';
import { useStyles } from './styles';

const ContactsDetail = () => {
  const params = useParams();
  const classes = useStyles();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.id) {
      const queryBody = {
        params: {
          delay: 3,
        },
      };

      CallApi.get(`/unknown/${params.id}`, queryBody)
        .then((data) => {
          return setContact(data.data);
        })
        .then(() => setLoading(false))
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [params.id]);

  if (error) {
    return <Typography variant="h6">Oops, invalid reguest</Typography>;
  }

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <Typography variant="h6" className={classes.back}>
        <Link to="/contacts">
          <ArrowBackIcon />
        </Link>
        <Box className={classes.text}>Back</Box>
      </Typography>

      <Divider className={classes.divider} />

      <Typography variant="h6">
        <strong>Title:</strong> {contact.name}
      </Typography>
      <Typography variant="h6">
        <strong>Year:</strong> {contact.year}
      </Typography>
      <Typography variant="h6">
        <strong>Color:</strong> {contact.color}
      </Typography>
    </>
  );
};

export default ContactsDetail;
