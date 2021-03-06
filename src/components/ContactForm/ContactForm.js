import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import validate from 'validate.js';
import { withTranslation } from '../../i18n';
import {useRouter} from 'next/router'
import axios from 'axios';




const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	}
}));

const schema = {
	fullname: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {
			maximum: 128
		}
	},
	email: {
		presence: { allowEmpty: false, message: 'is required' },
		email: true,
		length: {
			maximum: 300
		}
	},
	message: {
		presence: { allowEmpty: false, message: 'is required' }
	}
};

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const ContactForm = ({ t }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	  };
	
	  const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
	
		setOpen(false);
	  };

	const [formState, setFormState] = React.useState({
		isValid: false,
		values: {},
		touched: {},
		errors: {}
	});

	React.useEffect(() => {
		const errors = validate(formState.values, schema);

		setFormState((formState) => ({
			...formState,
			isValid: errors ? false : true,
			errors: errors || {}
		}));
	}, [formState.values]);

	const handleChange = (event) => {
		event.persist();

		setFormState((formState) => ({
			...formState,
			values: {
				...formState.values,
				[event.target.name]:
					event.target.type === 'checkbox'
						? event.target.checked
						: event.target.value
			},
			touched: {
				...formState.touched,
				[event.target.name]: true
			}
		}));
	};

	const submitHandler = (event) => { 
		

		event.preventDefault();
		const { fullname, email, message } = formState.values;
		

		axios
			.post('/api/sendmail', {
				fullname,
				email,
				message
			})
			.then((response) => {
				handleClick()
	

				
			})
			.catch((error) => {
				console.log(error);
			});
			
							

	};

	const hasError = (field) =>
		formState.touched[field] && formState.errors[field] ? true : false;

	return (
		<Grid className={classes.root}>
			<form onSubmit={submitHandler} >
				<input type="hidden" name="form-name" />
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h4" align="center">
							<strong>{t('contact')}</strong>
						</Typography>
						<Typography variant="h6" color="textSecondary" align="center">
							{t('subheader')}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder={t('name')}
							color="secondary"
							label={t('name')}
							variant="outlined"
							size="medium"
							name="fullname"
							fullWidth
							helperText={
								hasError('fullname') ? formState.errors.fullname[0] : null
							}
							error={hasError('fullname')}
							onChange={handleChange}
							type="text"
							value={formState.values.fullname || ''}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							placeholder={t('email')}
							color="secondary"
							label={t('email')}
							variant="outlined"
							size="medium"
							name="email"
							fullWidth
							helperText={hasError('email') ? formState.errors.email[0] : null}
							error={hasError('email')}
							onChange={handleChange}
							type="email"
							value={formState.values.email || ''}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							placeholder={t('message')}
							color="secondary"
							label={t('message')}
							variant="outlined"
							name="message"
							fullWidth
							helperText={
								hasError('message') ? formState.errors.message[0] : null
							}
							error={hasError('message')}
							onChange={handleChange}
							multiline
							rows={4}
							value={formState.values.message || ''}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle2" gutterBottom>
							{t('fields')}
						</Typography>
						<Button
							size="large"
							variant="contained"
							type="submit"
							color="secondary"
							disabled={!formState.isValid}>
							{t('send')}
						</Button>
					</Grid>
						<Grid>
						<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="success">
			 {t('success')}
			</Alert>
		  </Snackbar>
						</Grid>
				</Grid>
			</form>
		</Grid>
	);
};

ContactForm.getInitialProps = async () => ({
	namespacesRequired: ['contactform']
});

export default withTranslation('contactform')(ContactForm);
