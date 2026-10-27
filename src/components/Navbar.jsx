import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>This is Navbar</h1>
      <button onClick={() => navigate('/home')}>Go To Home Page</button>
    </div>
  )
}

export default Navbar
