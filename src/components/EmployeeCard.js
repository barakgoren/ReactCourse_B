import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function EmployeeCard({ worker }) {
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
                <div style={{ zIndex: 1 }} className='p-1'>
                    <FaStar className='favorite-star fs-3' />
                </div>
            </div>
            <div className='card-body'>
                <h5 className='card-title mb-3'>{worker.name.first} {worker.name.last}</h5>
                <p className='m-0'><b>Age:</b> {worker.dob.age}</p>
                <p className='m-0'><b>Location:</b> {truncateText(worker.location.city + ", " + worker.location.country)}</p>
            </div>
            <div className='card-footer p-0'>
                <button className='btn btn-info w-100 h-100 rounded-0'>More info</button>
            </div>
        </div>
    )
}
