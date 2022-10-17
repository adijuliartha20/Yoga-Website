import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
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
		<Container maxWidth="xl">
			<Grid container className="header">
				<Grid item xs={4}>
					<img src={logo} />
				</Grid>
				<Grid item xs={8}>
					<Typography className={classes.root}>
						<Link href="#" onClick={preventDefault}>Home</Link>
						<Link href="#" onClick={preventDefault}>Class</Link>
						<Link href="#" onClick={preventDefault}>Promo</Link>
						<Link href="#" onClick={preventDefault}>Online Class</Link>
						<Link href="#" onClick={preventDefault}>Contact</Link>
					</Typography>
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
			<Container className="footer" fixed maxWidth="lg">
				<Grid container>
					<Grid item xs={6}>
						<h2>ABOUT</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						<img src={logo} />
					</Grid>
					<Grid item xs={2}>
						<h3>ABOUT</h3>
						<List>
							<ListItem button>
								<ListItemText primary={`Team`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Join Us`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Ethic`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Goals`} />
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={2}>
						<h3>ABOUT</h3>
						<List>
							<ListItem button>
								<ListItemText primary={`Team`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Join Us`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Ethic`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Goals`} />
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={2}>
						<h3>ABOUT</h3>
						<List>
							<ListItem button>
								<ListItemText primary={`Team`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Join Us`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Ethic`} />
							</ListItem>
							<ListItem button>
								<ListItemText primary={`Goals`} />
							</ListItem>
						</List>
					</Grid>
				</Grid>				
			</Container>
		</Container>
	);
}

export default Pages;