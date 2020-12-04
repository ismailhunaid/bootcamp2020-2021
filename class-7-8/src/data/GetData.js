import React, { useState, useEffect } from 'react'

function Data() {
    const [name, setName] = useState([{}])



    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.quotable.io/random")
            const quotes = await response.json()

            setName(quotes)

            //console.log(response)
            console.log(quotes)
            console.log(typeof (quotes))

        }
        getData()

    }, [])


    return (
        <div>
            <h3> fetching Random quotes </h3>
            <li>    {name.content}</li>
            <li> {name._id}</li>
            <li> {name.author} </li>
            
                    
        </div>
    )

};


export default Data
