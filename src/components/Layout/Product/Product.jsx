import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Pagination,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../../data/allProduct';

const categories = [
	{ name: 'Все', link: 'All' },
	{ name: 'Корпоративные', link: 'Корпоративные' },
	{ name: 'Технологичные', link: 'Технологичные' },
	{ name: 'Креативные', link: 'Креативные' },
	{ name: 'Здоровье', link: 'Здоровье' },
	{ name: 'Еда', link: 'Еда' },
	{ name: 'Мода', link: 'Мода' },
	{ name: 'Образование', link: 'Образование' },
];

export default function Product() {
	// Состояния компонента
	const [activeCategory, setActiveCategory] = useState('All');
	const [product, setProduct] = useState(data);
	const [hoveredItem, setHoveredItem] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 8;

	const totalPages = Math.ceil(product.length / itemsPerPage);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const currentProducts = product.slice(startIndex, endIndex);

	const handleCategoryClick = category => {
		setActiveCategory(category);
		setCurrentPage(1);

		if (category === 'All') {
			setProduct(data);
		} else {
			setProduct(data.filter(item => item.category === category));
		}
	};

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

	return (
		<Box>
			<Container maxWidth='xl'>
				<Typography
					variant='h2'
					color='secondary'
					pt='80px'
					sx={{
						fontSize: '72px',
						fontWeight: 700,
						pb: '20px',
					}}
				>
					{categories.find(cat => cat.link === activeCategory)?.name ||
						'Корпоративные'}
				</Typography>

				<Typography
					variant='body1'
					color='secondary'
					sx={{
						maxWidth: '520px',
						fontSize: '17px',
						fontWeight: 400,
						pb: '20px',
					}}
				>
					Lorem ipsum dolor sit amet consectetur. Sapien elit curabitur feugiat
					luctus dui eros. Dolor sed sed aliquet eu pretium.
				</Typography>

				<Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
					{categories.map(category => (
						<Button
							key={category.link}
							variant='contained'
							sx={{
								borderRadius: '3px',
								backgroundColor:
									activeCategory === category.link ? '#0C100F' : 'transparent',
								color: activeCategory === category.link ? '#ffffff' : '#0C100F',
								border:
									activeCategory === category.link
										? 'none'
										: '1px solid #0C100F',
								'&:hover': {
									backgroundColor:
										activeCategory === category.link ? '#333' : '#f5f5f5',
									color: '#0C100F',
								},
							}}
							onClick={() => handleCategoryClick(category.link)}
						>
							{category.name}
						</Button>
					))}
				</Box>

				<Grid container spacing={4} sx={{ mt: 4 }}>
					{currentProducts.map(item => (
						<Grid item xs={12} sm={6} md={3} key={item.id}>
							<Card
								onMouseEnter={() => setHoveredItem(item.id)}
								onMouseLeave={() => setHoveredItem(null)}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									height: '100%',
								}}
							>
								<Box
									sx={{
										position: 'relative',
										backgroundColor:
											hoveredItem === item.id ? '#e0e0e0' : '#ffffff',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: '8px',
										mb: 2,
										transition: 'background-color 0.3s ease',
										cursor: 'pointer',
										height: '400px',
									}}
								>
									<img
										src={item.img}
										alt={item.title}
										style={{
											maxWidth: '100%',
											maxHeight: '100%',
											objectFit: 'cover',
										}}
									/>
									{hoveredItem === item.id && (
										<Box
											sx={{
												position: 'absolute',
												bottom: 16,
												left: '50%',
												transform: 'translateX(-50%)',
												display: 'flex',
												gap: '10px',
											}}
										>
											<Button
												variant='contained'
												color='secondary'
												component={Link}
												to={`/product/${item.link}`}
												sx={{ padding: '8px 16px' }}
												
											>
												Купить
											</Button>
											<Button
												variant='contained'
												color='secondary'
												sx={{ padding: '8px 16px' }}
												fullWidth
											>
												В корзину
											</Button>
										</Box>
									)}
								</Box>

								<CardContent sx={{ flexGrow: 1 }}>
									<Typography
										variant='h5'
										sx={{ fontWeight: 500, fontSize: '25px', mb: 1 }}
									>
										{item.title}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										sx={{ mb: 2 }}
									>
										{item.description}
									</Typography>
								</CardContent>

								<Box sx={{ padding: '16px' }}>
									<Typography
										component='span'
										variant='body1'
										sx={{
											textDecoration: 'line-through',
											opacity: '0.3',
											mr: 1,
										}}
									>
										{item.oldPrice}
									</Typography>
									<Typography
										variant='body1'
										color='secondary'
										component='span'
									>
										{item.price}
									</Typography>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>

				{totalPages > 1 && (
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							mt: 4,
							mb: 4,
						}}
					>
						<Pagination
							count={totalPages}
							page={currentPage}
							onChange={handlePageChange}
							color='standard'
							variant='outlined'
							shape='rounded'
						/>
					</Box>
				)}
			</Container>
		</Box>
	);
}
