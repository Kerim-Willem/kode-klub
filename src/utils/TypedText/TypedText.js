import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
}));


const TypedText = props => {
  const { className, typedProps, ...rest } = props;

  const classes = useStyles();

  return (
    <Typography
      className={clsx('typed-text', classes.root, className)}
      {...rest}
    >
      <Typed className="typed-text__item" {...typedProps} />
    </Typography>
  );
};

TypedText.propTypes = {

  className: PropTypes.string,

  typedProps: PropTypes.object.isRequired,
};

export default TypedText;
