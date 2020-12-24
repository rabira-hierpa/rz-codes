import { createMuiTheme } from '@material-ui/core/styles';

const RzTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#2f4858',
		},
		secondary: {
			main: '#f6ae2d',
		},
		error: {
			main: '#DA4F49',
		},
		info: {
			main: '#55DDE0',
		},
		warning: {
			main: '#F26419',
		},
	},
});

export default RzTheme;
