import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import isAuthenticated from './isAuthenticated.js';
import LoginPage from './views/LoginPage.js';
import RegisterPage from './views/RegisterPage.js';
import LandingPage from './views/LandingPage.js';

export default function App(props) {
	return (
		<Router>
			<Switch>
				<Route
					path={process.env.PUBLIC_URL + '/register'}
					component={RegisterPage}
				/>
				<Route path={process.env.PUBLIC_URL + '/login'} component={LoginPage} />
				<Route
					path={process.env.PUBLIC_URL + '/'}
					component={isAuthenticated(LandingPage)}
				/>
			</Switch>
		</Router>
	);
}
