import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import komponen material-ul
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider  from '@material-ui/styles/ThemeProvider';
import theme from './config/theme';


import Pages from './pages'

function App() {
  return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>
		</>
  );
}

export default App;
