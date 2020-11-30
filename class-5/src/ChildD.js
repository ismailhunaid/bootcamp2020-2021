import React, {useReducer}from 'react'
import CounterFunction from './CounterFunction'

// use reducer takes two arguments first is the function and second is the initial state
const ChildD = () =>{
    let [state ,dispatch ] = useReducer(CounterFunction,100)

    const handle =( ) => {
        dispatch ('INCREMENT')
    }
    return (
        <div>
            <h1> this is childD Component practice for useReducer hooks  </h1>
             <h2> initail state of the the reducer is {state}</h2>
              <button onClick ={()=>dispatch('INCREMENT') }> ADD Button  </button>
              <button onClick ={handle}> ADD Button  </button>
        </div>
    )
}



export default ChildD