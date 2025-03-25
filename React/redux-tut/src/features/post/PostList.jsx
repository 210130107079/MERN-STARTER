import {useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import {selectAllPosts,getPostsStatus,getPostsError} from './postsSlice.js'
import PostsExcerpt from './PostsExcerpt.jsx'


const PostLists = () => {

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const postsError = useSelector(getPostsError)


    let content
    if(postsStatus ==='loading'){
      content = <p>"Loading..."</p>
    }else if(postsStatus ==='succeeded'){
      const uniquePosts = posts.filter(
        (post, index, self) => index === self.findIndex(p => p.id === post.id)
      );
      const orderedPosts = uniquePosts.slice().sort((a,b)=>b.date.localeCompare(a.date))
      content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post}/>)
    }else if(postsStatus ==='failed'){
      content = <p>{error}</p>
    }

  return (
    <section>
        <h2>POSTS</h2>
        {content}
    </section>
  )
}

export default PostLists