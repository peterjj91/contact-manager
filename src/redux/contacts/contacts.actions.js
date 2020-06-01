import {
  CREATE_CONTACT,
  HIDE_LOADER,
  SHOW_LOADER,
  DELETE_CONTACT,
  UPDATE_CONTACTS,
} from './contacts.types';

export const fetchContacts = ({ fetchedContacts }) => (dispatch) => {
  dispatch(showLoader());
  dispatch(updateContacts({ fetchedContacts }));
  dispatch(hideLoader());
};

export function createContact(contact) {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
}

export function deleteContact(contact) {
  return {
    type: DELETE_CONTACT,
    payload: contact,
  };
}

export function updateContacts({ fetchedContacts }) {
  return {
    type: UPDATE_CONTACTS,
    payload: {
      fetchedContacts: fetchedContacts,
    },
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}
