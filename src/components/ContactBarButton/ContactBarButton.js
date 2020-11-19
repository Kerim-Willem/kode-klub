import React from "react";
import { Drawer, Button } from '@material-ui/core';
import ContactForm from '../ContactForm';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from '../../i18n';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%'
	},
	buttonContained: {
		color: 'white',
		display: 'flex',
		fontFamily: 'Lato',
		fontWeight: '400',
	},
	contactForm: {
		padding: theme.spacing(3, 2),
		maxWidth: 800,
		margin: '0 auto'
	}
}));


const ContactBarButton = ({ t }) => {
	const classes = useStyles();

	const [openBottombar, setOpenBottombar] = React.useState(false);

	const handleBottombarOpen = () => {
		setOpenBottombar(true);
	};

	const handleBottombarClose = () => {
		setOpenBottombar(false);
	};

	return (
		<div>
			<Button
				className={classes.buttonContained}
				onClick={handleBottombarOpen}
				size="large"
				variant="contained"
				color="secondary">
				{t('contactbutton')}
			</Button>

			<Drawer
				anchor="bottom"
				open={openBottombar}
				onClose={handleBottombarClose}>
				<div className={classes.contactForm}>
					<ContactForm />
				</div>
			</Drawer>
		</div>
	);
};

ContactBarButton.getInitialProps = async () => ({
	namespacesRequired: ['contactbutton']
});

export default withTranslation('contactbutton')(ContactBarButton);
