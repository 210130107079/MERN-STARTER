import { useParams , useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';


const BlogDetail = () => {

    const { id } = useParams();
    const { data:blog , error , isPending } = useFetch('http://localhost:8000/blogs/' + id );
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By : {blog.author}</p>
                    <div>{blog.summary}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;