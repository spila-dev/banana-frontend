import { actionHandler } from "src/classes/ActionHandler";

import { NOTIFICATION_ACTION_TYPES } from "src/store/notification/types";

const errorNotification = (payload) =>
  actionHandler(NOTIFICATION_ACTION_TYPES.ERROR_NOTIFICATION, payload);

const notificationActions = {
  errorNotification,
};

export { notificationActions };
