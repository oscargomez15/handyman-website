import React from 'react'
import { MdOutlineErrorOutline } from "react-icons/md";
import '../Styling/NotFound.css'

export const NotFound = () => {
  return (
    <div className='page'>
        <div className="not-found-heading">
            <MdOutlineErrorOutline size='3em'/>
            <h1> 404 - Not Found </h1>
        </div>
        <p> We can't seem to find the page you were looking for.</p>
        <a href='/' className='not-found-btn'> Return Home </a>
    </div>
  )
}
