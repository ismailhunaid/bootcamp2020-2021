import React from 'react'

const SecondChild = (props) => {

    const count = props.count

    return (
        <div>

            final and updated value of counter is {count}
        </div>
    )
}

export default SecondChild