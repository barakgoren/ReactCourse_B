import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

export default function ShopList() {
  const { shop_ar } = useContext(AppContext)

  return (
    <div className='mt-4'>
      <h2>List of product you added:</h2>
      <div className="row">
        {shop_ar.map(item => {
          return (
            <div key={item.id} className='col-md-8 border p-1 shadow-sm my-1'>
              <button className='float-end bg-danger'>X</button>
              <h5>{item.name} - {item.amount}</h5>
            </div>
          )
        })}
        {/* */}
      </div>
    </div>
  )
}
