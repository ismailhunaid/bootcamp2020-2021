import React  from 'react'


const Switch = (props) => {

    console.log(props)

    //const  n = props.name
    const {firstName, lastName} = props
    const name = props.firstName


    
    return (
        <div>

           <h2> firstName =  {firstName}</h2> 
           <h2> lastName =   {lastName}</h2>
           <h3>  practicing contextApi next using file name with SsampleA and so on to understand </h3>

           {name}

    
    <br />


<hr />
<div>


</div>



        </div>
    )
}



export default Switch