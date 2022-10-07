import React, { useContext } from 'react'
import { CounterContext } from '../CounterContext'

const ChildComponent = () => {
    const {counter, setCounter} = useContext(CounterContext);

    return (
    <div>
        <h2>This is child component</h2>
        <p>{counter}</p>
        <button onClick={()=>{setCounter(counter - 1)}}>-</button>
    </div>
    )
}

export default ChildComponent