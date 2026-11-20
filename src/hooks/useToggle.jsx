import React, { useState } from 'react'


const useToggle = () => {
    const [show,setShow] = useState(true)
    const Toggle = () =>{
        setShow(!show)
    }
// Q1. Create a Custom Toggle Hook (10 Marks)
// Create a custom hook named useToggle() to manage show/hide functionality.

  return{
    show,
    Toggle
  }
}

export default useToggle
