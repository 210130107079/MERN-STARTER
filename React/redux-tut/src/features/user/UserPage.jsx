import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from './userSlice'
import { selectAllPosts } from '../post/postsSlice'

const UserPage = () => {

    const {userId} = useParams()
    const user = useSelector(state => selectUserById(state,Number(userId)))

    const postForUser = useSelector(state => {
        const allPosts = selectAllPosts(state)
        return allPosts.filter(post => post.userId === Number(userId))
    })

    const postTitles = postForUser.map(post =>(
        <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    ))

  return (
    <section>
        <h2>{user?.name}</h2>
        <ol>{postTitles}</ol>
    </section>
  )
}

export default UserPage