import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

export default function Games() {
    const [query] = useSearchParams();
    const [games, setGames] = useState([]);
    const year = query.get('year');

    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        try {
            let url = "http://fs1.co.il/bus/xbox1.php";
            let data = await fetch(url);
            let finalData = await data.json();
            if (year == null) {
                console.log('year is null');
                setGames(finalData);
            } else {
                finalData = finalData.filter(item => item.Year == year);
                setGames(finalData);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='container'>
            <h1>Games from year: {query.get('year')}</h1>
            {/* List of games */}
            <ul>
                {games.map(item => {
                    return <li key={item.Game}><Link to={item.GameLink}>{item.Game}</Link></li>
                })}
            </ul>
        </div>
    )
}
