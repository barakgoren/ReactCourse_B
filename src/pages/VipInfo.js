import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function VipInfo() {
    const [info, setInfo] = useState({});
    const params = useParams();

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        const url = "http://fs1.co.il/bus/vip_big.php";
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            const item = data.find(item => item.rank == params["rank"])
            setInfo(item)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container'>
            {info.name &&
                <article>
                    <h2>Info about: {info.personName}</h2>
                    <img src={info.person.squareImage} className='col-4' alt="vip" />
                    <div>Companies: {info.source}</div>
                    <div>Bio: {info.bios[0]}</div>
                    <Link to="/vip">Back to list</Link>
                </article>
            }
        </div>
    )
}