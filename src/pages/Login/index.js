import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Button,
  ButtonGroup,
  TextField,
  Typography,
  Grid,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { Alert } from '../../components/UI/Alert';
import { useStyles } from './styles';
import { updateAuth } from '../../redux/auth/auth.actions';
import CallApi from '../../api/api';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit, errors, control } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = (user) => {
    setLoading(true);
    setError('');

    const queryBody = {
      params: {
        delay: 5,
      },
      body: {
        username: user.email,
        password: user.password,
      },
    };

    CallApi.post('/login', queryBody)
      .then((data) => {
        return dispatch(
          updateAuth({
            user: {
              username: user.email,
              password: user.password,
            },
            session_id: data.token,
          })
        );
      })
      .then((data) => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error.error);
        setLoading(false);
      });
  };

  const goRegistration = () => {
    history.push('/registration');
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onLogin)} className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Sign in</Typography>

            <p>
              email: eve.holt@reqres.in <br /> password: cityslicka
            </p>
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="email"
              rules={{
                required: 'Fill in the field',
                minLength: {
                  value: 2,
                  message: 'Min length is 2',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Enter a valid email address',
                },
              }}
              as={<TextField label="Email" />}
              control={control}
              helperText={errors?.email?.message}
              error={!!errors?.email}
              defaultValue=""
              disabled={loading}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name="password"
              rules={{
                required: 'Fill in the field',
                minLength: {
                  value: 6,
                  message: 'Min length is 6',
                },
              }}
              as={<TextField label="Password" type="password" />}
              control={control}
              helperText={errors?.password?.message}
              error={!!errors?.password}
              defaultValue=""
              disabled={loading}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              className={classes.button}
              disabled={loading}
            >
              Login
            </Button>
          </Grid>

          {error && (
            <Grid item xs={12}>
              <Alert severity="error">{error}</Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <ButtonGroup color="primary" variant="text" disableElevation>
              <Button onClick={goRegistration}>Don't have account?</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
