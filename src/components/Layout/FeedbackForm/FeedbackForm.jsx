import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

import style from './FeedbackForm.module.css';

const textFieldStyles = {
	'& .MuiInputBase-root': {
		color: '#fff',
		opacity: '0.7',
		fontSize: '17px',
		fontWeight: 400,
	},
	'& .MuiInputLabel-root': {
		color: '#fff',
		opacity: '0.7',
		fontSize: '17px',
		fontWeight: 400,
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			border: 'none',
			borderBottom: '1px solid rgba(220, 220, 220, 0.7)',
		},
		'&:hover fieldset': {
			border: 'none',
			borderBottom: '1px solid rgba(220, 220, 220, 0.7)',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
			borderBottom: '1px solid rgba(220, 220, 220, 0.7)',
		},
	},
};

export default function FeedbackForm() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		comment: '',
		agree: false,
	});

	const handleChange = e => {
		const { name, value, checked, type } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		alert('Сообщение отправлено!');
	};

	return (
		<Box className={style.feedback} background='secondary'>
			<Container maxWidth='xl'>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography
							variant='h6'
							color='primary'
							sx={{ fontSize: '40px', maxWidth: '422px', fontWeight: 700 }}
						>
							Остались вопросы? Мы готовы помочь!
						</Typography>
						<form onSubmit={handleSubmit}>
							<TextField
								required
								label='Имя'
								name='name'
								value={formData.name}
								onChange={handleChange}
								fullWidth
								margin='normal'
								sx={textFieldStyles}
							/>
							<TextField
								required
								label='Телефон'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								fullWidth
								margin='normal'
								sx={textFieldStyles}
							/>
							<TextField
								label='Почта'
								name='email'
								value={formData.email}
								onChange={handleChange}
								fullWidth
								margin='normal'
								sx={textFieldStyles}
							/>
							<TextField
								label='Комментарий'
								name='comment'
								value={formData.comment}
								onChange={handleChange}
								fullWidth
								margin='normal'
								sx={textFieldStyles}
							/>
							<Button
								type='submit'
								variant='contained'
								fullWidth
								sx={{
									display: 'block',
									color: formData.agree ? '#000' : '#fff',
									backgroundColor: formData.agree ? '#fff' : 'gray',
									'&:hover': {
										backgroundColor: formData.agree ? '#f0f0f0' : 'gray',
									},
								}}
							>
								Отправить
							</Button>
							<FormControlLabel
								control={
									<Checkbox
										name='agree'
										checked={formData.agree}
										onChange={handleChange}
										sx={{
											color: '#fff',
											'&.Mui-checked': {
												color: '#fff',
											},
										}}
									/>
								}
								label={
									<Typography sx={{ color: '#fff' }}>
										Нажимая на кнопку «Отправить», вы соглашаетесь с Политикой
										конфиденциальности.
									</Typography>
								}
							/>
						</form>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						container
						alignItems='center'
						justifyContent='center'
					>
						<Typography
							variant='body1'
							align='center'
							color='primary'
							sx={{
								color: 'rgba(255, 255, 255, 0.7)',
								fontWeight: 400,
								fontSize: '17px',
							}}
						>
							Или напишите на нашу почту:{' '}
							<Link
								href='mailto:logohub.main@mail.com'
								color='primary'
								sx={{
									display: 'block',
									textDecoration: 'none',
									fontSize: '25px',
									fontWeight: 500,
									opacity: 1,
									color: '#fff',
								}}
							>
								logohub.main@mail.com
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
