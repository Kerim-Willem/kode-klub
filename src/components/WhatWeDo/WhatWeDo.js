import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import SectionHeader from '../../utils/SectionHeader';
import Description from './Description';

import SectionAlternate from '../../theme/SectionAlternate';
import { withTranslation } from '../../i18n';

const useStyles = makeStyles(() => ({
	root: {},
	highlight: {
		color: '#11c0c0'
	}
}));

const WhatWeDo = ({ t }, props) => {
	const { data, className, ...rest } = props;
	const classes = useStyles();

	return (
		<SectionAlternate>
			<div className={clsx(classes.root, className)} {...rest}>
				<SectionHeader
					title={
						<span>
							{t('header')}{' '}
							<span className={classes.highlight}>{t('header2')} </span>
						</span>
					}
					subtitle={t('subheader')}
				/>
				<Description />
			</div>
		</SectionAlternate>
	);
};

WhatWeDo.propTypes = {

	className: PropTypes.string,

	data: PropTypes.array.isRequired
};

WhatWeDo.getInitialProps = async () => ({
	namespacesRequired: ['whatwedo']
});

export default withTranslation('whatwedo')(WhatWeDo);
