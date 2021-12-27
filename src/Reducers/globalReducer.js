import { initialAction } from "~/Variables/constants/actionTypes";
import { globalInitialState } from "~/Variables/constants/initialStates";

const globalReducer = (state = globalInitialState, action = initialAction) => {
	const { payload, type } = action;

	const stateMan = (newState) => ({ ...state, ...newState });

	try {
		switch (type) {
			case "VIEW_MODE_ONCHANGE":
				return stateMan({ viewMode: payload });

			case "BACKDROP_STATE_CHANGE":
				return stateMan({ backdropState: { ...state.backdropState, ...payload } });

			case "APP_DRAWER_STATE_CHANGE":
				return stateMan({
					appDrawerState: {
						...state.appDrawerState,
						anchor: { ...state.appDrawerState.anchor, [payload.anchor]: payload.open },
					},
				});

			//
			//
			default:
				return state;
		}
	} catch (error) {
		console.log("globalReducer catch", error);
	}
};

export { globalReducer };