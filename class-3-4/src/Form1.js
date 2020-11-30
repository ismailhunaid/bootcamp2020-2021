import React, {useState} from 'react';

const Form = () => {

    let [name , setName] = useState(
        {

        firstName:'',
        lastName:''
        
    }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        
    }

const handleChange = (event) => {
    const {name , value} = event.target;

    setName((preValue) =>{
        console.log(preValue)

        return { ...preValue, [name]:value}


        
    })
    console.log(value)

}

    return (
        <div>
            <h1> form control using useState Hooks </h1>

            <br />
            
            <form onSubmit={handleSubmit}>

            FirstName:
            <input type="text" name='firstName' value={name.firstName} onChange={handleChange}/>
            <br /> 
            <br /> 
            <br /> 

            lastname:
            <input type="text"  name='lastName' value={name.lastNamee} onChange={handleChange}/>

            

            <input type='submit' value =" submit " />
            </form>
            <br/> 
            <br/>
            <br/>
    <h2> {name.firstName} {name.lastName} </h2>
    
    <h2> {JSON.stringify(name)}</h2>

        </div>
    )
}


export default Form