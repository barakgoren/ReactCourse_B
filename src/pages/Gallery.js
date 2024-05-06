import React from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
export default function Gallery() {
  // ?msg=
  const [query] = useSearchParams();
  const nav = useNavigate();

  const searchColor = (e) => {
    e.preventDefault();
    let color = e.target[0].value;
    console.log(color);
    nav(`/gallery?msg=hello&color=${color}`)
  }

  return (
    <div className='container'>
      <form onSubmit={searchColor}>
        <label className='d-flex'>Enter color:</label>
        <div className='d-flex'>
          <input type="search" className="form-control w-25" />
          <button type="button" className="btn btn-primary mx-3">Enter</button>
        </div>
      </form>
      <hr/>
      <h2 style={{ color: query.get("color") }}>Gallery Message: {query.get("msg")}</h2>
      <button onClick={() => {
        nav("/gallery?msg=hello&color=red")
      }}>Msg hello red</button>
      <button onClick={() => {
        nav("/gallery?msg=bye&color=blue")
      }}>Msg Bye blue</button>
    </div>
  )
}