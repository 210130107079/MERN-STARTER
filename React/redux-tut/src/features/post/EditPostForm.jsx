import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deletePost, selectPostsById, updatePost } from './postsSlice'
import { selectAllUser } from '../user/userSlice.js'

const EditPostForm = () => {

    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state)=>selectPostsById(state,Number(postId)))
    const users = useSelector(selectAllUser)

    const [title,setTitle] = useState(post?.title)
    const [content,setContent] = useState(post?.body)
    const [userId,setUserId] = useState(post?.userId)
    const [requestStatus,setRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    if(!post){
        return (
            <section>
                <h2>Post Not Found !</h2>
            </section>
        )
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const onContentChange = (e) => {
        setContent(e.target.value)
    }
    const onAuthorChange = (e) => {
        setUserId(e.target.value)
    }
    
    const canSave = [title,content,userId].every(Boolean) && requestStatus === 'idle'

    const onSavePostClick = () => {
        if(canSave){
            try
            {
                setRequestStatus('pending')
                dispatch(updatePost({id:post.id,title,body:content,userId,reactions:post.reactions})).unwrap()
                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/post/${post.id}`)
            }
            catch(error)
            {
                console.log("Failed saving the Post",error);
            }
            finally
            {
                setRequestStatus('idle')
            }
        }    
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const onDeletePostClick = () => {
        try
        {
            setRequestStatus('pending')
            dispatch(deletePost({id:post.id})).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        }
        catch(error)
        {
            console.log("Failed deleting the Post",error);
        }
        finally
        {
            setRequestStatus('idle')
        }
    }

  return (
    <section>
        <h2>Edit Post</h2>
        <form>

            <label htmlFor="postTitle">Post Title : </label>
            <input type="text" id='postTitle' name='postTitle' value={title} onChange={onTitleChange} />

            <label htmlFor="postTitle">Post Author : </label>
            <select type="text" id='postAuthor' name='postAuthor' value={userId} onChange={onAuthorChange}>
                <option>Select Author</option>
                {userOptions}
            </select>

            <label htmlFor="postTitle">Post Content : </label>
            <input type="text" id='postContent' name='postContent' value={content} onChange={onContentChange} />

            <button type='button' onClick={onSavePostClick} disabled={!canSave}>Save Post</button>
            <button type='button' onClick={onDeletePostClick} >Delete Post</button>

        </form>
    </section>
  )
}

export default EditPostForm