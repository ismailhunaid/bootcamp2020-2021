import React ,{useContext} from 'react'
import {Data} from './Parent'


const ChildC = () => {
    const myName = useContext(Data)
    return (
        <div>
            <h1> This is Child CCCCC component 
            </h1>
            <h1> hello </h1>
             <h2> <b>    MY Name is : {myName}</b>        </h2>
             <h2> <b>    MY Name is : {myName}</b>        </h2>
             <h2> <b>    MY Name is : {myName}</b>        </h2>

        </div>
    ) 
}


export default ChildC;