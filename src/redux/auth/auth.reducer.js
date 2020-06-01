import {
  SHOW_AUTH_LOADER,
  HIDE_AUTH_LOADER,
  FETCH_SUCCESS_AUTH,
  LOGOUT,
} from './auth.types';
import { cookies } from '../../utils/cookies';

const initialState = {
  user: cookies.get('user'),
  session_id: cookies.get('session_id'),
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_AUTH:
      return {
        ...state,
        user: action.payload.user,
        session_id: action.payload.session_id,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        session_id: null,
      };
    case SHOW_AUTH_LOADER:
      return { ...state, loading: true };
    case HIDE_AUTH_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
