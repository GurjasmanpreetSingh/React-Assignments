import React, { useState } from 'react'

const useCounter = () => {
    const [count,setCount] = useState(0)

    const increment = () =>{
        setCount(count+1)
    }
    const decrement = () =>{
        setCount(count -1)
    }
    const reset = () =>{
        setCount(0)
    }
  return {
     count,      //Because this is Variable of useCounter
     increment,  //Because These Are Functions
     decrement,
     reset 
  }
}

export default useCounter
