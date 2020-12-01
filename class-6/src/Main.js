import React from 'react'
//import Form from './Form'
import { useContext, useState } from 'react'
import { TransactionList } from './TransactionList'

function Main () {
    let list = useContext(TransactionList)
    let {addTransaction} = useContext(TransactionList)


    let [description, setDescription] = useState("");
    let [amount, setAmount] = useState(0);

    function handleAddition(event) {
        event.preventDefault()
        console.log(addTransaction)
        console.log(description, amount)
        addTransaction({
            
            amount,
            description
        })


    }



return (
    <div>

        <div className="container">

            <h1 className="text-center"> <b> EXPENSE TRACKER APP  </b> </h1>

            <br />


            <h3> YOUR BALANCE = dynamic  </h3>


            <div className="expense-container">

                <h3> INCOME <br />  <hr /> dynamic   </h3>

                <h3> EXPENSE <br /> <hr />  dynamic  </h3>


            </div>
            <h3> HISTORY</h3>
            <hr />

            <ul className="transaction-list">
                {list.map((listObj, index) => {
                    return (
                        <li key={index}>
                            <span>  {listObj.description}</span>
                            <span> {listObj.amount}</span>
                        </li>
                    )
                })}
            </ul>







            <h3> ADD NEW TRANSACTIONS </h3>

            <form className="form" onSubmit={handleAddition}>

                <label> ENTER DESCRIPTION</label> <br />
                <input type="text" name=""  onChange={(e) => { setDescription(e.target.value) }} required />
                <br />

                <label> ENTER AMOUNT </label> <br />
                <input type="number" name="" onChange={(e) => { setAmount(e.target.value) }} required />  <br />

                <input type="submit" value="ADD TRANSACTION" />
            </form>






        </div>

    </div>
)
}



export default Main;
