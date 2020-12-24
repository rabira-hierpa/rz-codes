import React from 'react';
import Container from '@material-ui/core/Container';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((Theme) =>
	createStyles({
		padding: {
			paddingTop: Theme.spacing(4),
		},
		size: {
			height: '50vh !important',
		},
		authorName:{
			fontSize: "20px"
		}
	})
);

export default function Featured() {
	const styles = useStyles();
	return (
		<React.Fragment>
			<Container fixed maxWidth='xl' className={styles.padding}>
				<Grid
					container
					direction='row'
					justify='center'
					spacing={3}
					className={(styles.padding, styles.size)}
				>
					<Grid item xs={12} sm={6} xl={6}>
						<img
							src='holder.js/100px100p?theme=sky&text=Blog Title 1'
							alt='Blog Title'
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography variant='h2' align='center' component='h2' gutterBottom>
							Blog title 1
						</Typography>
						<Typography variant='body1' gutterBottom>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							quas, asperiores in vitae dolore, perferendis quis nihil minus
							laboriosam assumenda dignissimos cum placeat. Dicta iusto deleniti
							distinctio nostrum a voluptatibus reprehenderit explicabo, veniam
							porro. Delectus aut voluptatem debitis in sint ea, aliquam
							corporis veritatis ratione nam. Recusandae minima aspernatur
							aliquam!
						</Typography>
						<Grid
							container
							direction='row'
							justify='space-between'
							className={styles.padding}
						>
							<Grid item xs={3}>
								<PersonIcon  />
								<span className={styles.authorName}> Rabra Hierpa </span>
							</Grid>
							<Grid item xs={3}>
								<ScheduleIcon />{' '}
								<Typography component='strong'>Jan 2,2020</Typography>
							</Grid>
							<Grid item xs={3}>
								<Button color='secondary'>Read More</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
