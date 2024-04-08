import React from 'react'

export default function Message(props) {
    return (
        <div>
            <h2 style={{color:props.clr}} >Message: {props.txt}</h2>
        </div>
    )
}
