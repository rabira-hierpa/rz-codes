import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import React, { Component } from 'react';
import Featured from './components/Featured';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import RzTheme from './components/utils/RzTheme';

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<ThemeProvider theme={RzTheme}>
					<CssBaseline />
					<Header />
					{/* <SideMenu /> */}
					<Grid container direction='row' justify='center' alignItems='center'>
						<Featured />
					</Grid>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}
