import React, { Component } from 'react';
import RzTheme from './theme';
import { Router } from 'react-router-dom';
import validate from 'validate.js';
import validators from './common/validators';
import { createBrowserHistory } from 'history';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

const browserHistory = createBrowserHistory();

validate.validators = {
	...validate.validators,
	...validators,
};
export default class App extends Component {
	render() {
		return (
			<ThemeProvider theme={RzTheme}>
				<CssBaseline />
				<Router history={browserHistory}></Router>
			</ThemeProvider>
		);
	}
}
