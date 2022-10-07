import React from 'react'
import { CounterContext } from '../CounterContext'
import ChildComponent from './ChildComponent'
import { useContext } from 'react'

const ParentComponent = () => {
    const {counter, setCounter} = useContext(CounterContext);

    return (
    <div>
        <h1>This is parent component</h1>
        {/* <CounterContext.Consumer>
            {(value) => {
                return <p>{value}</p>    
            }}
        </CounterContext.Consumer> */}
        <p>{counter}</p>
        <button onClick={()=>{setCounter(counter + 1)}}>+</button>
        <ChildComponent />
    </div>
    )
    }

export default ParentComponent