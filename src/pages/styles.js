import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
	root: {
			'& > * + *': {
					marginLeft: theme.spacing(2),
					color: 'red'
				}
	}

}));

export default useStyles;