import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
	const [favoriteItems, setFavoriteItems] = useState(() => {
		const savedItems = localStorage.getItem('favorites');
		return savedItems ? JSON.parse(savedItems) : [];
	});

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favoriteItems));
	}, [favoriteItems]);

	const addItemToFavorite = item => {
		const updatedItem = { ...item, uuid: uuidv4() };
		setFavoriteItems(prevItems => [...prevItems, updatedItem]);
	};

	const removeItemFromFavorite = uuid => {
		setFavoriteItems(prevItems => prevItems.filter(item => item.uuid !== uuid));
	};

	return (
		<FavoriteContext.Provider
			value={{ favoriteItems, addItemToFavorite, removeItemFromFavorite }}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

export const useFavorite = () => useContext(FavoriteContext);
