import React, { createContext, useEffect, useState } from 'react';
import { baseUrl } from '../api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [workers, setWorkers] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchWorkers('abc');
    }, []);

    // TODO: Remove this useEffect after testing (AppContext.js)
    useEffect(() => {
        console.log(favorites);
    }, [favorites]);

    const fetchWorkers = async (compnayName) => {
        try {
            const response = await fetch(`${baseUrl}${compnayName}`);
            const data = await response.json();
            setWorkers(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    const toggleFavorite = (worker) => {
        if (favorites.find(favorite => favorite.login.username === worker.login.username)) {
            const newFavorites = favorites.filter(favorite => favorite.login.username !== worker.login.username);
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        }
        else {
            setFavorites([...favorites, worker]);
            localStorage.setItem('favorites', JSON.stringify([...favorites, worker]));
        }
    }

    const globalValue = {
        workers, favorites, toggleFavorite
    };

    return (
        <AppContext.Provider value={globalValue}>
            {children}
        </AppContext.Provider>
    );
};