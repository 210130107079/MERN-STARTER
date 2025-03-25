import React,{useReducer} from 'react'

function reducer(state,action){
    if(action.type==='increment'){
        return {
            age:state.age + 1
        }
    }else{
        console.log("Invalid Action Type !");
    }
}

const IncrementAge = () => {

    const [state,dispatch] = useReducer(reducer,{age:18})

    function handleClick(){
        dispatch({type:'increment'})
    }

  return (
    <div className='mt-52'>
        <h1>Current Age: {state.age}</h1>
        <button className='bg-red-300 mt-3 px-3 py-2 rounded-md' onClick={handleClick}>Increment Age</button>    
    </div>
  )
}

export default IncrementAge