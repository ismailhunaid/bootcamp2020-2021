import React, { Suspense } from 'react'
import './App.css';
import JsonData from './data/JsonData'
const Data = React.lazy(() => import('./data/GetData')) // react lazy loading syntax 
//import  Data from './data/GetData'

const App = () => {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Data />
        <JsonData />

        <h2> class 7 </h2>
      <h2>understanding synchronous and asynchronous programming </h2>
      <h2> call back and call back hell</h2>
      <h2> promises </h2>
      <h2> async function and await</h2>
      <h2> try catch function </h2>
      <h2> get APIs</h2>
      <h2> post APIS</h2>
      <h2> hot to get data in react </h2>
      <h2> useEffect hooks for writing APIS</h2>
      <h2> because when dom is changed its mean hooks are used </h2>
      <h2> new thing in react added  </h2>
      <h2>  lazy loading , suspense , concurrency mode , race condition </h2>
      <h2> how to fetch data using suspense </h2>
      <h2> rendering and fetching at the same time con currency mode </h2>
      <h2> fetch on render </h2>
      <h2> fetch then render</h2>
      <h2>render as you fetch data using suspense </h2>
      <h2> concurrency mode </h2>



      </Suspense>

      
      



    </div>
  )
}

export default App;
