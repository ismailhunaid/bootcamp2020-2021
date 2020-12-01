import React from 'react'
import Form from './Form'
import List from './List'

const Main = () => {
    return (
        <div>
            <div className="container">

                <h1 className="text-center"> <b> EXPENSE TRACKER APP  </b> </h1>

                <br />


                <h3> YOUR BALANCE = dynamic  </h3>


                <div className="expense-container">

                    <h3> INCOME <br />  <hr /> dynamic   </h3>

                    <h3> EXPENSE <br /> <hr />  dynamic  </h3>


                </div>
                <h3> HISTORY</h3>
                <hr />
                <List />
                <h3> ADD NEW TRANSACTIONS </h3>

                <Form />

            </div>

        </div>
    )
}



export default Main;
