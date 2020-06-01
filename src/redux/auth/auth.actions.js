import * as types from './auth.types';

export const fetchAuth = ({ user, session_id }) => (dispatch) => {
  dispatch(showLoader());
  dispatch(updateAuth({ user, session_id }));
  dispatch(hideLoader());
};

export const updateAuth = ({ user, session_id }) => {
  return {
    type: types.FETCH_SUCCESS_AUTH,
    payload: {
      user,
      session_id,
    },
  };
};

export const onLogOut = (payload) => {
  return {
    type: types.LOGOUT,
  };
};

export function regisration(user) {
  return {
    type: types.REGISTRATION,
    payload: user,
  };
}

export function showLoader() {
  return {
    type: types.SHOW_AUTH_LOADER,
  };
}

export function hideLoader() {
  return {
    type: types.HIDE_AUTH_LOADER,
  };
}
