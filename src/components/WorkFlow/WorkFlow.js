import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import SectionHeader from '../../utils/SectionHeader';
import OverlapedImages from '../../utils/OverlapedImages';
import Section from '../../theme/Section';

import { withTranslation } from '../../i18n';

const useStyles = makeStyles(() => ({
	root: {},
	highlightedText: {
		color: '#11c0c0'
	}
}));



const WorkFlow = ({ t }, props) => {
	const { className, ...rest } = props;
	const classes = useStyles();

	return (
		<Section>
			<div className={clsx(classes.root, className)} {...rest}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={6}>
						<SectionHeader
							title={
								<span>
									<span className={classes.highlightedText}>
										{' '}
										{t('header')}{' '}
									</span>
									{t('header2')}
								</span>
							}
							subtitle={t('summary')}
							align="left"
							fadeUp
							disableGutter
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<OverlapedImages
							image1={{
								src: '/assets/work.jpg',
								alt: '...'
							}}
							image2={{
								src: '/assets/paper.jpg',
								alt: '...'
							}}
							image3={{
								src: '/assets/startup.jpg',
								alt: '...'
							}}
						/>
					</Grid>
				</Grid>
			</div>
		</Section>
	);
};

WorkFlow.propTypes = {

	className: PropTypes.string
};

WorkFlow.getInitialProps = async () => ({
	namespacesRequired: ['workflow']
});

export default withTranslation('workflow')(WorkFlow);
