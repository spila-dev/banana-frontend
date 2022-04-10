import { StuffStore } from "~/Functions/Utils/StuffStore";
import { emitters } from "~/Functions/Events/Emitters";

import { getAllStuffApi } from "~/Apis/VersionControlApis/getAllStuffApi";

import { EVENT_EMITTER_EVENTS } from "~/Variables/Constants/Others/otherConstants";

const getAllStuffCrl = () => {
  return async (dispatch, getState) => {
    try {
      const response = await getAllStuffApi();
      logger.log(response);

      StuffStore.schemas = response.data.schemas;
      StuffStore.templates = response.data.templates;

      emitters.emitEvent({ event: EVENT_EMITTER_EVENTS.ALL_STUFF_RECEIVED });
    } catch (error) {
      logger.log("getAllStuffCrl", error);
    }
  };
};

export { getAllStuffCrl };