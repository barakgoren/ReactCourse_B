import React, { useRef } from 'react'

export default function Value() {
    const nameRef = useRef();
    const phoneRef = useRef();

    const onSub = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(phoneRef.current.value);
    }

  return (
    <div>
        <form onSubmit={onSub} className='col-md-6'>
            <label>Name:</label>
            <input ref={nameRef} type="text" className='form-control' />
            <label>Phone:</label>
            <input ref={phoneRef} type="tel" className='form-control' />
            <button className="btn btn-info mt-3">Send</button>
        </form>
    </div>
  )
}
