import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import HomeList from '../components/HomeList'
import { AppContext } from '../Context/AppContext';
import { Spin } from 'antd';

export default function Home() {
  const { fetchWorkers, isSearching } = useContext(AppContext);
  const [searchInputVal, setSearchInputVal] = useState('');
  const [query] = useSearchParams();
  const nav = useNavigate();
  const searchQuery = query.get('search');

  useEffect(() => {
    if (searchQuery) {
      fetchWorkers(searchQuery);
    } else {
      fetchWorkers('abc');
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  const search = () => {
    if (!searchInputVal) {
      nav('/');
    } else {
      nav(`/?search=${searchInputVal}`);
    }
  }

  return (
    <div>
      <img src='strip.jpg' alt='strip' style={{ width: '100%', height: '30vh', objectFit: 'cover' }} />
      <div className='container d-flex flex-column align-items-center'>
        <div className='w-25 mt-3 d-flex'>
          <input onChange={(e) => setSearchInputVal(e.target.value)} type='search' className='form-control' placeholder='Search workers' />
          <button onClick={search} className='btn btn-primary'>Search</button>
        </div>
        {searchQuery && <h2 className='text-center my-3'>Searching for employees at: {searchQuery}</h2>}
      </div>
      {isSearching ? 
      <div className='d-flex mt-5 justify-content-center'>
        <Spin size='large' />
      </div> : <HomeList />}
    </div>
  )
}
