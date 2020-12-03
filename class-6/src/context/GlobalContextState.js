import React, { useReducer } from 'react'
import reducerFunction from './ReducerFunction'
const { createContext } = require("react")

const initialState = {
    transactions: [
        { id: 1, text: 'book', amount: 200 },
        { id: 2, text: 'book', amount: 200 }

    ]
}

const GlobalContextState = createContext(initialState)

// provider Component

const GlobalProviderComponent = (props) => {
    const [state, dispatch] = useReducer(reducerFunction, initialState)



    // actions  to add or delete transactions
    function addTransaction(object) {
        dispatch({
            type: "ADD",
            payload: object
        })

    }
    function deleteTransaction (id) {
        dispatch({
            type:"DELETE",
            payload:id
        })
    }


    return (
        <div>
            <GlobalContextState.Provider value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction
            }}>

                {props.children}

            </GlobalContextState.Provider>

        </div>
    )


}




export { GlobalContextState, GlobalProviderComponent }

// provider
// reducer function
// use reducer
