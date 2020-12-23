import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Featured from './components/Featured';
import Header from './components/Header';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Grid container direction='row' justify='center' alignItems='center'>
					<Featured />
				</Grid>
			</div>
		);
	}
}
