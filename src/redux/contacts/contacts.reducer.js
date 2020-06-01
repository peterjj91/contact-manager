import {
  CREATE_CONTACT,
  UPDATE_CONTACTS,
  DELETE_CONTACT,
  SHOW_LOADER,
  HIDE_LOADER,
} from './contacts.types';

const initialState = {
  contacts: [],
  fetchedContacts: [],
  loading: false,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return { ...state, contacts: state.contacts.concat([action.payload]) };
    case DELETE_CONTACT:
      return { ...state, contacts: state.contacts.concat([action.payload]) };
    case UPDATE_CONTACTS:
      return { ...state, fetchedContacts: action.payload.fetchedContacts };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
