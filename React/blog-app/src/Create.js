import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [author,setAuthor] = useState('');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = { title , summary , author }
        setIsPending(true);

        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }

    return (  
        <div className="create">
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Title : </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}/>

                <label>Book Summary : </label>
                <textarea
                    required
                    value={summary}
                    onChange={(e)=>setSummary(e.target.value)}>
                </textarea>

                <label>Book Author : </label>   
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}/>

                {!isPending && <button>Add Book</button>}
                {isPending && <button disabled>Adding Book...</button>}
            </form>
        </div>
     );
}
 
export default Create;