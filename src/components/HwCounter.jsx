import React, { useState } from 'react'

export default function HwCounter() {
    const [counter, setCounter] = useState(0);
    const colors = [
        'black',
        'red',
        'orange',
        'yellow',
        'green',
    ]

    const addOne = () => {
        if (counter >= 4) {
            setCounter(0);
            return;
        }
        setCounter(counter + 1);
    }
    const reduceOne = () => {
        if (counter <= 0) {
            setCounter(4);
            return;
        }
        setCounter(counter - 1);
    }

    return (
        <div className='col-md-2'>
            <h2 style={{color:colors[counter]}} className='text-center'>{counter}</h2>
            <div className='d-flex  justify-content-center'>
                <button onClick={reduceOne} className='mx-1 col-2'>-</button>
                <button onClick={addOne} className='mx-1 col-2'>+</button>
            </div>
        </div>
    )
}
