import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>This is Home Page</h1>
      <button onClick={()=> navigate('/settings')}>Go To Settings</button>
    </div>
  )
}

export default HomePage
