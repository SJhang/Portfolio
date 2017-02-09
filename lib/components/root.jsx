import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

//children
import App from './app';
import SplashPage from './splash_page';
import AboutMe from './about_me';

const Root = () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={SplashPage} />
					<Route path="/about" component={AboutMe} />
			</Route>
		</Router>
	);
};

export default Root;
