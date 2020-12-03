import React,{ useContext } from 'react'
import { GlobalContextState } from '../context/GlobalContextState'

// The filter() Array method creates a new array with elements that fall under a given criteria from an existing array:

export const IncomeExpense = () => {
    const {transactions}=useContext(GlobalContextState)
    const amount = transactions.map((transaction) => (transaction.amount))
    const income = amount
    .filter((item)=>{
        return item >= 0
    })
    .reduce((acc,item)=>{
        return acc +=item
    },0)
    .toFixed(2)


    const expense = amount
    .filter((item)=>{
        return item <= 0
    })
    .reduce((acc,item)=>{
        return acc +=item
    },0)
    .toFixed(2)



    return (
        <div className="income-expense">
            <h2> INCOME <br /> {income}  </h2>

            <h2>
                EXPENSE <br /> {expense}
            </h2>
        
            
             

            
        </div>
    )
}
