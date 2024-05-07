import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa'
import ImageCard from '../components/ImageCard';

export default function Pixa() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');

    const [params] = useSearchParams();
    const searchQuery = params.get('s');
    const pageQuery = params.get('p');
    const nav = useNavigate();

    const doApi = async () => {
        setIsLoading(true);
        try {
            let url = `https://pixabay.com/api/?key=31340567-8a6f928f251fdd2c3f0f43e20&q=${searchQuery}&page=${pageQuery}`;
            let resp = await fetch(url);
            let data = await resp.json();
            console.log(data);
            setImages(data.hits);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        doApi();
    }, [params]);

    const handleSearch = (e) => {
        setSearchInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        nav(`/pixa?s=${searchInput}`);
    }

    const handleNextPage = () => {
        nav(`/pixa?s=${searchQuery}&p=${Number(pageQuery) + 1}`);
    }

    const handlePreviousPage = () => {
        if (pageQuery > 1) {
            nav(`/pixa?s=${searchQuery}&p=${Number(pageQuery) - 1}`);
        }
    }

    return (
        <div className='container p-0'>
            <form onSubmit={handleSubmit}>
                <div className='d-flex my-3 align-items-center justify-content-center'>
                    <input onChange={handleSearch} style={{ fontSize: '1.9rem' }} type="search" className="form-control border-dark border w-50" placeholder="Search Images Here ..." />
                    <button className="btn btn-primary p-3 mx-2"><FaSearch size={25} /></button>
                </div>
            </form>
            {pageQuery >= 1 &&
                <div className='d-flex justify-content-center'>
                    <div style={{ width: '8%' }} className='bg-info bg-opacity-25 rounded-3 text-center fw-bold fs-5 mb-1'>Page {pageQuery}</div>
                </div>
            }
            {isLoading ? <h1>Loading...</h1> :
                <div className='d-flex'>
                    <button onClick={handlePreviousPage} className='align-content-center arrows'><FaArrowLeft size={40} /></button>
                    <div className='d-flex w-100 flex-wrap'>
                        {images.map((item, index) => {
                            return (
                                <ImageCard index={index} key={item.id} image={item.largeImageURL} />
                            )
                        })}
                    </div>
                    <button onClick={handleNextPage} className='align-content-center arrows'><FaArrowRight size={40} /></button>
                </div>
            }
            <h2>{ }</h2>
        </div>
    )
}
