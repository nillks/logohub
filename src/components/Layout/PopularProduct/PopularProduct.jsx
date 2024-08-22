import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import allProduct from '../../../data/allProduct';
import styles from './popular.module.css';

const currentProduct = allProduct.find(({ popularProduct }) => popularProduct);

export default function PopularProduct() {
	return (
		<div className={styles.popularProduct}>
			<Container maxWidth='xl'>
				<Box display='flex' justifyContent='space-between' flexWrap='wrap'>
					<Box sx={{ pt: '292px' }}>
						<Typography
							variant='h1'
							color='primary'
							sx={{ fontSize: '62px', fontWeight: 700, mb: '20px' }}
						>
							{currentProduct.title}
						</Typography>
						<Typography
							variant='body1'
							color='primary'
							sx={{
								fontSize: '17px',
								fontWeight: 400,
								mb: '32px',
								maxWidth: '533px',
							}}
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
					</Box>
					<Box
						sx={{
							borderRadius: '8px',
							background: '#fff',
							p: '20px',
							mt: '140px',
							minHeight: '540px',
							width: '440px',
						}}
					>
						<img
							src={currentProduct.img}
							alt={currentProduct.title}
							style={{ margin: '0 auto', display: 'block', padding: '156px 0' }}
						/>

						<Typography
							variant='h3'
							sx={{ pb: '8px', fontSize: '25px', fontWeight: 500 }}
						>
							{currentProduct.title}
						</Typography>
						<Typography variant='body1' sx={{ pb: '20px' }}>
							{currentProduct.description}...
						</Typography>
						<Typography
							component='span'
							variant='body1'
							sx={{
								textDecoration: 'line-through',
								opacity: '0.3',
								fontSize: '15px',
								fontWeight: 400,
								mr: '6px',
							}}
						>
							{currentProduct.oldPrice}
						</Typography>
						<Typography
							variant='body1'
							color='secondary'
							component='span'
							sx={{
								fontSize: '15px',
								fontWeight: 400,
								mr: '6px',
							}}
						>
							{currentProduct.price}
						</Typography>
					</Box>
				</Box>
			</Container>
		</div>
	);
}
