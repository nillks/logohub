import { Close, Search } from '@mui/icons-material';
import {
	Box,
	Drawer,
	IconButton,
	InputAdornment,
	TextField,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../../data/allProduct';

export default function ProductSearch({
	openSearch,
	closeSearch,
	value,
	onChange,
}) {
	const [filteredData, setFilteredData] = useState([]);
	const [searchTerm, setSearchTerm] = useState(value);
	const navigate = useNavigate();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (searchTerm) {
				const results = data.filter(
					item =>
						item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
						item.description.toLowerCase().includes(searchTerm.toLowerCase())
				);
				setFilteredData(results);
			} else {
				setFilteredData([]);
			}
		}, 300);

		return () => clearTimeout(timeoutId);
	}, [searchTerm]);

	const handleResultClick = link => {
		navigate(`/product/${link}`);
		closeSearch();
	};

	return (
		<Drawer
			anchor='right'
			open={openSearch}
			onClose={closeSearch}
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
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '1rem',
				}}
			>
				<TextField
					label='Введите название товара'
					variant='filled'
					fullWidth
					color='secondary'
					type='search'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					sx={{ mb: '1.5rem', fontSize: '18px' }}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<Search />
							</InputAdornment>
						),
					}}
				/>
				<IconButton onClick={closeSearch}>
					<Close />
				</IconButton>
			</div>

			<Box sx={{ padding: '0 1rem' }}>
				{filteredData.map(item => (
					<Box
						key={item.id}
						sx={{
							display: 'flex',
							alignItems: 'center',
							padding: '1rem 0',
							cursor: 'pointer',
							'&:hover': {
								backgroundColor: '#f0f0f0',
							},
						}}
						onClick={() => handleResultClick(item.link)}
					>
						<img
							src={item.img}
							alt={item.title}
							style={{ width: '50px', marginRight: '1rem' }}
						/>
						<Box>
							<Typography variant='h6'>{item.title}</Typography>
							<Typography
								variant='body2'
								color='textSecondary'
								sx={{ marginBottom: '0.5rem' }}
							>
								{item.description}
							</Typography>
							<Typography variant='body1'>
								<span
									style={{ textDecoration: 'line-through', marginRight: '8px' }}
								>
									{item.oldPrice}
								</span>
								<span>{item.price}</span>
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Drawer>
	);
}
