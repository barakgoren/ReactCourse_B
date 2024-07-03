import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import { AppContext } from '../Context/AppContext';
import { Button, ConfigProvider } from 'antd';

export default function EmployeeCard({ worker }) {
    const { favorites, toggleFavorite } = useContext(AppContext);
    const isWorkerFavorited = favorites.some(favWorker => favWorker.login.username === worker.login.username);
    function truncateText(text) {
        if (text.length > 15) {
            return text.substring(0, 16) + '...';
        }
        return text;
    }


    return (
        <div style={{ width: '16rem', height: '23rem' }} className='card rounded-3 mx-2 overflow-hidden my-2'>
            <div style={{ position: 'relative', height: '13rem' }} className='card-header d-flex p-0'>
                <img src={worker.picture.large} alt='worker' style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0 }} />
                <div onClick={() => toggleFavorite(worker)} style={{ zIndex: 1 }} className='p-1'>
                    <FaStar className={`${isWorkerFavorited ? 'favorite-star-selected' : 'favorite-star'} fs-3`} />
                </div>
            </div>
            <div className='card-body'>
                <h5 className='card-title mb-3'>{worker.name.first} {worker.name.last}</h5>
                <p className='m-0'><b>Age:</b> {worker.dob.age}</p>
                <p className='m-0'><b>Location:</b> {truncateText(worker.location.city + ", " + worker.location.country)}</p>
            </div>
            <div className='p-2'>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorPrimary: '#4999E8',
                                colorPrimaryHover: '#72abe4',
                                colorPrimaryActive: '#72abe4',
                            },
                        },
                    }}
                >
                    <Button className='w-100' type="primary" size="large">
                        More Info
                    </Button>
                </ConfigProvider>
            </div>
        </div>
    )
}
