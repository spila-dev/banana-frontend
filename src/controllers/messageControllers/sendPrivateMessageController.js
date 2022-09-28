import { actions } from "actions/actions";

import { commonFunctionalities } from "classes/CommonFunctionalities";
import { apiManager } from "classes/apiClasses/ApiManager";

import { printCatchError } from "functions/utilities/otherUtilities";

import { getInitialState } from "variables/initials/initialStates/initialStates";

const sendPrivateMessageController = () => {
  return async (dispatch, getState = getInitialState) => {
    try {
      const {
        temp: {
          messageInputText,
          selectedContact: { privateId },
        },
      } = getState();

      const response =
        await apiManager.apis.sendPrivateMessage.sendFullFeaturedRequest({
          message: messageInputText,
          participantId: privateId,
        });

      const { chatId, newMessage } = response.data;
      dispatch(actions.addNewMessageToChat({ chatId, newMessage }));

      commonFunctionalities.resetMessageInputText();
    } catch (error) {
      printCatchError(sendPrivateMessageController.name, error);
    }
  };
};

export { sendPrivateMessageController };
