import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	Box,
	Button,
	Container,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Merchandise.css'; // Файл для кастомных анимаций

import { Favorite } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stars from '@mui/icons-material/Stars';
import { useBasket } from '../../../context/BasketContext';
import { useFavorite } from '../../../context/FavoriteContext';

export default function Merchandise({ product }) {
	const [view, setView] = useState('description');
	const [activeSlide, setActiveSlide] = useState(1);
	const swiperRef = useRef(null);
	const { addItemToBasket } = useBasket();
	const { addItemToFavorite } = useFavorite();

	const handleSlideChange = swiper => {
		setActiveSlide(swiper.activeIndex + 1);
	};

	return (
		<Box pt='80px'>
			<Container maxWidth='xl'>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Swiper
							onSwiper={swiper => {
								swiperRef.current = swiper;
							}}
							spaceBetween={50}
							slidesPerView={1}
							onSlideChange={handleSlideChange}
							modules={[Navigation, Pagination]}
							navigation={false}
							pagination={false}
						>
							{[...Array(4)].map((_, index) => (
								<SwiperSlide key={index}>
									<Box
										component='img'
										sx={{
											height: 400,
											display: 'block',
											maxWidth: '100%',
											overflow: 'hidden',
											width: '100%',
										}}
										src={product.img}
										alt={`slide ${index + 1}`}
									/>
								</SwiperSlide>
							))}
						</Swiper>
						<Box className='indicators'>
							{[...Array(4)].map((_, index) => (
								<Box
									key={index}
									className={`indicator ${activeSlide === index + 1 ? 'indicator-active' : ''}`}
								/>
							))}
						</Box>
						<Box className='controls'>
							<IconButton onClick={() => swiperRef.current.slidePrev()}>
								<ArrowBackIosIcon />
							</IconButton>
							<Typography align='center'>{`${activeSlide} / 4`}</Typography>
							<IconButton onClick={() => swiperRef.current.slideNext()}>
								<ArrowForwardIosIcon />
							</IconButton>
						</Box>
					</Grid>

					<Grid item xs={12} md={6}>
						<Typography
							variant='h4'
							sx={{ pt: '64px', fontSize: '25px', fontWeight: 500, pb: '20px' }}
						>
							{product.title}
						</Typography>
						<Typography
							variant='body'
							sx={{ fontSize: '18px', fontWeight: 300, pb: '20px' }}
						>
							{product.description}
						</Typography>
						<Stack
							direction='row'
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							spacing={2}
							sx={{ mt: 2 }}
						>
							<Box display='flex' gap='10px' alignItems='center'>
								<Typography
									variant='body2'
									sx={{ textDecoration: 'line-through' }}
								>
									{product.oldPrice}
								</Typography>
								<Typography variant='h5' component='span'>
									{product.price}
								</Typography>
							</Box>
							<Stack direction='row' alignItems='center'>
								<Stars />
								<Typography variant='body2' sx={{ ml: 1 }}>
									4.8
								</Typography>
								<Typography variant='body2' sx={{ ml: 1 }}>
									(16 оценок)
								</Typography>
							</Stack>
						</Stack>

						<Button
							fullWidth
							variant='contained'
							sx={{
								backgroundColor: 'black',
								mt: 2,
								color: '#fff',
								padding: '20px 0',
								fontSize: '18px',
							}}
						>
							Купить
						</Button>
						<Stack direction='row' spacing={2} sx={{ mt: 2 }}>
							<Button
								variant='contained'
								fullWidth
								sx={{ padding: '20px 0' }}
								onClick={() => addItemToFavorite(product)}
							>
								<Favorite /> Избранное
							</Button>
							<Button
								variant='contained'
								fullWidth
								sx={{ padding: '20px 0' }}
								onClick={() => addItemToBasket(product)}
							>
								<ShoppingCartIcon /> В корзину
							</Button>
						</Stack>
						<Stack
							direction='row'
							spacing={2}
							sx={{
								mt: 4,
								pb: '5px',
								position: 'relative',
								borderBottom: '1px solid lightgrey',
							}}
						>
							<Button
								fullWidth
								color='secondary'
								onClick={() => setView('description')}
								sx={{
									color: view === 'description' ? 'black' : 'grey',
									position: 'relative',
									'&::after': {
										content: '""',
										position: 'absolute',
										bottom: -1,
										left: 0,
										right: 0,
										height: '2px',
										backgroundColor:
											view === 'description' ? 'transparent' : 'transparent',
										transition: 'background-color 0.3s',
									},
								}}
							>
								Описание
							</Button>
							<Button
								fullWidth
								color='secondary'
								onClick={() => setView('how-it-works')}
								sx={{
									color: view === 'how-it-works' ? 'black' : 'grey',
									position: 'relative',
									'&::after': {
										content: '""',
										position: 'absolute',
										bottom: -1,
										left: 0,
										right: 0,
										height: '2px',
										backgroundColor:
											view === 'how-it-works' ? 'transparent' : 'transparent',
										transition: 'background-color 0.3s',
									},
								}}
							>
								Как это работает?
							</Button>
							<Box
								sx={{
									position: 'absolute',
									bottom: 0,
									left: view === 'description' ? '0%' : '50%',
									width: '50%',
									height: '2px',
									backgroundColor: 'black',
									transition: 'left 0.3s',
								}}
							/>
						</Stack>

						<SwitchTransition mode='out-in'>
							<CSSTransition key={view} timeout={300} classNames='fade'>
								<Typography variant='body2' sx={{ mt: 2 }}>
									{view === 'description'
										? product.description
										: product.description}
								</Typography>
							</CSSTransition>
						</SwitchTransition>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
