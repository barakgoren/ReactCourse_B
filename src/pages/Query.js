import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Query() {
    const [query] = useSearchParams();
  return (
    <div className='container'>
        <h2>Query 1: {query.get('search')}</h2>
        <h2>Query 2: {query.get('search2')}</h2>
    </div>
  )
}
