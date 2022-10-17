import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';


//import komponen
import Home from './home';
import Contact from './contact';
import Online from './online-class';
import Promo from './promo';
import ClassYoga from './class';

function Pages(){
	return (	
		<Container maxWidth="xl">
			<div className="header">
				<h2>Header</h2>
			</div>
			<main>
				<Switch>
					
					<Route path="/contact" component={Contact} />
					<Route path="/online" component={Online} />
					<Route path="/promo" component={Promo} />
					<Route path="/class" component={ClassYoga} />
					<Route path="/" component={Home} />
				</Switch>
			</main>
			<div className="footer">
				<h2>Footer</h2>
			</div>
		</Container>
	);
}

export default Pages;