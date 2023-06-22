import { useEffect } from "react";

import { socketEmitterStore } from "~/classes/websocket/SocketEmitterStore";
import { websocket } from "~/classes/websocket/Websocket";
import Box from "~/components/general/box";
import LeftSide from "~/containers/leftSide";
import Portal from "~/containers/portal";
import { useGlobalStore, useMessageStore, useUserStore } from "~/store";
import {
  GetPrivateChatsIO,
  GetPublicUserDataIO,
  GetUserDataIO,
  ParticipantItem,
} from "~/types";

const Messenger = () => {
  const messageStore = useMessageStore();
  const globalState = useGlobalStore();
  const userState = useUserStore();

  useEffect(() => {
    const fn = async () => {
      //TODO: Update in/out events with events from server
      socketEmitterStore.events.joinRoom.emit();

      await socketEmitterStore.events.getPrivateChats.emitFull<GetPrivateChatsIO>(
        {},
        async ({ data }) => {
          for (const item of data.privateChats) {
            const participant = item.participants.find(
              (i: ParticipantItem) => i.participantId !== userState.userId
            )!;

            const isUserExist = globalState.users.some(
              (i) => i.userId === participant.participantId
            );
            if (isUserExist) continue;

            const { publicUserData } =
              await socketEmitterStore.events.getPublicUserData.emitFull<GetPublicUserDataIO>(
                {
                  userId: participant.participantId,
                }
              );

            globalState.addUser({
              ...publicUserData,
              isContact: false,
            });

            return data;
          }

          messageStore.setPrivateChats(data.privateChats);

          return data;
        }
      );

      socketEmitterStore.events.getUserData.emitFull<GetUserDataIO>(
        {},
        async ({ data }) => {
          const users = data.user.contacts.map((item) => ({
            ...item,
            isContact: true,
          }));

          globalState.setUsers(users);

          return data;
        }
      );

      websocket.client.on("newPrivateChatMessage", (_data) => {
        // const newPrivateChatMessage = ({ chatId, newMessage }) => {
        //   return (dispatch, getState) => {
        //     const state = getState();
        //     if (isChatExist(state, chatId))
        //       return dispatch(actions.addNewMessage({ chatId, newMessage }));
        //     websocket.client.emit("getChatInfo", { chatId }, (response) => {
        //       dispatch(
        //         actions.createNewPrivateChat({
        //           privateChat: {
        //             ...response.data.chatInfo,
        //             messages: [newMessage],
        //           },
        //         })
        //       );
        //     });
        //   };
        // };
        // const isChatExist = (state, chatId) =>
        //   messageState.privateChats.some((item) => item.chatId === chatId);
      });
    };

    fn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box.Grid
      container
      style={{
        height: "100vh",
      }}
    >
      <Portal />
      <LeftSide />
      {/* 
      <RightSide /> */}
    </Box.Grid>
  );
};

export default Messenger;