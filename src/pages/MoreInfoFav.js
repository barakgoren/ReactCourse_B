import React, { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { AppContext } from '../Context/AppContext';

export default function MoreInfoFav() {
    const { favorites } = useContext(AppContext);
    const [query] = useSearchParams();
    const nav = useNavigate();
    let index = query.get('index');
    const user = favorites[index];
    let coords = [Number(user.location.coordinates.latitude), Number(user.location.coordinates.longitude)];

    return (
        <div style={{ backgroundColor: '#a5c6e7', height:'93vh' }}>
            <div className='position-fixed px-5'>
                <Button icon={<ArrowLeftOutlined />} onClick={() => nav(-1)} type='default' size='large' className='my-3' />
            </div>
            {user.login ?
                <div className='container d-flex flex-column align-items-center'>
                    <h1 className='text-center my-3'>More Info From Favorites</h1>
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
