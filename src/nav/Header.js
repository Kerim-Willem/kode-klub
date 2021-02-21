import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../Link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import IconButton from '@material-ui/core/IconButton';
import ContactBarButton from '../components/ContactBarButton';

import { LinkScroll } from '../react-scroll';
import { withTranslation } from '../i18n';

function HideOnScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {},
	toolbar: {
		maxWidth: 1200,
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2)
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em'
	},
	logo: {
		marginLeft: '1rem',
		minWidth: '10rem'
	},
	logoContainer: {
		padding: 0,
		marginLeft: '1rem',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	boxContainer: {
		marginLeft: 'auto'
	},
	button: {
		marginTop: '-20px',
		fontFamily: 'Lato',
		marginRight: '15px',
		fontSize: '16px',
		textTransform: 'none',
		color: '#3D5865',
		cursor: 'pointer',
		fontWeight: '400',
		minWidth: 5,
		padding: '1rem',
		'&:hover': {
			backgroundColor: 'transparent',
			textDecoration: 'none'
		}
	},
	buttonContained: {
		color: 'white',
		marginLeft: '1rem',
		marginRight: '1rem',
		'&:hover': {
			textDecoration: 'none'
		}
	},
	containedMobile: {
		justifyContent: 'center'
	},
	buttonContainedList: {
		color: 'white'
	},
	buttonMenu: {
		paddingBottom: '10px'
	},
	menu: {
		marginLeft: '55px',
		marginTop: '50px',
		borderRadius: '10px'
	},
	icon: {
		height: '28px',
		width: '28px'
	},
	drawerIcon: {
		marginLeft: 'auto',
		height: '30px',
		width: '30px'
	},
	searchMobile: {
		margin: 'auto'
	},
	searchDesktop: {
		margin: 'auto',
		width: '340px'
	},
	drawerIconContainer: {
		marginLeft: 'auto',
		'&:hover': {
			backgroundColor: 'transparent'
		}
	},
	appbar: {
		zIndex: theme.zIndex.modal + 1,
		backgroundColor: 'white'
	}
}));

const Header = ({ t }, props) => {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const [openDrawer, setOpenDrawer] = useState(false);
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const buttons = (
		<React.Fragment>
			<Box className={classes.boxContainer}>
				<LinkScroll
					className={classes.button}
					activeClass="active"
					to="hero"
					spy={true}
					smooth={true}
					offset={370}
					duration={500}>
					{t('button1')}
				</LinkScroll>
				<LinkScroll
					className={classes.button}
					activeClass="active"
					to="hero"
					spy={true}
					smooth={true}
					offset={900}
					duration={500}>
					{t('button2')}
				</LinkScroll>

			</Box>
			<ContactBarButton />
		</React.Fragment>
	);

	const drawer = (
		<React.Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}>
				<div className={classes.toolbarMargin} />
				<List disablePadding className={classes.buttonMenu}>
					<ListItem button  >
						<LinkScroll
							className={classes.button}
							activeClass="active"
							to="hero"
							spy={true}
							smooth={true}
							offset={270}
							duration={500}>
							{t('button1')}
						</LinkScroll>
					</ListItem>
					<ListItem button  >
						<LinkScroll
							className={classes.button}
							activeClass="active"
							to="hero"
							spy={true}
							smooth={true}
							offset={1200}
							duration={500}>
							{t('button2')}
						</LinkScroll>
					</ListItem>

					<ContactBarButton className={classes.containedMobile} />
				</List>
				
			</SwipeableDrawer>
			<IconButton
				className={classes.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple>
				<MenuIcon className={classes.drawerIcon} />
			</IconButton>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<HideOnScroll>
				<AppBar position="fixed" className={classes.appbar}>
					<Toolbar className={classes.toolbar}>
						<Button component={Link} href="/" className={classes.logoContainer}>
							<img
								alt="Mind Monks"
								className={classes.logo}
								src="/assets/kodeklub.svg"
							/>
						</Button>

						{matches ? drawer : buttons}
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

Header.getInitialProps = async () => ({
	namespacesRequired: ['header']
});

export default withTranslation('header')(Header);
