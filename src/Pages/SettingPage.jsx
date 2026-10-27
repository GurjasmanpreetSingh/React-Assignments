import React from 'react'
import { useNavigate } from 'react-router-dom'

const SettingPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>This is Setting Page</h1>
       <button onClick={() => navigate('/')}>Go Back To Home Page</button>
    </div>
  )
}

export default SettingPage
