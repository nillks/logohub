import { Favorite, Person, Search, ShoppingBasket } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Basket from '../../features/Bascket/Basket';
import ProductFavorite from '../../features/ProductFavorite/ProductFavorite';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

const pages = [
	{ name: 'Каталог', url: 'catalog' },
	{ name: 'О нас', url: 'about' },
	{ name: 'FAQ', url: 'faq' },
	{ name: 'Контакты', url: 'contact' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
	const [openSearch, setOpenSearch] = useState(false);
	const [openFavorite, setOpenFavorite] = useState(false);
	const [openBasket, setOpenBasket] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const handleOpenSearch = () => {
		setOpenSearch(true);
	};

	const handleOpenFavorite = () => {
		setOpenFavorite(true);
	};

	const handleOpenBasket = () => {
		setOpenBasket(true);
	};

	const handleCloseSearch = () => {
		setOpenSearch(false);
	};

	const handleCloseFavorite = () => {
		setOpenFavorite(false);
	};

	const handleCloseBasket = () => {
		setOpenBasket(false);
	};

	const handleSearchChange = event => {
		setSearchValue(event.target.value);
	};

	return (
		<AppBar position='static' sx={{ minHeight: '78px', boxShadow: 'none' }}>
			<Container maxWidth='xl'>
				<Toolbar
					disableGutters
					sx={{ justifyContent: 'space-between', minHeight: '78px !important' }}
				>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						color='secondary'
						sx={{
							display: { xs: 'none', md: 'flex' },
							textDecoration: 'none',
						}}
					>
						<svg
							width='132'
							height='22'
							viewBox='0 0 132 22'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M115.571 0.44458H124.102C127.874 0.44458 130.506 3.55754 130.506 6.64434C130.506 9.26027 128.785 11.0653 128.101 11.0653C130.025 11.0653 132 13.2103 132 15.9309C132 18.8084 129.823 21.6075 126.051 21.6075H115.571V0.44458ZM120.102 4.5516V8.97252H124.481C125.646 8.97252 126.583 7.95231 126.583 6.77514C126.583 5.59797 125.595 4.5516 124.507 4.5516H120.102ZM125.772 17.5005C126.937 17.5005 127.874 16.5326 127.874 15.3292C127.874 14.0998 126.912 13.0795 125.722 13.0795H120.102V17.5005H125.772Z'
								fill='#0C100F'
							/>
							<path
								d='M109.389 0.418457H113.414V13.4981C113.414 18.1545 110.908 21.9999 104.984 21.9999C99.1619 21.9999 96.5798 18.1545 96.5798 13.4981V0.418457H100.58V13.4458V13.6028C100.58 16.925 102.984 17.8406 104.984 17.8406C107.009 17.8406 109.389 16.925 109.389 13.5766V13.4458V0.418457Z'
								fill='#0C100F'
							/>
							<path
								d='M81.2654 0.44458V8.44934H89.8976V0.44458H94.4542V21.6075H89.8976V12.6871H81.2654V21.6075H76.7341V0.44458H81.2654Z'
								fill='#0C100F'
							/>
							<path
								d='M65.3271 0C70.9216 0 75.0984 4.08086 75.0984 11.0131C75.0984 18.2592 70.6684 22 65.3271 22C59.9858 22 55.5811 18.2331 55.5811 11.0131C55.5811 3.95006 59.9858 0 65.3271 0ZM65.3271 17.6314C68.3901 17.6314 70.6684 15.5648 70.6684 11.0131C70.6684 6.48751 68.3648 4.39477 65.3271 4.39477C62.3147 4.39477 59.9858 6.48751 59.9858 11.0131C59.9858 15.5648 62.2894 17.6314 65.3271 17.6314Z'
								fill='#0C100F'
							/>
							<path
								d='M46.0468 11.1962H54.4259V21.5814H51.6666L51.2869 19.7241C49.5655 21.2414 47.3378 22 44.9077 22C39.5663 22 35.1616 18.2331 35.1616 11.0131C35.1616 3.95006 39.5663 0 44.9077 0C49.6161 0 53.312 2.90369 54.3499 7.92628H49.7933C48.9833 5.51962 47.1606 4.39477 44.9077 4.39477C41.8952 4.39477 39.5663 6.51367 39.5663 11.0131C39.5663 15.5648 41.8699 17.6314 44.9077 17.6314C47.0341 17.6314 48.8314 16.6112 49.7174 14.3353H46.0468V11.1962Z'
								fill='#0C100F'
							/>
							<path
								d='M24.4633 0C30.0578 0 34.2347 4.08086 34.2347 11.0131C34.2347 18.2592 29.8047 22 24.4633 22C19.122 22 14.7173 18.2331 14.7173 11.0131C14.7173 3.95006 19.122 0 24.4633 0ZM24.4633 17.6314C27.5264 17.6314 29.8047 15.5648 29.8047 11.0131C29.8047 6.48751 27.501 4.39477 24.4633 4.39477C21.4509 4.39477 19.122 6.48751 19.122 11.0131C19.122 15.5648 21.4256 17.6314 24.4633 17.6314Z'
								fill='#0C100F'
							/>
							<path
								d='M4.53127 17.3697H14.5304V21.6075H0V0.44458H4.53127V17.3697Z'
								fill='#0C100F'
							/>
						</svg>
					</Typography>

					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							justifyContent: 'space-between',
							textAlign: 'center',
							gap: '48px',
						}}
					>
						{pages.map(page => (
							<Button
								key={page.url}
								component={Link}
								to={`/${page.url.toLowerCase()}`}
								sx={{ display: 'block', fontSize: '18px', fontWeight: 500 }}
								color='secondary'
							>
								{page.name}
							</Button>
						))}
					</Box>

					<Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
						<IconButton onClick={handleOpenSearch}>
							<Search color='secondary' sx={{ fontSize: 32, opacity: 0.8 }} />
						</IconButton>
						<ProductSearch
							openSearch={openSearch}
							closeSearch={handleCloseSearch}
							value={searchValue}
							onChange={handleSearchChange}
						/>
						<IconButton onClick={handleOpenFavorite}>
							<Favorite color='secondary' sx={{ fontSize: 32, opacity: 0.8 }} />
						</IconButton>
						<ProductFavorite
							openFavorite={openFavorite}
							closeFavorite={handleCloseFavorite}
						/>
						<IconButton>
							<Person color='secondary' sx={{ fontSize: 32, opacity: 0.8 }} />
						</IconButton>
						<IconButton onClick={handleOpenBasket}>
							<ShoppingBasket
								color='secondary'
								sx={{ fontSize: 32, opacity: 0.8 }}
							/>
						</IconButton>
						<Basket openBasket={openBasket} closeBasket={handleCloseBasket} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Header;
