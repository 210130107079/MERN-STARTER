import {useSelector} from 'react-redux'
import {selectPostsById} from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './timeAgo'
import { ReactionButtons } from './reactionButtons'
import { useParams , Link } from 'react-router-dom'

const SinglePostpage = () => {

    const {postId} = useParams()
    const post = useSelector((state)=>selectPostsById(state,Number(postId)))

    if(!post){
        return (
            <section>
                <h2>Post Not Found !</h2>
            </section>
        )
    }

  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>
            <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
    </article>
  )
}

export default SinglePostpage