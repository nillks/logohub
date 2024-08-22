import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	Link,
	Typography,
} from '@mui/material';
import React from 'react';
import style from './footer.module.css';

export default function Footer() {
	return (
		<Box>
			<Container maxWidth='xl'>
				<Box className={style.footer}>
					<Grid container spacing={2} pt='320px'>
						<Grid item xs={12} md={7}>
							<Typography
								variant='body1'
								sx={{ maxWidth: '320px', fontSize: '17px', fontWeight: 400 }}
							>
								Lorem ipsum dolor sit amet consectetur. Massa et egestas amet
								scelerisque amet et arcu. Varius augue nullam a condimentum nunc
								amet.
							</Typography>
						</Grid>

						<Grid
							item
							xs={12}
							md={5}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								gap: '16px',
							}}
						>
							<Link
								href='mailto:logohub.main@mail.com'
								color='inherit'
								sx={{ marginBottom: '16px' }}
							>
								logohub.main@mail.com
							</Link>

							<Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
								{['WhatsApp', 'Telegram', 'Instagram', 'Facebook'].map(item => (
									<Link
										key={item}
										href={`https://${item.toLowerCase()}.com`}
										target='_blank'
										rel='noopener noreferrer'
										sx={{
											display: 'inline-block',
											backgroundColor: '#000',
											color: '#fff',
											padding: '8px 16px',
											textDecoration: 'none',
											marginRight: '8px',
											borderRadius: '4px',
											fontWeight: 500,
										}}
									>
										{item}
									</Link>
								))}
							</Box>
						</Grid>
					</Grid>

					<Divider
						sx={{
							marginTop: '16px',
							opacity: 0.3,
							background: '#313E3A',
						}}
					/>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: '16px',
						}}
					>
						<Typography variant='body2'>© Copyright 2024 Logohub</Typography>
						<Link href='/privacy-policy' color='inherit'>
							Политика конфиденциальности
						</Link>
						<Button
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							sx={{
								backgroundColor: '#000',
								color: '#fff',
								padding: '8px 16px',
								borderRadius: '4px',
								'&:hover': {
									backgroundColor: '#000',
									color: '#fff',
									opacity: '0.7'
								},
							}}
						>
							Вернуться наверх
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
