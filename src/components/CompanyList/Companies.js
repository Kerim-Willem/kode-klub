import { Grid } from "@material-ui/core";
import Icon from "../WhatWeDo/utils/Icon";
import DescriptionListIcon from "../WhatWeDo/utils/DescriptionListIcon";
import { companies } from "../data";
import Image from 'next/image'

// const data = whatwedo;

const Companies = () => {
  return (
    <Grid container justify="center" direction="row" spacing={4} >
      {companies.map((item, index) => (
        <Grid key={index} item xs={12} md={3} data-aos="fade-up">

          <Image
            src={item.img}
            alt="Picture of the author"
            width="100%"
            height="100%"
          />
          {/* <DescriptionListIcon
						icon={
							<Icon
								src={item.icon}
								fontIconClass={item.icon}
								size="medium"
								fontIconColor="#11c0c0"
							/>
						}
					/> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default Companies;
