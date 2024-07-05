import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import EmployeeFavCard from '../components/EmployeeFavCard';

export default function Favorites() {
    const { favorites } = useContext(AppContext);
    return (
        <div className='d-flex flex-column align-items-center container-fluid'>
            <h1>Favorites</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                {favorites.map(favorite => (
                    <EmployeeFavCard key={favorite.login.username} worker={favorite} />
                ))}
            </div>
        </div>
    )
}
