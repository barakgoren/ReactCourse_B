import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { baseUrl } from '../api';
import { toast } from 'react-toastify';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default function MoreInfo() {
    const [query] = useSearchParams();
    const [user, setUser] = useState({});
    const [coords, setCoords] = useState([0, 0]);
    const nav = useNavigate();
    // Company can be null
    let company = query.get('company');
    let index = query.get('index');

    useEffect(() => {
        // Fetch user data
        fetchUser();
        // eslint-disable-next-line
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch(baseUrl + company);
            const data = await response.json();
            setUser(data.results[index]);
            let lat = Number(data.results[index].location.coordinates.latitude);
            let long = Number(data.results[index].location.coordinates.longitude);
            setCoords([lat, long]);
        } catch (error) {
            toast.error('Error fetching user data');
        }
    }

    return (
        <div>
            <div className='position-fixed px-5'>
                <Button icon={<ArrowLeftOutlined />} onClick={() => nav(-1)} type='default' size='large' className='my-3'/>
            </div>
            {user.login ?
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center my-3'>More Info</h1>
                    <div className='card overflow-hidden w-75'>
                        <div className='card-header d-flex'>
                            <img src={user.picture.large} alt='user' />
                            <h3 className='p-3'>{user.name.first} {user.name?.last}</h3>
                        </div>
                        <div className='card-body'>
                            <p><b>Age:</b> {user.dob.age}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Phone:</b> {user.phone}</p>
                            <p><b>country: </b> {user.location.country}</p>
                            <p><b>City:</b> {user.location.city}</p>
                        </div>
                        <div className='bg-warning w-100'>
                            <MapContainer height={15} center={coords} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={coords}>
                                    <Popup>
                                        {user.location.city}, {user.location.country}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                </div>
                : <div className='d-flex mt-5 justify-content-center'>
                    <Spin size='large' />
                </div>
            }
        </div>
    )
}
