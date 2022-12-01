import { actionHandler } from "classes/ActionHandler";

import { USER_ACTION_TYPES } from "store/user/types";

const addNewContact = (payload) =>
  actionHandler(USER_ACTION_TYPES.ADD_NEW_CONTACT, payload);

const updateAllUserData = (payload) =>
  actionHandler(USER_ACTION_TYPES.UPDATE_ALL_USER_DATA, payload);

const updateAllUserContacts = (payload) =>
  actionHandler(USER_ACTION_TYPES.UPDATE_USER_CONTACTS, payload);

const resetUserState = () => actionHandler(USER_ACTION_TYPES.RESET_USER_STATE);

const userActions = {
  addNewContact,
  resetUserState,
  updateAllUserContacts,
  updateAllUserData,
};

export { userActions };