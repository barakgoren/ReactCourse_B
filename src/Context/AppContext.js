import React, { createContext, useEffect, useState } from 'react';
import { baseUrl } from '../api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        fetchWorkers('abc');
    }, []);

    const fetchWorkers = async (compnayName) => {
        try {
            const response = await fetch(`${baseUrl}${compnayName}`);
            const data = await response.json();
            setWorkers(data.results);
        } catch (error) {
            console.error(error);
        }
    }

    const globalValue = {
        workers,
    };

    return (
        <AppContext.Provider value={globalValue}>
            {children}
        </AppContext.Provider>
    );
};