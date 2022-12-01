import { initialGlobalState } from "store/global/initialState";
import { stateStatics } from "store/stateStatics";

const handleGlobalLoadingStateOpenChange = (payload, prevState) => {
  return {
    loading: {
      ...prevState.loading,
      open: payload.open,
    },
  };
};

const handleAppDrawerStateOpenChange = (payload, prevState) => {
  return {
    appDrawer: {
      ...prevState.appDrawer,
      anchor: {
        ...prevState.appDrawer.anchor,
        [prevState.appDrawer.currentAnchor]: payload.open,
      },
    },
  };
};

const handleDialogOpenChange = (payload, prevState) => ({
  dialogState: {
    ...prevState.dialogState,
    [payload.dialogName]: {
      ...prevState.dialogState[payload.dialogName],
      open: payload.open,
      props: payload.props,
    },
  },
});

const handleOnlineStatusStateChange = (payload, prevState) => ({
  onlineStatus: {
    ...prevState.onlineStatus,
    ...payload,
  },
});

const handleAppProgressionChange = (payload, prevState) => ({
  appProgressions: {
    ...prevState.appProgressions,
    ...payload,
  },
});

const handleResetGlobalState = () => ({
  ...initialGlobalState(),
  viewMode: stateStatics.VIEW_MODES.SIGN_IN,
});

const handleUpdateViewMode = (payload) => ({
  viewMode: payload.viewMode,
});

const changeInitialSetupStatus = (payload, prevState) => ({
  initialSetupDetails: {
    ...prevState.initialSetupDetails,
    status: payload.status,
  },
});

const globalReducerHandlers = {
  changeInitialSetupStatus,
  handleAppDrawerStateOpenChange,
  handleAppProgressionChange,
  handleDialogOpenChange,
  handleGlobalLoadingStateOpenChange,
  handleOnlineStatusStateChange,
  handleResetGlobalState,
  handleUpdateViewMode,
};

export { globalReducerHandlers };