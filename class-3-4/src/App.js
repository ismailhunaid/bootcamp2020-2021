
import React ,{useState} from 'react';
import Child from './firstchild'
import './App.css';
import Counter from './counter';
import Form from './Form1';

//  practicing use State hooks 
// props practice 
// conditional css
// ternary operation
// !day if false then true and if true then false 
// form Control using useState Hooks 


const App = () => {

  const name = "ismail"
  let [ day, setNight] = useState (true)


  const handleClick =() => {
    setNight(!day)
  }

  


  return (

    <div className = { day ? 'light' : 'dark'}>

      <button onClick={handleClick}> UPDATE DAY AND NIGHT  </button>

      <h1>    day time = { day ? 'day' : 'night'} </h1>

  
    <div><h1>
      {name}

    </h1>
       {name}

       <Child  name="biryani" />

       <Child  name="haleem" />

       <Child  name="korma" />

       <Counter />
    </div>

    <Form />
    </div>

  )
}

  

export default App
