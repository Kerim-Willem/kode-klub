import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme/theme';

import { appWithTranslation } from '../src/i18n';
import CookiesNotification from '../src/components/CookiesNotification';


const MyApp = ({ Component, pageProps }) => {
	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>KodeKlub</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="shortcut icon" href="/assets/favicon.png" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<CookiesNotification />

				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	);
};

MyApp.getStaticProps = async (appContext) => ({
	...(await App.getStaticProps(appContext))
});

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired
};

export default appWithTranslation(MyApp);
