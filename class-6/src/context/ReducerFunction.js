const reducerFunction = (state, action) => {

    switch (action.type) {
        case "ADD":
            return {

                transactions: [...state.transactions, action.payload]
            }
            case "DELETE":
                return {
                    ...state,
                    transactions:state.transactions.filter((transaction)=>{
                        return(
                            transaction.id !== action.payload

                        )
                    })
                }

        default:
            return state



    }





}



export default reducerFunction