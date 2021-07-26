import React from "react";

import {
	Switch,
	Route,
	Redirect,
	BrowserRouter as Router,
} from "react-router-dom";

import { HomeScreen } from "./screens/HomeScreen";

export const App: React.FC = () => {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path={"/"} component={HomeScreen} />
					<Redirect to={"/"} />
				</Switch>
			</>
		</Router>
	);
};
