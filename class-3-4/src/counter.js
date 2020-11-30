import React, {useState} from 'react';
import SecondChild from './secondChild';

const Counter = () =>{

    let [count,setCount ] = useState (10)

    const handleClick = () => {

    setCount (count+1)
    }

    return(
        <div>
            
     <h2> {count} </h2> 


    <button onClick={ ()=> setCount(count+10) }  >   Button </button>

    <br />
    <br />
    <br />


    <button onClick={ ()=>{setCount(count+100)}}  >   Button </button>

    <br />
    <br />
    <br />

    <button onClick={handleClick} > Button </button>


     <h2>  <SecondChild count={count}/> </h2>

    {/*  we use arrow function in this setCount  */}


        </div>
    )
};

export default Counter;
