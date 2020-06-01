import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts.reducer';
import { authReducer } from './auth/auth.reducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
