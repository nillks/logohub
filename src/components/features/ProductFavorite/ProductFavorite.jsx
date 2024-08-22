import React from 'react';
import { Close } from '@mui/icons-material';
import {
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	Typography,
} from '@mui/material';
import { useFavorite } from '../../../context/FavoriteContext';

export default function ProductFavorite({ openFavorite, closeFavorite }) {
	const { favoriteItems, removeItemFromFavorite } = useFavorite();

	return (
		<Drawer
			anchor='right'
			open={openFavorite}
			onClose={closeFavorite}
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
					Избранное {favoriteItems.length > 0 && `(${favoriteItems.length})`}
				</Typography>
				<IconButton onClick={closeFavorite}>
					<Close />
				</IconButton>
			</Box>
			<Divider sx={{ backgroundColor: '#0C100F' }} />

			<Box sx={{ padding: '1rem' }}>
				{favoriteItems.length === 0 ? (
					<Typography>Ваше избранное пусто.</Typography>
				) : (
					favoriteItems.map(item => (
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
								onClick={() => removeItemFromFavorite(item.uuid)}
							>
								Удалить
							</Button>
						</Box>
					))
				)}
			</Box>
		</Drawer>
	);
}
