import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, Grid } from '@material-ui/core';
import TypedText from '../../utils/TypedText';
import SectionHeader from '../../utils/SectionHeader';
import ContactBarButton from '../ContactBarButton';
import { withTranslation } from '../../i18n';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(6, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(12, 1)
		}
	},
	typed: {
		fontWeight: 'bold'
	}
}));

const Hero = ({ t }, props) => {
	const { className, ...rest } = props;
	const classes = useStyles();
	return (
		<div className={clsx(classes.root, className)} {...rest}>
			<SectionHeader
				id="hero"
				title={
					<>
						{t('h1')}
						<br />
						<TypedText
							component="span"
							variant="h2"
							color="secondary"
							className={classes.typed}
							typedProps={{
								strings: [
									'Back-end',
									'Front-end',
									'UX/UI',
									'Mobile',
									'Marketing',
									'Scrum',
									'Django',
									'React',
									'Machine Learning',
									'C',
									'C++',
									'Svelte',
									'MySQL'
								],
								typeSpeed: 50,
								loop: true
							}}
						/>
					</>
				}
				subtitle={t('subHeader')}
				align="center"
				titleProps={{
					variant: 'h2',
					color: 'textPrimary'
				}}
				subtitleProps={{
					color: 'textPrimary',
					variant: 'h5'
				}}
				ctaGroup={[<ContactBarButton />]}
				disableGutter
			/>
			<Grid style={{maxWidth: '80%'}}>
			</Grid>
				
		</div>

	);
};

Hero.propTypes = {

	className: PropTypes.string
};

Hero.getInitialProps = async () => ({
	namespacesRequired: ['hero']
});

export default withTranslation('hero')(Hero);
