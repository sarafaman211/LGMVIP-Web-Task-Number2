import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { AiFillInfoCircle } from "react-icons/ai"
import "../../styles/headers.scss"
import GetUsers from '../Pages/GetUsers'

const Header = () => {
   
  return (
    <nav>
        <div><AiFillInfoCircle />UserInfo</div>
         <div>
        <Link to="/home">Get Users</Link>
      </div>
    </nav>
  )
}

export default Header