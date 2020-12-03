import React, { useContext } from 'react'
import { GlobalContextState } from '../context/GlobalContextState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContextState)

    const amount = transactions.map((transaction) => (transaction.amount))
    const total = amount.reduce ((acc,item)=>{
        // syntax of reduce method is amount.reduce (reducerfunction , initial value )
        // abouve example is good 
        return (
            acc +=item
        )
    }, 0 ).toFixed(2)
        
    

    return (
        <div>
            <h3>
                YOUR BALANCE
            </h3>

            
            
            <h2>{total}</h2>


        </div>
    )
}
