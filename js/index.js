import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Intro from './components/intro'
import Details from './components/details'

import {Provider} from 'react-redux';
import store from './store';
import { syncHistoryWithStore} from 'react-router-redux';
import { Router, Route, hashHistory,Redirect,IndexRedirect  } from 'react-router';

const history = syncHistoryWithStore(hashHistory, store)

//Adding endsWith Polyfill
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.lastIndexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

var routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="intro" component={Intro} />
				<Route path="details/:domainid" component={Details} />
				<IndexRedirect to="intro" />
			</Route>
		  </Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
