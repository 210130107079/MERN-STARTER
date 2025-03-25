import React,{useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
        case 'incremented_age':{
            return {
                age:state.age + 1,
                name:state.name
            }
        }

        case 'changed_name' : {
        return {
            name:action.nextName,
            age:state.age
        }
        }
    }
}

const initialState = {
    age: 25,
    name: 'John Doe'
}

const NameAge = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    function handleButtonClick(){
        dispatch({type: 'incremented_age'}) 
    }

    function handleInputChange(e){
        dispatch({type: 'changed_name', nextName: e.target.value})
    }

  return (
    <div className='mt-52 bg-gray-400 rounded-lg'>
        <input className='px-3 py-2 rounded-md' value={state.name} onChange={handleInputChange} placeholder='enter name'/>
        <button onClick={handleButtonClick} className='bg-red-300 ml-5 mt-3 px-3 py-2 rounded-md'>Increment Age</button>
        <p className='mt-3 bg-green-500/60 rounded-lg'>Hello {state.name}. Your Age is {state.age}</p>
    </div>
  )
}

export default NameAge