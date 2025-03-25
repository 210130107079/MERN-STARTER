import PostAuthor from "./PostAuthor.jsx";
import TimeAgo from "./timeAgo.jsx";
import { ReactionButtons } from "./reactionButtons.jsx";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <section>
      <h2>• {post.title}</h2>
      <p>{post.body.slice(0,30)}</p>
      <p>
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId}/>
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </section>
  );
};

export default PostsExcerpt;
