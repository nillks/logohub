import React from 'react';
import { useParams } from 'react-router-dom';
import BetterOffer from '../Layout/BetterOffer/BetterOffer';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import Merchandise from '../Layout/Merchandise/Merchandise';
import Reviews from "../Layout/Reviews/Reviews";

const Product = ({ products }) => {
	const { productLink } = useParams();
	const product = products.find(p => p.link === productLink);

	return (
		<div>
			<Header />
			{product ? <Merchandise product={product} /> : <p>Продукт не найден</p>}
			<BetterOffer />
			{product ? <Reviews /> : <></>}

			<Footer />
		</div>
	);
};

export default Product;
