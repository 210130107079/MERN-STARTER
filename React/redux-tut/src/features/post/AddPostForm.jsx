import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addNewPost} from './postsSlice.js'
import {selectAllUser} from '../user/userSlice.js'
import { useNavigate } from 'react-router-dom'

const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const users = useSelector(selectAllUser)

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const onContentChange = (e) => {
        setContent(e.target.value)
    }

    const onAuthorChange = (e) => {
        setUserId(e.target.value)
    }

    const canSave = [title,content,userId].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClick = () => {
        if(canSave){
            try
            {
                setAddRequestStatus('pending')
                dispatch(addNewPost({title,body:content,userId})).unwrap()
                setTitle('')                
                setContent('')                
                setUserId('')         
                navigate('/')       
            }
            catch(error)
            {
                console.log(error);
            }
            finally
            {
                setAddRequestStatus('idle')
            }
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add New Post</h2>

        <form>
            <label htmlFor="postTitle">Post Title :</label>
            <input type="text" value={title} onChange={onTitleChange} id='postTitle'/>

            <label htmlFor="postAuthor">postAuthor :</label>
            <select name="postAuthor" id="postAuthor" value={userId} onChange={onAuthorChange}>
                <option value="">Select Author</option>
                {userOptions}
            </select>

            <label htmlFor="postTitle">Post Content :</label>
            <input type="text" value={content} onChange={onContentChange} id='postContent' />

            <button disabled={!canSave} onClick={onSavePostClick} type='button'>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm