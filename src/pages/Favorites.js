import React, { useContext } from 'react'
import EmployeeCard from '../components/EmployeeCard';
import { AppContext } from '../Context/AppContext';

export default function Favorites() {
    const { favorites } = useContext(AppContext);
    return (
        <div className='d-flex flex-column align-items-center container-fluid'>
            <h1>Favorites</h1>
            <div className='d-flex flex-wrap justify-content-center'>
                {favorites.map(favorite => (
                    <EmployeeCard key={favorite.login.username} worker={favorite} />
                ))}
            </div>
        </div>
    )
}
