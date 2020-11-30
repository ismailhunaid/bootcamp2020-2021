import React, {createContext}from 'react'
import ChildA from './ChildA'


const Data = createContext("burhanuddin")
  
const Parent = () => {

    let myName = "ismail"

    return (
        <div>
            <Data.Provider value = {myName} >

            <h1>  this is Parent Component </h1>

            <h3> FirstName : {myName}</h3>

            <br />

             <ChildA />

            </Data.Provider>
            

        </div>
    )
}
      
export default Parent ;
export {Data} ;


      