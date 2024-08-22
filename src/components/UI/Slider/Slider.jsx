import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBasket } from '../../../context/BasketContext';

import styles from './slider.module.css';

export default function Slider({ data }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [hoveredItem, setHoveredItem] = useState(null);
	const cardContainerRef = useRef(null);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const { addItemToBasket } = useBasket();

	const handleScroll = direction => {
		const container = cardContainerRef.current;
		const scrollAmount = 430;
		if (direction === 'left') {
			container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
		} else {
			container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const container = cardContainerRef.current;
		const updateScrollPosition = () => {
			setScrollPosition(container.scrollLeft);
		};
		container.addEventListener('scroll', updateScrollPosition);
		return () => container.removeEventListener('scroll', updateScrollPosition);
	}, []);

	return (
		<>
			<Box
				className={styles.cardContainer}
				sx={{
					display: 'flex',
					overflowX: 'auto',
					whiteSpace: 'nowrap',
					padding: '16px',
					gap: '20px',
				}}
				ref={cardContainerRef}
			>
				{data.map(item => (
					<Card
						className={styles.card}
						key={item.id}
						onMouseEnter={() => setHoveredItem(item.id)}
						onMouseLeave={() => setHoveredItem(null)}
					>
						<CardContent>
							<Box
								sx={{
									p: '140px 102px',
									position: 'relative',
									backgroundColor:
										hoveredItem === item.id ? '#F5F5F5' : 'transparent',
									transition: 'background-color 0.3s',
								}}
							>
								<img src={item.img} alt={item.title} />
								{hoveredItem === item.id && (
									<Box
										sx={{
											position: 'absolute',
											bottom: 0,
											left: '50%',
											transform: 'translateX(-50%)',
											display: 'flex',
											gap: '10px',
										}}
									>
										<Button
											variant='contained'
											color='primary'
											component={Link}
											to={`/product/${item.link}`}
											onClick={scrollToTop}
										>
											Купить
										</Button>
										<Button
											variant='contained'
											color='secondary'
											onClick={() => addItemToBasket(item)}
										>
											В корзину
										</Button>
									</Box>
								)}
							</Box>
							<Typography
								variant='h5'
								sx={{
									pt: '12px',
									pb: '8px',
									fontWeight: 500,
									fontSize: '25px',
								}}
							>
								{item.title}
							</Typography>
							<Typography
								variant='body2'
								sx={{
									whiteSpace: 'wrap',
									fontSize: '16px',
									fontWeight: 400,
									color: '#313E3A',
									lineHeight: '120%',
									pb: '20px',
								}}
							>
								{item.description}
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
								{item.oldPrice}
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
								{item.price}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
			<Box
				sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}
			>
				<Button
					variant='contained'
					onClick={() => handleScroll('left')}
					disabled={scrollPosition <= 0}
				>
					&#8592;
				</Button>
				<Button
					variant='contained'
					onClick={() => handleScroll('right')}
					disabled={
						scrollPosition >=
						cardContainerRef.current?.scrollWidth -
							cardContainerRef.current?.clientWidth -
							1
					}
					sx={{ marginLeft: '8px' }}
				>
					&#8594;
				</Button>
			</Box>
		</>
	);
}
