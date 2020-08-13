import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Avatar, IconButton } from '@material-ui/core';
import SectionHeader from '../../utils/SectionHeader';
import SectionAlternate from '../../theme/SectionAlternate';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
	root: {},
	teamAvatar: {
		width: 250,
		height: 250,
		border: `${theme.spacing(1)}px solid white`,
		boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
		marginTop: theme.spacing(-2),
		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(1)
		}
	},
	listGrid: {
		overflow: 'hidden',
		marginBottom: theme.spacing(1),
		'&:last-child': {
			marginBottom: theme.spacing(0)
		}
	},
	GridView: {
		marginBottom: '1rem'
	}
}));

const Team = (props) => {
	const { data, className, ...rest } = props;
	const classes = useStyles();

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true
	});

	return (
		<SectionAlternate>
			<div className={clsx(classes.root, className)} {...rest}>
				<SectionHeader title={<span>KodeKlub Team</span>} fadeUp />
				<br></br>
				<Grid container justify="center" spacing={isMd ? 0 : 3}>
					{data.map((item, index) => (
						<Grid
							key={index}
							item
							subtitle={item.description}
							container
							alignItems="center"
							direction="column"
							xs={12}
							sm={6}
							md={4}>
							<Grid item container xs={12} sm={7} md={12} alignItems="center">
								<SectionHeader
									label={item.authorName}
									titleVariant="h5"
									title={item.title}
								/>
								<Grid item container justify="center">
									<Avatar
										{...item.authorPhoto}
										alt={item.authorName}
										className={classes.teamAvatar}
									/>
								</Grid>

								<SectionHeader
									title=""
									className={classes.GridView}
									subtitle={item.description}
									ctaGroup={[
										<IconButton
											href={item.github}
											variant="outlined"
											color="secondary">
											<GitHubIcon />
										</IconButton>,
										<IconButton
											href={item.facebook}
											variant="outlined"
											color="secondary">
											<FacebookIcon />
										</IconButton>,
										<IconButton
											href={item.linkedin}
											variant="outlined"
											color="secondary">
											<LinkedInIcon />
										</IconButton>
									]}
									disableGutter
								/>
							</Grid>
						</Grid>
					))}
				</Grid>
			</div>
		</SectionAlternate>
	);
};

Team.propTypes = {

	className: PropTypes.string,

	data: PropTypes.array.isRequired
};

export default Team;
