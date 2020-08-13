import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

import { i18n, withTranslation } from '../i18n';

const useStyles = makeStyles((theme) => ({
	root: {},
	footer: {
		width: '100%'
	},
	mainContainer: {
		position: 'absolute',
		height: '200px',
		backgroundColor: '#384047'
	},
	link: {
		fontFamily: 'Roboto',
		fontSize: '0,75rem',
		color: 'white',
		textDecoration: 'none'
	},
	linkCopy: {
		fontWeight: '300',
		color: 'white',
		marginTop: '30px'
	},

	button: {
		fontFamily: 'Lato',
		marginBottom: '20px',
		fontSize: '16px',
		textTransform: 'none',
		color: 'white',
		cursor: 'pointer',
		fontWeight: '500',
		minWidth: 5,
		'&:hover': {
			textDecoration: 'none'
		}
	}
}));


const Footer = ({ t }) => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Grid container justify="center" className={classes.mainContainer}>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid item className={classes.linkCopy}>
							Copyright 2020 | KodeKlub
						</Grid>
					</Grid>
				</Grid>
				<Grid
					container
					direction="row"
					justify="center"
					spacing={2}
					className={classes.flagContainer}>
					<Grid>
						<Button
							size="large"
							variant="contained"
							color="secondary"
							onClick={() =>
								i18n.changeLanguage(i18n.language === 'en' ? 'nl' : 'en')
							}
							alt="English Flag"
							src="/assets/english.png"
							className={classes.button}>
							{t('lang')}
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
};

Footer.getInitialProps = async () => ({
	namespacesRequired: ['footer']
});

export default withTranslation('footer')(Footer);
