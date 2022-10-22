import { io } from "socket.io-client";

import { appConfigs } from "classes/AppConfigs";

const socket = io(appConfigs.getConfigs().apiConfigs.SERVER_BASE_URL);

export { socket };