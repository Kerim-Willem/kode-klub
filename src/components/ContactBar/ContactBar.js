import React from "react";
import {
	AppBar,
	Toolbar,
	Drawer,
	IconButton,
	Divider
} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import ContactForm from '../ContactForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		width: '100%'
	},
	appBarBottom: {
		top: 'auto',
		bottom: 0,
		background: 'transparent',
		boxShadow: 'none'
	},
	toolbarBottom: {
		width: '100%',
		margin: '0 auto',
		padding: theme.spacing(0, 2)
	},
	chatIconButton: {
		position: 'absolute',
		right: theme.spacing(3),
		left: 'auto',
		top: theme.spacing(-3),
		background: '#11c0c0',
		width: 55,
		height: 55,
		boxShadow: '0 2px 10px 0 rgba(23,70,161,.11)',
		'&:hover': {
			background: '#11c0c0'
		}
	},
	forumIcon: {
		color: 'white',
		width: 25,
		height: 25
	},
	contactForm: {
		padding: theme.spacing(3, 2),
		maxWidth: 800,
		margin: '0 auto'
	}
}));

export default function ContactBar() {
	const classes = useStyles();

	const [openBottombar, setOpenBottombar] = React.useState(false);

	const handleBottombarOpen = () => {
		setOpenBottombar(true);
	};

	const handleBottombarClose = () => {
		setOpenBottombar(false);
	};

	return (
		<AppBar position="fixed" className={classes.appBarBottom}>
			<Toolbar disableGutters className={classes.toolbarBottom}>
				<IconButton
					className={classes.chatIconButton}
					onClick={handleBottombarOpen}>
					<ForumIcon className={classes.forumIcon} />
				</IconButton>

				<Drawer
					anchor="bottom"
					open={openBottombar}
					onClose={handleBottombarClose}>
					<div className={classes.contactForm}>
						<ContactForm />
					</div>
				</Drawer>
			</Toolbar>
		</AppBar>
	);
}
