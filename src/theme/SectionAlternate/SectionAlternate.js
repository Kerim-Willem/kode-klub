import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		background: '#eeeeee'
	},
	inner: {
		maxWidth: 1200,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(6, 2),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(12, 2)
		}
	},
	innerNarrowed: {
		maxWidth: 800
	}
}));


const SectionAlternate = (props) => {
	const { children, innerNarrowed, className, ...rest } = props;

	const classes = useStyles();

	return (
		<section
			className={clsx('section-alternate', classes.root, className)}
			{...rest}>
			<div
				className={clsx(
					'section-alternate__content',
					classes.inner,
					innerNarrowed ? classes.innerNarrowed : {}
				)}>
				{children}
			</div>
		</section>
	);
};

SectionAlternate.propTypes = {

	className: PropTypes.string,

	children: PropTypes.node,

	innerNarrowed: PropTypes.bool
};

export default SectionAlternate;
