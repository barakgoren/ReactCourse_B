import React, { useState } from 'react'
import {useSearchParams, useNavigate} from "react-router-dom"

export default function Gallery() {
  // ?msg=YYY&color=red
  const [query] = useSearchParams();
  const [inpVal,setInpVal] = useState("");
  const nav = useNavigate();

  const onSub = (e) => {
    e.preventDefault();
    nav(`/gallery?color=${inpVal}&msg=form`)
  }

  return (
    <div className='container'>

{/* כאשר המשתמש לוחץ על הכפתור אנטר
המשתמש ישוגר לאותו עמוד עם ערך קווארי
של COLOR
לפי המידע שהוא הכניס באינפוט */}
      <form onSubmit={onSub}  className='col-md-6'>
        <label>Enter color:</label>
        <input onChange={(e) => setInpVal(e.currentTarget.value)} className='form-control' type="search" />
        <button>Enter</button>
      </form>
      <hr/>
      <h2 style={{background:query.get("color")}}>Gallery Message: {query.get("msg")}</h2>
      <button onClick={() => {
        nav("/gallery?msg=hello&color=red")
      }}>Msg hello red</button>
      <button onClick={() => {
        nav("/gallery?msg=bye&color=blue")
      }}>Msg Bye blue</button>
    </div>
  )
}
