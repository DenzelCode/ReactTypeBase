import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './pages/Login';
import Home from './pages/Home';
import Logout from './pages/Logout';
import './style.scss';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/logout" component={Logout} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
