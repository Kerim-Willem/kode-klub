import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import {
	Box,
	Button,
	Link,
	Portal,
	Typography,
	makeStyles
} from '@material-ui/core';

import { withTranslation } from '../i18n';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#384047',
		color: 'white',
		maxWidth: 600,
		position: 'fixed',
		bottom: 0,
		left: 0,
		margin: theme.spacing(3),
		padding: theme.spacing(3),
		outline: 'none',
		zIndex: 2000,
		borderRadius: '10px'
	},
	action: {
		backgroundColor: '#11c0c0',
		color: 'white'
	}
}));

function CookiesNotification({ t }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		Cookies.set('consent', 'true' , { expires: 365 });
		setOpen(false);
	};

	useEffect(() => {
		const consent = Cookies.get('consent');

		if (!consent) {
			setOpen(true);
		}
	}, []);

	if (!open) {
		return null;
	}

	return (
		<Portal>
			<div className={classes.root}>
				<Typography variant="body1" color="inherit">
					{t('text')}
					{/* <Link
						component="a"
						color="inherit"
						underline="always"
						href="https://devias.io/privacy-policy"
						target="_blank">
						{t('privacy')}
					</Link> */}
					.
				</Typography>
				<Box mt={2} display="flex" justifyContent="flex-end">
					<Button
						onClick={handleClose}
						variant="contained"
						className={classes.action}>
						{t('button')}
					</Button>
				</Box>
			</div>
		</Portal>
	);
}

CookiesNotification.getInitialProps = async () => ({
	namespacesRequired: ['cookies']
});

export default withTranslation('cookies')(CookiesNotification);
