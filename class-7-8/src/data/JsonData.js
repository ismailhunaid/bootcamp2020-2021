import React, { useState, useEffect } from 'react'

export const JsonData = () => {

    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {

        async function jsonData() {

            // not working fetch('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000')
            const getResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            const getResult = await getResponse.json()

            setData(getResult)

            console.log(typeof (getResult))

            console.log(getResult)

        }
        jsonData()

    }, [])


    return (
        <div>
            <h2> Github users data fetching </h2>
            {data.map((item) => {
                return (
                    <li key={item.id}>
                        <span> {item.name}</span>
                        <span> {item.email}       </span>
                    </li>
                )
            })}





        </div>
    )
}

export default JsonData;