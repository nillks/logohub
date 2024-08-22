import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import allProduct from '../../../data/allProduct';
import Slider from '../../UI/Slider/Slider';
import styles from './BetterOffer.module.css';

export default function BetterOffer() {
	const [activeBox, setActiveBox] = useState(0);
	const [data, setData] = useState(allProduct.filter(item => item.sale));

	const handleClick = (index, wordSort) => {
		setActiveBox(index)
		setData(allProduct.filter(item => item[wordSort]));
	};

	return (
		<div className={styles.offer}>
			<Container maxWidth='xl'>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					<Typography
						variant='h2'
						color='secondary'
						sx={{ fontSize: '72px', fontWeight: 700, pr: '40px' }}
					>
						Лучшие предложения
					</Typography>
					<div style={{ display: 'flex' }}>
						<Box sx={{ mr: '20px' }}>
							<Button
								variant='contained'
								sx={{
									borderRadius: '3px',
									background: activeBox === 0 ? '#0C100F' : 'transparent',
									color: activeBox === 0 ? '#ffffff' : '#0C100F',
									border: activeBox === 0 ? 'none' : '1px solid #0C100F',
								}}
								onClick={() => handleClick(0, 'sale')}
								
							>
								Скидки
							</Button>
						</Box>
						<Box sx={{ mr: '20px' }}>
							<Button
								variant='contained'
								sx={{
									borderRadius: '3px',
									background: activeBox === 1 ? '#0C100F' : 'transparent',
									color: activeBox === 1 ? '#ffffff' : '#0C100F',
									border: activeBox === 1 ? 'none' : '1px solid #0C100F',
								}}
								onClick={() => handleClick(1, 'new')}
							>
								Новые
							</Button>
						</Box>
						<Box>
							<Button
								variant='contained'
								sx={{
									borderRadius: '3px',
									background: activeBox === 2 ? '#0C100F' : 'transparent',
									color: activeBox === 2 ? '#ffffff' : '#0C100F',
									border: activeBox === 2 ? 'none' : '1px solid #0C100F',
								}}
								onClick={() => handleClick(2, 'ex')}
							>
								Эксклюзивныe
							</Button>
						</Box>
					</div>
				</Box>
				<Slider data={data} />
			</Container>
		</div>
	);
}
