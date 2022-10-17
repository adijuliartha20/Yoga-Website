import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Pages from './pages'

function App() {
  return (
		<>
			<Router>
					<Switch>
						<Route path="/" component={Pages} />
						<Route path="/class" component={Pages} />
						<Route path="/online-class" component={Pages} />
						<Route path="/promo" component={Pages} />
						<Route path="/contact" component={Pages} />
						<Route component={Pages} />
					</Switch>
			</Router>
		</>
  );
}

export default App;
