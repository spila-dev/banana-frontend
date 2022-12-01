import { appConfigs } from "classes/AppConfigs";

import { stateStatics } from "store/stateStatics";

const defaultDialogStateItemProps = () => ({
  open: false,
  //TODO: Move to appConfigs + read default value from mui
  props: { zIndex: 1300 },
});

const initialGlobalState = () => ({
  appDrawer: {
    anchor: {
      bottom: false,
      left: false,
      right: false,
      top: false,
    },
    currentAnchor: appConfigs.getConfigs().ui.appDrawerCurrentAnchor,
  },
  appProgressions: {
    authenticationProgress: false,
  },
  dialogState: {
    addNewContact: defaultDialogStateItemProps(),
    contacts: defaultDialogStateItemProps(),
    logout: defaultDialogStateItemProps(),
  },
  fullPageLoading: {
    color: "blue",
    //TODO: Move it to configs
    open: true,
    progressColor: "inherit",
    size: 80,
    speedMultiplier: 1,
    type: stateStatics.GLOBAL_LOADING_TYPES.FULL_PAGE,
  },
  onlineStatus: {
    isOnline: false,
    ping: 0,
  },
  viewMode: appConfigs.getConfigs().others.startupViewMode,

  initialSetupDetails: {
    status: stateStatics.INITIAL_SETUP_STATUS.NEVER,
  },
});

export { initialGlobalState, defaultDialogStateItemProps };