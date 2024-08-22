import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header/Header';

export default function NotFound() {
	return (
		<>
			<Header />
			<Container sx={{ textAlign: 'center', mt: 8 }}>
				<Typography variant='h3' gutterBottom>
					404 - Такой страницы нет
				</Typography>
				<Typography variant='h6' gutterBottom>
					К сожалению, запрашиваемая вами страница не существует.
				</Typography>
				<Button
					variant='contained'
					color='primary'
					component={Link}
					to='/'
					sx={{ mt: 4 }}
				>
					Вернуться на главную
				</Button>
			</Container>
		</>
	);
}
