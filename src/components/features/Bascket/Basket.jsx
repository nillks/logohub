import { Close } from '@mui/icons-material';
import {
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	Typography,
} from '@mui/material';
import React from 'react';
import { useBasket } from '../../../context/BasketContext';

export default function Basket({ openBasket, closeBasket }) {
	const { basketItems, removeItemFromBasket } = useBasket();

	const totalAmount = basketItems.reduce(
		(total, item) => total + item.price,
		0
	);

	return (
		<Drawer
			anchor='right'
			open={openBasket}
			onClose={closeBasket}
			PaperProps={{
				sx: {
					width: '400px',
					maxWidth: '100%',
					'@media (max-width: 600px)': {
						width: '70%',
					},
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '1rem',
				}}
			>
				<Typography variant='h3' component='h3'>
					Корзина {basketItems.length > 0 && `(${basketItems.length})`}
				</Typography>
				<IconButton onClick={closeBasket}>
					<Close />
				</IconButton>
			</Box>
			<Divider sx={{ backgroundColor: '#0C100F' }} />

			<Box sx={{ padding: '1rem' }}>
				{basketItems.length === 0 ? (
					<Typography>Ваша корзина пуста.</Typography>
				) : (
					basketItems.map(item => (
						<Box
							key={item.uuid}
							sx={{
								display: 'flex',
								alignItems: 'center',
								marginBottom: '1rem',
							}}
						>
							<img
								src={item.img}
								alt={item.title}
								style={{ width: '80px', height: '80px', marginRight: '1rem' }}
							/>
							<Box sx={{ flex: 1 }}>
								<Typography variant='body1'>{item.title}</Typography>
								<Typography variant='body2'>{item.description}</Typography>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									{item.oldPrice && (
										<Typography
											variant='body2'
											sx={{
												textDecoration: 'line-through',
												opacity: 0.5,
												marginRight: '8px',
											}}
										>
											{item.oldPrice}
										</Typography>
									)}
									<Typography variant='body2' color='secondary'>
										{item.price} тг
									</Typography>
								</Box>
							</Box>
							<Button
								variant='text'
								color='error'
								onClick={() => removeItemFromBasket(item.uuid)}
							>
								Удалить
							</Button>
						</Box>
					))
				)}
			</Box>

			{basketItems.length > 0 && (
				<>
					<Divider sx={{ backgroundColor: '#0C100F' }} />
					<Box sx={{ padding: '1rem', textAlign: 'right' }}>
						<Typography variant='h6'>Итого: {totalAmount} тг</Typography>
					</Box>
				</>
			)}
		</Drawer>
	);
}
