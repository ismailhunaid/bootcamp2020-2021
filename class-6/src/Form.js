import React, {useState} from 'react'


const Form = () => {

    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log(description ,amount)
    }
    let [description ,setDescription] = useState("");
    let [amount ,setAmount] = useState(0);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label> ENTER DESCRIPTION</label> <br />
                <input type="text" name="" value={description} onChange={(e)=>{setDescription(e.target.value)}}required />
                <br />

                <label> ENTER AMOUNT </label> <br />
                <input type="number" name="" value={amount} onChange={(e)=>{setAmount(e.target.value)}}required />  <br />

                <input type="submit" value="ADD TRANSACTION" />
            </form>
        </div>
    )
}
export default Form;