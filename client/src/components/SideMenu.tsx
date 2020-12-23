import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';

// useStyles,withStyles

const useStyles = makeStyles({
	sideMenu: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		left: '0px',
		width: '320px',
		height: '100vh',
		backgroundColor: ' #e3b505',
	},
});

export default function SideMenu() {
	const classes = useStyles();
	console.log(classes);
	return <div className={classes.sideMenu}></div>;
}
