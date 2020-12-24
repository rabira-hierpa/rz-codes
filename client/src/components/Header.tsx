import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './utils/Logo';

const useStyles = makeStyles((Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			backgroundColor: '#e3b505 !important',
		},
		menuButton: {
			marginRight: Theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		navBrand: {
			backgroundColor: '#da4f49',
		},
	})
);

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
					<Logo />
					<Typography variant='h6' className={classes.title}>
						Rz Codes
					</Typography>
					<Button color='inherit'>Blog</Button>
					<Button color='inherit'>Apps</Button>
					<Button color='inherit'>Design</Button>
					<Button color='inherit'>Projects</Button>
					<Button color='inherit'>My Journey</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
