import React from 'react';

import Grid from '@material-ui/core/Grid';
import Header from '../src/nav/Header';
import Footer from '../src/nav/Footer';
import Hero from '../src/components/Hero';
import WhatWeDo from '../src/components/WhatWeDo';
import Team from '../src/components/Team';
import WorkFlow from '../src/components/WorkFlow';
import ContactBar from '../src/components/ContactBar';
import CompanyList from '../src/components/CompanyList';

import { whatwedo } from '../src/components/data';
import { team } from '../src/components/data';

import { withTranslation } from '../src/i18n';

const Index = () => {
	return (
		<Grid>
			<Header />
			<Hero />
			<WhatWeDo data={whatwedo} />
			<WorkFlow />
			<Team data={team} />
			<ContactBar />
			<CompanyList />
			<Footer />
		</Grid>
	);
};

Index.getInitialProps = async () => ({
	namespacesRequired: ['index']
});

export default withTranslation('index')(Index);
