import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

export default function Foods() {
    const [foods_ar, setFoodAr] = useState([]);
    const params = useParams();
    useEffect(() => {
        doApi();
    }, [params])

    const doApi = async () => {
        const url = "http://fs1.co.il/bus/foods.php";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            const filter_ar = data.filter(item => {
                return item.category_id == params["id_category"];
            })
            setFoodAr(filter_ar);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            <h2>Foods: {params["id_category"]}</h2>
            <Link to={'/foods/cakes'}>Cakes</Link> | 
            <Link to={'/foods/Italy'}>Italy</Link>
            {foods_ar.map((item) => {
                return (<li key={item._id.$oid}>{item.name} - {item.price} NIS</li>)
            })}
        </div>
    )
}