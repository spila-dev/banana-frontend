import { actionCreator } from "~/Functions/Utils/actionCreator";

import { globalInitialActions } from "~/Variables/Constants/Initials/InitialActions/initialActions";

const {
	appDrawerInitialAction,
	backdropInitialAction,
	dialogInitialAction,
	viewModeInitialAction,
} = globalInitialActions;

const viewModeAction = (payload = viewModeInitialAction.payload) =>
	actionCreator(viewModeInitialAction.type, payload);

const appDrawerAction = (payload = appDrawerInitialAction.payload) =>
	actionCreator(appDrawerInitialAction.type, payload);

const dialogAction = (payload = dialogInitialAction.payload) =>
	actionCreator(dialogInitialAction.type, payload);

const backdropAction = (payload = backdropInitialAction.payload) =>
	actionCreator(backdropInitialAction.type, payload);

export { viewModeAction, appDrawerAction, dialogAction, backdropAction };