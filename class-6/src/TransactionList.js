import React, { createContext, useReducer } from 'react'
import { ReducerFunction } from './ReducerFunction'

const initialList = [
    {  description: "mobile", amount: 500 },
    {  description: "cash", amount: 600 }
]
const TransactionList = createContext(initialList)


export const ProviderFunction = ({ children }) => {
    const {state, dispatch} = useReducer(ReducerFunction, initialList)

    function addTransaction (obj) {
        dispatch({
            type: "ADD",
            payload: {
                description:obj.description,
                amount:obj.amount
            }

            
        })

    }

    return (
        <div>
            <TransactionList.Provider value={
                {
                    transation : state,
                    addTransaction

                }
            }>
            </TransactionList.Provider>
                {children}


        </div>
    )

}





export { TransactionList }





// hard coated 
        // <div>
        //     <ul className="transaction-list">
        //         <li> <span> cash  </span>
        //             <span> +500  </span>
        //         </li>


        //         <li> <span> cash</span>
        //             <span> -200</span>

        //         </li>
        //     </ul>

        // </div>