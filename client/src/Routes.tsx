import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
	HomePage as HomePage,
	Projects as ProjectsView,
	Apps as AppsView,
	Blog as BlogView,
	Typography as TypographyView,
	MyJourney as MyJourneyView,
	Settings as SettingsView,
	SignUp as SignUpView,
	SignIn as SignInView,
	NotFound as NotFoundView,
} from './views';

const Routes = () => {
	return (
		<Switch>
			<Redirect exact from='/' to='/home' />
			<RouteWithLayout
				component={HomePage}
				exact
				layout={MainLayout}
				path='/home'
			/>
			<RouteWithLayout
				component={AppsView}
				exact
				layout={MainLayout}
				path='/apps'
			/>
			<RouteWithLayout
				component={ProjectsView}
				exact
				layout={MainLayout}
				path='/projects'
			/>
			<RouteWithLayout
				component={TypographyView}
				exact
				layout={MainLayout}
				path='/designs'
			/>
			<RouteWithLayout
				component={MyJourneyView}
				exact
				layout={MainLayout}
				path='/myjourney'
			/>
			<RouteWithLayout
				component={BlogView}
				exact
				layout={MainLayout}
				path='/blog'
			/>
			<RouteWithLayout
				component={SettingsView}
				exact
				layout={MainLayout}
				path='/settings'
			/>
			<RouteWithLayout
				component={SignUpView}
				exact
				layout={MinimalLayout}
				path='/sign-up'
			/>
			<RouteWithLayout
				component={SignInView}
				exact
				layout={MinimalLayout}
				path='/sign-in'
			/>
			<RouteWithLayout
				component={NotFoundView}
				exact
				layout={MinimalLayout}
				path='/not-found'
			/>
			<Redirect to='/not-found' />
		</Switch>
	);
};

export default Routes;
