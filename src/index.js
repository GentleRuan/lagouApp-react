import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute,browserHistory } from 'react-router';
import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import Mine from './pages/Mine';
import Login from './pages/Login';
import Details from './pages/Details';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((

	<Router history={browserHistory}>
		<Route path="/" component={App}>
    		<IndexRoute component={Home} />
    		<Route path="/Search" component={Search} />
    		<Route path="/Mine" component={Mine} />
    	</Route>
    	<Route path="/Login" component={Login} />
    	<Route path="/Details" component={Details} />
	</Router>

), document.getElementById('root'));
registerServiceWorker();
