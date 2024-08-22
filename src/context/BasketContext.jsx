import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
	const [basketItems, setBasketItems] = useState(() => {
		const savedItems = localStorage.getItem('basket');
		return savedItems ? JSON.parse(savedItems) : [];
	});

	useEffect(() => {
		localStorage.setItem('basket', JSON.stringify(basketItems));
	}, [basketItems]);

	const addItemToBasket = item => {
		const cleanedPrice = parseFloat(
			item.price.replace(' тг', '').replace(/\s/g, '')
		);
		const updatedItem = { ...item, price: cleanedPrice, uuid: uuidv4() };
		setBasketItems(prevItems => [...prevItems, updatedItem]);
	};

	const removeItemFromBasket = uuid => {
		setBasketItems(prevItems => prevItems.filter(item => item.uuid !== uuid));
	};

	return (
		<BasketContext.Provider
			value={{ basketItems, addItemToBasket, removeItemFromBasket }}
		>
			{children}
		</BasketContext.Provider>
	);
};

export const useBasket = () => useContext(BasketContext);
