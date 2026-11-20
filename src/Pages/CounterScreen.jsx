import React from 'react'
import useCounter from '../hooks/useCounter'


const CounterScreen = () => {
    const {count,increment,decrement,reset} = useCounter()
  return (
    <div>
      <h1>Aura :  {count}</h1>
      <button onClick={increment}>Increment</button>
      <br /><br />
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterScreen
