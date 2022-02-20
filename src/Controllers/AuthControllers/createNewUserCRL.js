import { viewModeAction } from "~/Actions/GlobalActions/globalActions";
import { loadingAction } from "~/Actions/UserActions/userActions";
import { createNewUserAPI } from "~/APIs/Authentication/createNewUserAPI";
import { PersistentStorage } from "~/Functions/Utils/PersistentStorage";
import { initialState } from "~/Variables/Constants/Initials/InitialStates/initialStates";
import { initialViewMode } from "~/Variables/Constants/Initials/InitialValues/initialValues";

const createNewUserCRL = () => {
	return async (dispatch, getState = initialState) => {
		try {
			const verifyToken = PersistentStorage.getItem({ key: "verifyToken" });

			if (!verifyToken) {
				const error = "verifyToken is not defined";

				dispatch(viewModeAction({ viewMode: initialViewMode.signIn }));

				throw error;
			}

			const {
				user: { firstName, lastName },
			} = getState();

			const response = await createNewUserAPI({
				firstName,
				lastName,
				token: verifyToken,
			});

			PersistentStorage.removeItem({ key: "verifyToken" });

			dispatch(viewModeAction({ viewMode: initialViewMode.messenger }));

			dispatch(loadingAction({ loading: true }));
		} catch (error) {
			console.log("createNewUserCRL", error);
		} finally {
			dispatch(loadingAction({ loading: false }));
		}
	};
};

export { createNewUserCRL };