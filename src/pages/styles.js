import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
	cont:{
		padding: 0
	},	
	header: {
		borderTop: 'solid 10px',
		borderColor: theme.palette.primary.main
	},
	logo:{
		width: 275,
		marginTop:8,
		marginLeft:40
	},
	
	navTop:{
		textAlign: 'right',
		paddingTop: theme.spacing(5)
	},
	menu: {
		marginRight: theme.spacing(6),
		fontSize: 20,
		fontWeight: 'bold',
		textDecoration: 'none',
		color: theme.palette.primary.main		
	},	
	footer: {
		color: theme.palette.primary.main
	},
	subMenu:{
		paddingLeft: theme.spacing(5)
	},
	titleMenu:{
		marginBottom: theme.spacing(2)
	},
	menuF: {
		display: 'block',
		textDecoration: 'none',
		color: theme.palette.primary.main,
		marginBottom: theme.spacing(1)
	},
	briefFooter:{
		fontSize: 18,
		width:500
	},
	logoFooter: {
		width:225
	}
}));

export default useStyles;