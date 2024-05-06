import React, { useState, useContext } from 'react';
import { AppContext } from '../context/Context';

export default function ShopForm() {
    const {addProduct} = useContext(AppContext);

    const [nameVal, setNameVal] = useState("");
    const [amountVal, setAmountVal] = useState("1");

    const onSub = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            name: nameVal,
            amount: amountVal
        }
        addProduct(newItem);
    }
    return (
        <div className='col-md-6 mt-4'>
            <form onSubmit={onSub}>
                <label>Name:</label>
                <input onChange={e => setNameVal(e.currentTarget.value)} type="search" className='form-control' />
                <label>Amount:</label>
                <input value={amountVal} onChange={e => setAmountVal(e.currentTarget.value)} type="number" className='form-control' />
                <button className='mt-3 btn btn-success'>Add</button>
            </form>
        </div>
    )
}