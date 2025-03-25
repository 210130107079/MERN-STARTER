import React,{act, useReducer, useState} from 'react'

function reducer(state, action){
  if(action.type === 'add_task'){
    return [...state, action.payload]
  }
  else{
    console.log("Invalid action"+action.type);
  }
}

const Todo = () => {

  const [task,setTask] = useState('')
  const [todos,dispatch] = useReducer(reducer,[])

  function onButtonClick(e){
    dispatch({type:'add_task', payload:task})
  }

  return (
    <div className='mt-32'>
        <input required onChange={(e)=>setTask(e.target.value)} className='px-3 border-2 border-black mr-5 py-2 rounded-md' />
        <button onClick={onButtonClick} className='bg-red-400 rounded-md px-3 py-2'>Add</button>
        <ul>
          {
            todos.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default Todo