import React, { useContext } from 'react'
import { GlobalContextState } from '../context/GlobalContextState'


const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContextState)

    return (
        <div>
            <h3> HISTORY</h3>

            <ul className="transaction-list">
                {transactions.map((newList) => {

                    return (

                        <li key={newList.id}>
                            
                             {newList.text} 
                            <span>{newList.amount}</span>
                            <button onClick={()=>{deleteTransaction(newList.id)}}> 
                            x </button>

                        </li>






                    )
                })}

            </ul>

        </div>
    )
}
export default TransactionList