import React, { createContext, useEffect, useState } from 'react';
import { baseUrl } from '../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [workers, setWorkers] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('favorites')) {
            setFavorites(JSON.parse(localStorage.getItem('favorites')));
        }
        fetchWorkers('abc');
    }, []);

    // TODO: Remove this useEffect after testing (AppContext.js)
    useEffect(() => {
        // console.log(favorites);
    }, [favorites]);

    const fetchWorkers = async (compnayName) => {
        setWorkers([]);
        setIsSearching(true);
        // Simulate loading
        await new Promise(r => setTimeout(r, 500));
        try {
            const response = await fetch(`${baseUrl}${compnayName}`);
            const data = await response.json();
            setWorkers(data.results);
        } catch (error) {
            toast.error("Error fetching workers");
        }
        setIsSearching(false);
    }

    const toggleFavorite = (worker) => {
        if (favorites.find(favorite => favorite.login.username === worker.login.username)) {
            const newFavorites = favorites.filter(favorite => favorite.login.username !== worker.login.username);
            setFavorites(newFavorites);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            toast.success('Worker removed from favorites');
        }
        else {
            setFavorites([...favorites, worker]);
            localStorage.setItem('favorites', JSON.stringify([...favorites, worker]));
            toast.success('Worker added to favorites');
        }
    }

    const globalValue = {
        workers, favorites, isSearching, toggleFavorite, fetchWorkers
    };

    return (
        <AppContext.Provider value={globalValue}>
            <ToastContainer stacked newestOnTop={true} />
            {children}
        </AppContext.Provider>
    );
};