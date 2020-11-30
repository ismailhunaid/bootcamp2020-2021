import React, {useState} from 'react'
import Switch from './Switch'


const Form = ()=> {

    let [fullName, setFullName ]= useState( {
        firstName:'',
        lastName: ''
    }) 

    const handleChange = (e) => {
        const {name, value} = e.target 

        setFullName ( (val)=> {
            return { ...val , [name]:value}

        } )

    }

    const handleSubmit =( e) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type ="text" name="firstName" value= {fullName.firstName} onChange = {handleChange} />
                <br/>
                <br/>
                <br/>
                <input type ="text" name="lastName" value= {fullName.lastName}   onChange =  {handleChange} />
                <br/>
                <br/>
                <br/>
                <input type ="submit" value ="submit" />



            </form>
 
                <h2>  first name:{fullName.firstName} lastname:  {fullName.lastName} </h2>
                
                 
                 <br />
                 <br />
                 <br />
                 <hr />

            <Switch firstName = {fullName.firstName} lastName ={fullName.lastName} />
            

        </div>
    )
}

export default Form