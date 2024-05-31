import React from 'react'
import { FaAppleAlt  } from "react-icons/fa";
import { BsCloudSnowFill } from "react-icons/bs";

export default function Icons() {
  return (
    <div className='container'>
      <h1>Icons page</h1>
      <h2>Test</h2>
      <FaAppleAlt className='h1' style={{color:"red"}} />
      <BsCloudSnowFill className='h2' style={{color:"skyblue"}} />
  
    </div>
  )
}



// ניתן לראות אייקונים מהכתובת הבאה:
// https://react-icons.github.io/react-icons/icons/fa/