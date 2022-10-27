import { actions } from "actions/actions";

import ChatBar from "components/rightSide/ChatBar";
import CustomBox from "components/generals/boxes/CustomBox";
import CustomFlexBox from "components/generals/boxes/CustomFlexBox";
import MessageInput from "components/rightSide/MessageInput";
import GridContainer from "components/generals/boxes/GridContainer";

import { controllers } from "controllers";

import { useMainContext } from "hooks/useMainContext";

const RightSideContainer = () => {
  const {
    state,
    hooksOutput: { dispatch },
  } = useMainContext();

  const handleInputChange = ({ target: { value } }) => {
    dispatch(actions.messageInputOnChange({ messageInputTextValue: value }));
  };

  const handleSendMessage = async () => {
    dispatch(controllers.sendPrivateMessage());
  };

  const handleMessageContainerCloseClick = () => {
    dispatch(actions.selectedUserForPrivateChat({ selectedContactId: "" }));
  };

  // const chat = arrayUtilities.findByPropValueEquality(
  //   user.chats,
  //   userId,
  //   "participantId"
  // );

  // if (!chat && !selectedContact) {
  //   return null;
  // }

  return (
    <GridContainer
      sx={{ backgroundColor: "tomato", height: "100%" }}
      item
      lg={9}
      md={8}
    >
      {state.temp.selectedUserForPrivateChat.userId && (
        <CustomFlexBox
          col
          sx={{ width: "100%", height: "100%" }}
          jc="space-between"
          ai="center"
        >
          <CustomBox sx={{ height: "50px", width: "100%" }}>
            <ChatBar
              onMessageContainerCloseClick={handleMessageContainerCloseClick}
              chatName={`${state.temp.selectedUserForPrivateChat.firstName} ${state.temp.selectedUserForPrivateChat.lastName}`}
            />
          </CustomBox>

          <CustomBox sx={{ height: "100%", width: "100%" }}>
            {/* <MessageList
              messages={chat?.messages || []}
              user={user}
            /> */}
          </CustomBox>

          <CustomBox sx={{ width: "100%" }}>
            <MessageInput
              messageInputTextValue={state.temp.messageInputTextValue}
              onSendMessage={handleSendMessage}
              onInputChange={handleInputChange}
            />
          </CustomBox>
        </CustomFlexBox>
      )}
    </GridContainer>
  );
};

export default RightSideContainer;
