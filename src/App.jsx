import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './components/pages/Catalog';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import { BasketProvider } from './context/BasketContext';
import { FavoriteProvider } from './context/FavoriteContext.jsx';
import product from './data/allProduct.js';

const theme = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
		secondary: {
			main: '#0C100F',
		},
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
	},
});

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<BasketProvider>
				<FavoriteProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/catalog' element={<Catalog />} />
							<Route
								path='/product/:productLink'
								element={<Product products={product} />}
							/>
						</Routes>
					</BrowserRouter>
				</FavoriteProvider>
			</BasketProvider>
		</ThemeProvider>
	);
}
