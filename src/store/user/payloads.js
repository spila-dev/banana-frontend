import { USER_ACTION_TYPES } from "store/user/types";

import { fields } from "store/fields";

const userActionPayloads = {
  [USER_ACTION_TYPES.ADD_NEW_CONTACT]: {
    newContact: fields.collection.newContact,
  },
  [USER_ACTION_TYPES.RESET_USER_STATE]: undefined,
  [USER_ACTION_TYPES.UPDATE_USER_CONTACTS]: {
    contacts: fields.collection.contacts,
  },
  [USER_ACTION_TYPES.UPDATE_ALL_USER_DATA]: {
    bio: fields.single.bio,
    blacklist: fields.collection.blacklist,
    chatInfo: fields.collection.chatInfo,
    contacts: fields.collection.contacts,
    countryCode: fields.single.countryCode,
    countryName: fields.single.countryName,
    firstName: fields.single.firstName,
    lastName: fields.single.lastName,
    phoneNumber: fields.single.phoneNumber,
    userId: fields.single.userId,
    username: fields.single.username,
  },
};

export { userActionPayloads };
