import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

//children
import App from './app';
import MainPage from './main_page';
import AboutMe from './about_me';
import Resume from './resume';

const Root = () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={MainPage} />
					<Route path="/resume" component={Resume} />
			</Route>
		</Router>
	);
};

export default Root;
