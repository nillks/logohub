import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import data from '../../../data/allProduct.js';
import Slider from '../../UI/Slider/Slider.jsx';
import styles from './offer.module.css';

const currentProduct = data.find(item => item.offer);
const currentData = data.filter(item => item.sale);

export default function Offer() {
	return (
		<>
			<div className={styles.offer}>
				<Container maxWidth='xl'>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Typography
								variant='h3'
								sx={{
									pt: '80px',
									pb: '20px',
									fontSize: '40px',
									fontWeight: 600,
								}}
								color='primary'
							>
								{currentProduct.title}
							</Typography>
							<Typography
								variant='body1'
								color='primary'
								sx={{ pb: '202px', fontSize: '17px', fontWeight: 400 }}
							>
								{currentProduct.description}
							</Typography>
							<Button
								component={Link}
								to={`/product/${currentProduct.link}`}
								variant='contained'
								color='primary'
							>
								Узнать больше
							</Button>
						</Grid>
						<Grid item xs={6}>
							<img
								src={currentProduct.img}
								alt={currentProduct.title}
								style={{
									padding: '156px 0',
									marginLeft: 'auto',
									display: 'block',
								}}
							/>
						</Grid>
					</Grid>
				</Container>
			</div>
			<Box sx={{maxWidth: '2000px', width: '100%', margin: '0 auto', overflowX: 'hidden'}}>
				<Slider data={currentData} />
			</Box>
		</>
	);
}
