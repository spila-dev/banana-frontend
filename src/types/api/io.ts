import {
  Bio,
  BlackListItem,
  Cellphone,
  ContactItem,
  Contacts,
  Countries,
  FullName,
  FullNameWithUserId,
  NewUser,
  PublicUserData,
  UserData,
  UserId,
  Username,
  VerificationCode,
} from "utility-store/lib/types";

import {
  ChatId,
  ContactItemWithCellphone,
  MessageItem,
  MessageText,
  ParticipantId,
  PrivateChatItem,
  PrivateChats,
  WelcomeMessage,
} from "../datatypes";

export interface CreateNewUserIO {
  input: FullName;
  output: object;
}

export interface LogoutIO {
  input: object;
  output: object;
}

export interface SignInIO {
  input: Cellphone;
  output: object;
}

export interface VerifyIO {
  input: {
    verificationCode: VerificationCode;
  };
  output: {
    newUser: NewUser;
  };
}

export interface GetCountriesIO {
  input: object;
  output: {
    countries: Countries;
  };
}

export interface GetWelcomeMessageIO {
  input: object;
  output: {
    welcomeMessage: WelcomeMessage;
  };
}
export interface PingIO {
  input: object;
  output: object;
}

export interface GetChatInfoIO {
  input: {
    chatId: ChatId;
  };
  output: {
    chatInfo: Omit<PrivateChatItem, "messages">;
  };
}

export interface GetPrivateChatIO {
  input: {
    chatId: ChatId;
  };
  output: {
    privateChat: PrivateChatItem;
  };
}

export interface GetPrivateChatsIO {
  input: object;
  output: {
    privateChats: PrivateChats;
  };
}

export interface JoinRoomIO {
  input: object;
  output: object;
}

export interface SendPrivateMessageIO {
  input: {
    messageText: MessageText;
    participantId: ParticipantId;
  };
  output: {
    chatId: ChatId;
    addedMessage: MessageItem;
  };
}

export interface AddBlockIO {
  input: {
    userId: UserId;
  };
  output: {
    blockedUser: BlackListItem;
  };
}

export interface AddContactIO {
  input: ContactItem;
  output: {
    addedContact: ContactItem;
  };
}

export interface AddContactWithCellphoneIO {
  input: ContactItemWithCellphone;
  output: {
    addedContact: ContactItem;
  };
}

export interface AddContactWithUserIdIO {
  input: FullNameWithUserId;
  output: {
    addedContact: ContactItem;
  };
}

export interface EditContactIO {
  input: FullNameWithUserId;
  output: {
    editedContact: FullNameWithUserId;
  };
}

export interface GetContactsIO {
  input: object;
  output: {
    contacts: Contacts;
  };
}

export interface GetUserDataIO {
  input: object;
  output: {
    user: UserData;
  };
}

export interface GetPublicUserDataIO {
  input: {
    userId: UserId;
  };
  output: {
    publicUserData: PublicUserData;
  };
}

export interface RemoveBlockIO {
  input: {
    userId: UserId;
  };
  output: {
    removedBlock: {
      userId: UserId;
    };
  };
}

export interface RemoveContactIO {
  input: {
    userId: UserId;
  };
  output: {
    removedContact: {
      userId: UserId;
    };
  };
}

export interface UpdatePublicUserDataIO {
  input: FullName & {
    bio: Bio;
    username: Username;
  };
  output: {
    publicUserData: PublicUserData;
  };
}
