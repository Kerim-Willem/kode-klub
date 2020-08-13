import { Grid } from '@material-ui/core';
import Icon from './utils/Icon';
import DescriptionListIcon from './utils/DescriptionListIcon';
import { whatwedo } from '../data';

const data = whatwedo;

const Description = () => {
	return (
		<Grid container spacing={4}>
			{data.map((item, index) => (
				<Grid key={index} item xs={12} md={3} data-aos="fade-up">
					<br></br>
					<DescriptionListIcon
						title={item.title}
						subtitle={item.subtitle}
						icon={
							<Icon
								src={item.icon}
								fontIconClass={item.icon}
								size="medium"
								fontIconColor="#11c0c0"
							/>
						}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Description;
