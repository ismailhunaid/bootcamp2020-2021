//  step 1 make a reducer function take two arguments current state and action 
//  action is a javascript object action.type and action .payload

const CounterFunction = (state,  action)=> {

    switch (action) {
        case "INCREMENT":
            return state+1;
            

        default:
            return state
            
    }


};

export default CounterFunction;