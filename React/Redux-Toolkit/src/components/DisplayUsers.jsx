import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useSelector , useDispatch } from 'react-redux'
import styled from 'styled-components'
import {removeUser} from '../store/slices/UserSlice'

const DisplayUsers = () => {

  const dispatch = useDispatch()

    const data = useSelector((state)=>{
        return state.users
    })

    const deleteUser = (id) => {
      dispatch(removeUser(id))
    }

  return (
    <Wrapper>
        {
            data.map((user,id)=>{
                return (
                    <li key={id}>{user}
                    <button onClick={()=>deleteUser(id)} className='btn-delete'><MdDeleteForever className='delete-icon'/></button>
                    </li>
                )
            })
        }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`


export default DisplayUsers