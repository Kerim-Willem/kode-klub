import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import Section from "../../theme/Section";
import SectionHeader from '../../utils/SectionHeader';
import { withTranslation } from "../../i18n";
import { companies } from "../data";
import Image from '../../utils/Image';


const useStyles = makeStyles(() => ({
  root: {
	  margin: 'auto'
  },
  highlightedText: {
    color: "#11c0c0",
  },
}));

const CompanyList = ({ t }) => {
  const classes = useStyles();

  return (
    <Section>
      <Grid className={classes.root} >
	  <SectionHeader title={<span>{t('workedwith')}</span>} fadeUp />
		
        <Grid container spacing={4} justify="center" style={{margin: 'auto'}}>
            {companies.map((item, index) => (
              <Grid key={index} item xs={4} md={3} data-aos="fade-up" style={{margin: 'auto'}}>
                <br></br>
                {/* <Image
                  src={item.img}
                  width={item.width}
                  height={item.height}
                /> */}
								<Image
						src={item.img}
						// srcSet={image1.srcset}
						// alt={image1.alt}
						style={{maxWidth: '60%', maxHeight: '80%'}}
					/>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Section>
  );
};

CompanyList.getInitialProps = async () => ({
  namespacesRequired: ["companylist"],
});

export default withTranslation("companylist")(CompanyList);
