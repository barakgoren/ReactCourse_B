import React, { useEffect, useState } from 'react'

export default function ApiShop() {
    const [shop_ar, setShopAr] = useState([]);
    const url = 'http://fs1.co.il/bus/shop.php';

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setShopAr(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container'>
            <h2>Shop List:</h2>
            <div className='row'>
                {shop_ar.map(item => {
                    return (
                        <article className='border p-2 col-md-4' key={item.id}>
                            <h3>{item.name}</h3>
                            <div>Price: {item.price} NIS</div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
