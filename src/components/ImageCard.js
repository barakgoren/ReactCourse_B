import React from 'react'

export default function ImageCard({image, index}) {
    const delay = index * 0.2;
    return (
        <div style={{ opacity:0, height: '18.8rem', animation:`fadeIn ${delay}s forwards`  }} className="col-3 p-1">
            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={image} className='img-fluid' alt="img" />
        </div>
    )
}
