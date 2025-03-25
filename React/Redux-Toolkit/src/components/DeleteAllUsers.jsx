import React from 'react'
import styled from 'styled-components'
import {clearAllUser} from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteAllUsers = () => {

  const dispatch = useDispatch()

  const deleteUsers = () => {
    dispatch(clearAllUser())
  }

  return (
    <Wrapper>
      <button onClick={deleteUsers} className='btn clear-btn'>DeleteAllUsers</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color: #db338a;
  margin-top:2rem;
}`

export default DeleteAllUsers