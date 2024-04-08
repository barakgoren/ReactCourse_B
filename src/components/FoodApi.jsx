import React, { useEffect, useState } from 'react'
export default function FoodsApi() {
    const [foods_ar, setFoods_ar] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        doApi();
    }, [])
    const doApi = async () => {
        try {
            setLoading(true);
            const url = "http://fs1.co.il/bus/foods.php";
            const resp = await fetch(url);
            const data = await resp.json();
            setFoods_ar(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <h2>List of foods:</h2>
            {loading && <h2>Loading...</h2>}
            <ul>
                {foods_ar.map((item, i) => {
                    return (
                        <li key={i}>{item.name} - {item.price}</li>
                    )
                })}
            </ul>
        </div>
    )
}