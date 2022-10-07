import React from 'react'
import { useState } from 'react';
import { CounterContext } from '../CounterContext';
import ParentComponent from '../pages/ParentComponent';

const UseContext = () => {
  const [counter, setCounter] = useState(0);


  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <CounterContext.Provider value={{counter, setCounter}}>
          <ParentComponent />
        </CounterContext.Provider>
    </div>
  )
}

export default UseContext