import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Avatar, IconButton, Hidden } from '@material-ui/core';
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
	},
	GridViewJaap: {
		marginBottom: '76px'
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
				{/* <Grid container justify="center" spacing={isMd ? 0 : 3}>
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
										// <IconButton
										// 	href={item.facebook}
										// 	variant="outlined"
										// 	color="secondary">
										// 	<FacebookIcon />
										// </IconButton>,
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
				</Grid> */}

<Grid container justify="center" spacing={isMd ? 0 : 3}>
					
					
						<Grid
					item
					subtitle='Founder, Back-End'
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={6}
					md={4}>
					<Grid item container xs={12} sm={7} md={12} alignItems="center">
						<SectionHeader
							label="Stephane Moquette"
							titleVariant="h5"
							title='Founder, Back-End'
						/>
						<Grid item container justify="center">
							<Avatar
					
								src='/assets/stephane.jpg'
								alt='Stephane Moquette'
								className={classes.teamAvatar}
							/>
						</Grid>

						<SectionHeader
							title=""
							className={classes.GridView}
							subtitle='Python, Django, Flask, Angular'
							ctaGroup={[
								
								<IconButton
									href='https://www.linkedin.com/in/stephane-moquette/'
									variant="outlined"
									color="secondary">
									<LinkedInIcon />
								</IconButton>
							]}
							disableGutter
						/>
					</Grid>
				</Grid>
				<Grid
					item
					subtitle='Machine Learning, AI'
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={6}
					md={4}>
					<Grid item container xs={12} sm={7} md={12} alignItems="center">
						<SectionHeader
							label="Daniel Versteegh"
							titleVariant="h5"
							title='Machine Learning, AI'
						/>
						<Grid item container justify="center">
							<Avatar
							
								src='/assets/coder1.jpeg'
								alt='Daniel Versteegh'
								className={classes.teamAvatar}
							/>
						</Grid>

						<SectionHeader
							title=""
							className={classes.GridView}
							subtitle='Python, Django, Tenserflow, Keras'
							ctaGroup={[
								
								<IconButton
									href='https://www.linkedin.com/in/daniel-versteegh-a327563/'
									variant="outlined"
									color="secondary">
									<LinkedInIcon />
								</IconButton>
							]}
							disableGutter
						/>
					</Grid>
				</Grid>
				<Grid
					item
					subtitle='Back-End'
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={6}
					md={4}>
					<Grid item container xs={12} sm={7} md={12} alignItems="center">
						<SectionHeader
							label="Jaap Westerop"
							titleVariant="h5"
							title='Architect, Back-End, Web, Mobile'
			
						/>
						<Grid item container justify="center">
							<Avatar
				
								src='/assets/KodeklubJaap.jpg'
								alt='Jaap Westerop'
								className={classes.teamAvatar}
							/>
						</Grid>

						<SectionHeader
							title=""
							className={classes.GridView}
							subtitle='C++, Javascript, PHP, Flutter'
							// ctaGroup={[
								
							// 	<IconButton
							// 		href='https://nos.nl'
							// 		variant="outlined"
							// 		color="secondary">
							// 		<GitHubIcon />
							// 	</IconButton>,
							// 	// <IconButton
							// 	// 	href={item.facebook}
							// 	// 	variant="outlined"
							// 	// 	color="secondary">
							// 	// 	<FacebookIcon />
							// 	// </IconButton>,
							// 	<IconButton
							// 		href='https://nos.nl'
							// 		variant="outlined"
							// 		color="secondary">
							// 		<LinkedInIcon />
							// 	</IconButton>
							// ]}
							ctaGroup={[
								
								<IconButton
									href='https://www.linkedin.com/in/jaapwesterop/'
									variant="outlined"
									color="secondary">
									<LinkedInIcon />
								</IconButton>
							]}
							disableGutter
						/>
					</Grid>
				</Grid>
				<Grid
					item
					subtitle='Front-End, Scrum Master, Mobile'
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={6}
					md={4}>
					<Grid item container xs={12} sm={7} md={12} alignItems="center">
						<SectionHeader
							label="Malou Allertz"
							titleVariant="h5"
							title='Front-End, Scrum Master, Mobile'
						/>
						<Grid item container justify="center">
							<Avatar
			
								src='/assets/malou.jpg'
								alt='Malou Allertz'
								className={classes.teamAvatar}
							/>
						</Grid>

						<SectionHeader
							title=""
							className={classes.GridView}
							subtitle='React, Svelte, Django'
							ctaGroup={[
								
								<IconButton
									href=' https://www.linkedin.com/in/malouallertz/'
									variant="outlined"
									color="secondary">
									<LinkedInIcon />
								</IconButton>
							]}
							disableGutter
						/>
					</Grid>
				</Grid>
				<Grid
					item
					subtitle='Back-End'
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={6}
					md={4}>
					<Grid item container xs={12} sm={7} md={12} alignItems="center">
						<SectionHeader
							label="Gabor Baeten"
							titleVariant="h5"
							title='Back-End'
						/>
						<Grid item container justify="center">
							<Avatar
							
								src='/assets/coder3.jpeg'
								alt='Gabor Baeten'
								className={classes.teamAvatar}
							/>
						</Grid>

						<SectionHeader
							title=""							
							className= {classes.GridViewJaap}
							subtitle='PHP, Js, Drupal, Bootstrap, Twig'
							// ctaGroup={[
								
							// 	<IconButton
							// 		href='https://nos.nl'
							// 		variant="outlined"
							// 		color="secondary">
							// 		<GitHubIcon />
							// 	</IconButton>,
							// 	// <IconButton
							// 	// 	href={item.facebook}
							// 	// 	variant="outlined"
							// 	// 	color="secondary">
							// 	// 	<FacebookIcon />
							// 	// </IconButton>,
							// 	<IconButton
							// 		href='https://nos.nl'
							// 		variant="outlined"
							// 		color="secondary">
							// 		<LinkedInIcon />
							// 	</IconButton>
							// ]}
							disableGutter
						/>
					</Grid>
				</Grid>
				<Grid
					item
					subtitle='Front End, Marketing'
					container
					alignItems="center"
					direction="column"
					xs={12}
					sm={6}
					md={4}>
					<Grid item container xs={12} sm={7} md={12} alignItems="center">
						<SectionHeader
							label="Kerim Fathallah"
							titleVariant="h5"
							title='Front-End, Marketing'
						/>
						<Grid item container justify="center">
							<Avatar
								// {...item.stephane.authorPhoto}
								src='/assets/Kerim.jpg'
								alt='Kerim Fathallah'
								className={classes.teamAvatar}
							/>
						</Grid>

						<SectionHeader
							title=""
							className={classes.GridView}
							subtitle='React, Nextjs, Material-ui'
							ctaGroup={[
								
								<IconButton
									href='https://www.linkedin.com/in/kerim-fathallah-57b681110/'
									variant="outlined"
									color="secondary">
									<LinkedInIcon />
								</IconButton>
							]}
							disableGutter
						/>
					</Grid>
				</Grid>
					
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
