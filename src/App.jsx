import { useEffect, useMemo } from "react";

import useThunkReducer from "react-hook-thunk-reducer";

import { reducer } from "~/Functions/StateManagers/reducer";
import { dispatchInjector } from "~/Functions/Others/Injectors/dispatchInjector";

import { welcomeAPI } from "~/Functions/APIs/Others/welcomeAPI";

import { INITIAL_STATE } from "~/Variables/constants/others";
import axios from "axios";

export function App() {
	const [state, dispatch] = useThunkReducer(reducer, INITIAL_STATE);

	useMemo(() => {
		console.log("dispatchInjector useMemo");

		dispatchInjector({ dispatch });
	}, [dispatch]);

	useEffect(() => {
		welcomeAPI();
	}, []);

	useEffect(() => {
		axios({ method: "GET", url: "http://localhost:8080/" }).then((response) => {
			console.log(response);
		});
	}, []);

	return (
		<div>
			<header>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<hr />

				<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}
