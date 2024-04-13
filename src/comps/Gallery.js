import React, { useState } from 'react'
export default function Gallery() {
  const [counter,setCounter] = useState(0);
  const pics_ar = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"];

  const nextImage =() => {
    setCounter(counter + 1);
  }

  const prevImage = () => {
    setCounter(counter - 1);
  }

  return (
    <div className='container text-center'>
      <h2>Gallery if pics</h2>
      <img src={`images/${pics_ar[counter]}`} alt="gallery" className='col-4' />
      <br/>
      <button onClick={prevImage} className='btn btn-success'>Back</button>
      <button onClick={nextImage} className='btn btn-danger'>Next</button>
    </div>
  )
}