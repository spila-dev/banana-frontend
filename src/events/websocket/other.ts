import { websocket } from "~/classes/websocket/Websocket";
import { StringMap } from "~/types";

const otherEvents = () => {
  websocket.client.onAny((event, ...args) => {
    console.debug(`socket event:${event}`, ...args);
  });

  websocket.client.on("pong", (...args) => console.debug(...args));
  window.ping = (data: StringMap) => websocket.client.emit("ping", data);
};

export { otherEvents };
