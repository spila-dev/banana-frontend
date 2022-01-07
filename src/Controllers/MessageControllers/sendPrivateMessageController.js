import { sendPrivateMessageAPI } from "~/APIs/MessageAPIs/sendPrivateMessageAPI";
import { initialState } from "~/Variables/Constants/Initials/InitialStates/initialStates";

const sendPrivateMessageController = ({ messageInputText }) => {
	return async (dispatch, getState = initialState) => {
		try {
			const { user } = getState();

			await sendPrivateMessageAPI({
				chatID: "Xfl0OHSW-4FrHgX7fUrXHUKGr_jhIqaZApb",
				participantID: user.privateID,
				messageText: messageInputText,
			});
		} catch (error) {
			console.log("sendPrivateMessageController", error);
		}
	};
};

export { sendPrivateMessageController };
