import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
	root: {
		width: '100%',
		height: '100%'
	},
	dBlock: {
		display: 'block'
	}
}));


const Image = (props) => {
	const { src, alt, className, ...rest } = props;

	const classes = useStyles();


	return (
		<img
			className={clsx('image', classes.root, className)}
			alt={alt}
			src={src}
			{...rest}
		/>
	);
};

Image.defaultProps = {
	alt: '...'
};

Image.propTypes = {

	className: PropTypes.string,

	src: PropTypes.string.isRequired,

	alt: PropTypes.string
};

export default Image;
