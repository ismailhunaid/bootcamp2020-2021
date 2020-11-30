import React from 'react'

const Child = (props) => {
// destructuring
// const Child = ( {name} ) => {

    const dishName = props.name

    return(
        <div>
            <h1>
            dish name is {dishName}

            {/* {name} */}

            </h1>
           

        </div>
    )
}


export default Child