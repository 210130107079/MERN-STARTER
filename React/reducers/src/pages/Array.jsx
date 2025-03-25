import React,{useReducer} from 'react'

function reducer(state,action){
    if(action.type === 'push_array'){
        return{
            num:[state.num, action.num]
        }
    }
    else{
        console.log("Invalid Action Type !"+ action.type);
    }
}

const Array = () => {

    const [state,dispatch] = useReducer(reducer,[])

    function handleButtonClick(){
        dispatch({type:'push_array', num:Math.floor(Math.random() * 10)})
    }

  return (
    <div className='mt-32'>
        <p className='text-5xl bg-red-400 px-3 py-2'>Numbers array</p>
        <button onClick={handleButtonClick} className='bg-green-400 px-3 py-2'>add Number</button>
        <li>{state.num}</li>
    </div>
  )
}

export default Array