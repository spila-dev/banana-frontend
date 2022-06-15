import { getInitialState } from "variables/constants/initials/initialStates/initialStates";
import { userAction } from "actions/userActions/userActions";
import { messageInputOnChangeAction } from "actions/tempActions/tempActions";
import { sendPrivateMessageApi } from "apis/messageApis";

const sendNewMessageCrl = () => {
  return async (dispatch, getState = getInitialState) => {
    try {
      const {
        temp: {
          messageInputText,
          selectedContact: { privateID },
        },
        user,
      } = getState();

      const response = await sendPrivateMessageApi.sendRequest({
        participantID: privateID,
        message: messageInputText,
      });

      const { chatID, newMessage } = response.data;

      const copyUser = { ...user };

      const chatIndex = copyUser.chats?.findIndex(
        (chat) => chat?.chatID === chatID
      );

      if (chatIndex !== -1) {
        console.log(chatIndex);
        const chat = copyUser.chats[chatIndex] || {
          chatID,
          messages: [newMessage],
        };
        const messages = handleAddNewMessage({
          newMessage,
          messages: chat.messages || [],
        });

        const newChat = { ...chat, messages };

        console.log(newChat);
        copyUser.chats.splice(chatIndex, 1, newChat);

        console.log(copyUser);
      }

      dispatch(userAction({ chats: copyUser.chats }));
      dispatch(messageInputOnChangeAction({ messageInputText: "" }));
    } catch (error) {
      console.log("sendNewMessageCrl", error);
    }
  };
};

const handleAddNewMessage = ({ messages, newMessage }) => {
  const copyMessages = [...messages];

  copyMessages.push(newMessage);

  return copyMessages;
};

export { sendNewMessageCrl };