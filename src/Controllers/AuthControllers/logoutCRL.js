import { viewModeAction } from "~/Actions/GlobalActions/globalActions";
import { userAction } from "~/Actions/UserActions/userActions";
import { logoutAPI } from "~/APIs/Authentication/logoutAPI";
import { userInitializer } from "~/Functions/Helpers/userInitializer";
import { initialViewMode } from "~/Variables/Constants/Initials/InitialValues/initialValues";

const logoutCRL = () => {
	return async (dispatch, getState) => {
		try {
			/*const response = */ await logoutAPI();

			localStorage.clear();

			dispatch(userAction({ ...userInitializer() }));

			dispatch(
				viewModeAction({
					viewMode: initialViewMode.signIn,
				}),
			);
		} catch (error) {
			console.log("logoutCRL", error);
		}
	};
};

export { logoutCRL };
