import React, { useState, useContext } from 'react'
import { GlobalContextState } from '../context/GlobalContextState'

export const AddTransaction = () => {
    let [amount, setAmount] = useState()
    let [text, setText] = useState('')

    let { addTransaction } = useContext(GlobalContextState)

    const onSubmit= (e) => {
        e.preventDefault()
        const newTransactions ={
            id:Math.floor(Math.random()*1000),
            text:text,
            amount:+amount

        }
        addTransaction(newTransactions);
        

        setAmount(0);
        setText('')

    }


    return (
        <div>
            <h3> Add Transaction</h3>
            <form className="form" onSubmit={onSubmit}>

                <label> Enter Amount </label> <br />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />  <br />
                <label> Enter Description </label> <br />
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />  <br />
                <input type="submit" value="Add Transaction" />

            </form>

        </div>
    )
}
