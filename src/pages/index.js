import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//import komponen
import Home from './home';
import Contact from './contact';
import Online from './online-class';
import Promo from './promo';
import ClassYoga from './class';

import logo from '../assets/logo.png';
import useStyles from './styles';

function Pages(){
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	return (	
		<>
			<Grid container className={classes.header}>
				<Grid item xs={4}>
					<img className={classes.logo} src={logo} />
				</Grid>
				<Grid item xs={8} className={classes.navTop}>
					<Typography className={classes.menu} component={Link} to="/">Home</Typography>
					<Typography className={classes.menu} component={Link} to="/class">Class</Typography>
					<Typography className={classes.menu} component={Link} to="/promo">Promo</Typography>
					<Typography className={classes.menu} component={Link} to="/online">Online Class</Typography>
					<Typography className={classes.menu} component={Link} to="/contact">Contact</Typography>
				</Grid>
			</Grid>
			<main>
				<Switch>					
					<Route path="/contact" component={Contact} />
					<Route path="/online" component={Online} />
					<Route path="/promo" component={Promo} />
					<Route path="/class" component={ClassYoga} />
					<Route path="/" component={Home} />
				</Switch>
			</main>
			<Container className={classes.footer} fixed maxWidth="lg">
				<Grid container>
					<Grid item xs={6}>
						<Typography component="h3" variant="h5">ABOUT</Typography>
						<p className={classes.briefFooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						<img className={classes.logoFooter} src={logo} />
					</Grid>					
					<Grid item xs={2} className={classes.subMenu}>
						<Typography component="h3" variant="h6" className={classes.titleMenu}>ABOUT</Typography>
						<Typography className={classes.menuF} component={Link} to="/team">Team</Typography>
						<Typography className={classes.menuF} component={Link} to="/join-us">Join Us</Typography>
						<Typography className={classes.menuF} component={Link} to="/Ethic">Ethic</Typography>
						<Typography className={classes.menuF} component={Link} to="/goal">Goals</Typography>
					</Grid>
					<Grid item xs={2} className={classes.subMenu}>
						<Typography component="h3" variant="h6" className={classes.titleMenu}>ABOUT</Typography>
						<Typography className={classes.menuF} component={Link} to="/team">Team</Typography>
						<Typography className={classes.menuF} component={Link} to="/join-us">Join Us</Typography>
						<Typography className={classes.menuF} component={Link} to="/Ethic">Ethic</Typography>
						<Typography className={classes.menuF} component={Link} to="/goal">Goals</Typography>
					</Grid>
					<Grid item xs={2} className={classes.subMenu}>
						<Typography component="h3" variant="h6" className={classes.titleMenu}>ABOUT</Typography>
						<Typography className={classes.menuF} component={Link} to="/team">Team</Typography>
						<Typography className={classes.menuF} component={Link} to="/join-us">Join Us</Typography>
						<Typography className={classes.menuF} component={Link} to="/Ethic">Ethic</Typography>
						<Typography className={classes.menuF} component={Link} to="/goal">Goals</Typography>
					</Grid>
				</Grid>				
			</Container>
		</>
	);
}

export default Pages;