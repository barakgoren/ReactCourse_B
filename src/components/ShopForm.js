import React, { useState, useContext } from 'react'
import { AppContext } from '../context/Context';

export default function ShopForm() {
  const [nameVal,setNameVal] = useState("");
  const [amountVal,setAmountVal] = useState("1");

  const {addProduct} = useContext(AppContext);

  const onSub = (e) => {
    e.preventDefault();
    const newItem = {
      name:nameVal,
      amount:amountVal,
      // date.now() - דואג לאיי די ייחודי 
      // מחזיר זמן יוניקס של עכשיו
      id:Date.now()
    }
    console.log(newItem);
    addProduct(newItem);
  }

  return (
    <div className='col-md-6 mt-4'>
      <form onSubmit={onSub}>
        <label>Name:</label>
        <input onChange={e => setNameVal(e.currentTarget.value)} type="search" className='form-control' />
        <label>Amount:</label>
        <input value={amountVal} onChange={e => setAmountVal(e.currentTarget.value)}  type="number" className='form-control' />
        <button className='mt-3 btn btn-success'>Add</button>
      </form>
    </div>
  )
}
