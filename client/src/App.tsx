import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Featured from './components/Featured';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

export default class App extends Component {
	render() {
		return (
			<>
				<Header />
				<SideMenu />
				<Grid container direction='row' justify='center' alignItems='center'>
					<Featured />
				</Grid>
			</>
		);
	}
}
