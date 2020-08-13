import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {},
	extraSmall: {
		fontSize: 10
	},
	small: {
		fontSize: 20
	},
	medium: {
		fontSize: 30
	},
	large: {
		fontSize: 40
	}
}));


const Icon = (props) => {
	const { fontIconClass, size, fontIconColor, className, ...rest } = props;

	const classes = useStyles();

	return (
		<i
			aria-hidden
			className={clsx(
				'icon',
				classes.root,
				fontIconClass,
				classes[size],
				className
			)}
			style={{ color: fontIconColor }}
			{...rest}
		/>
	);
};

Icon.defaultProps = {
	size: 'small'
};

Icon.propTypes = {

	className: PropTypes.string,

	fontIconClass: PropTypes.string.isRequired,

	size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large']),

	fontIconColor: PropTypes.string
};

export default Icon;
