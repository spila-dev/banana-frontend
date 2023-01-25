import { useEffect } from "react";

import { actions } from "src/store/actions";

import { commonTasks } from "src/classes/CommonTasks";
import { eventManager } from "src/classes/EventManager";

import ChatBar from "src/components/rightSide/ChatBar";
import { Box } from "src/components/general/box";
import MessageInput from "src/components/rightSide/MessageInput";
import MessageList from "src/components/rightSide/MessageList";

import { controllers } from "src/controllers";

import { useDispatch, useSelector } from "src/hooks/useThunkReducer";

const RightSide = ({ participants }) => {
  const dispatch = useDispatch();
  const state = useSelector();

  useEffect(() => {
    const eventName = eventManager.EVENT_EMITTER_EVENTS.MESSAGE_SENT;
    eventManager.addListener(eventName, commonTasks.resetMessageInputText);
  }, []);

  const selectedUserId = state.message.selectedUserForPrivateChat.userId;

  const selectedParticipantToChat = participants.find(
    (p) => p.participantId === selectedUserId
  );

  const selectedChatMessages = state.message.privateChats.find((pc) => {
    return pc.participants.find((p) => p.participantId === selectedUserId);
  })?.messages;

  const handleInputChange = ({ target: { value } }) => {
    dispatch(actions.messageInputOnChange({ messageInputTextValue: value }));
  };

  const handleSendMessage = async () => {
    dispatch(controllers.sendPrivateMessage());
  };

  const handleMessageContainerCloseClick = () => {
    dispatch(actions.closeRightSide());
  };

  return (
    <Box.Grid
      container
      sx={{ backgroundColor: "tomato", height: "100%" }}
      item
      lg={9}
      md={8}
    >
      {selectedUserId && (
        <Box.Flex
          col
          sx={{ width: "100%", height: "100%" }}
          jc="space-between"
          ai="center"
        >
          <Box.Div
            style={{
              height: "50px",
              width: "100%",
            }}
          >
            <ChatBar
              onMessageContainerCloseClick={handleMessageContainerCloseClick}
              contactName={`${selectedParticipantToChat.firstName} ${selectedParticipantToChat.lastName}`}
            />
          </Box.Div>

          <Box.Div style={{ height: "100%", width: "100%" }}>
            <MessageList
              currentUserId={state.user.userId}
              messages={selectedChatMessages || []}
            />
          </Box.Div>

          <Box.Div style={{ width: "100%" }}>
            <MessageInput
              messageInputTextValue={state.message.messageInputTextValue}
              onSendMessage={handleSendMessage}
              onInputChange={handleInputChange}
            />
          </Box.Div>
        </Box.Flex>
      )}
    </Box.Grid>
  );
};

export default RightSide;