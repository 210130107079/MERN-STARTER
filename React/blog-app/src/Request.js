import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Request = () => {

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [book , setBook] = useState('')
    const[isPending,setIsPending] = useState(false)
    const history = useHistory()

    const handleRequestbutton = (e) =>{
        e.preventDefault()
        const request = {name , email , book}
        setIsPending(true);

        fetch('http://localhost:9000/requests' , {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(request)
        }).then(()=>{
            setIsPending(false)
            history.push('/')
        })
    }

    return ( 
        <div className="request-form">
            <h2>Request for a Book</h2>
            <form onSubmit={handleRequestbutton}>
                <label>Name :</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                <label>Email :</label>   
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                <label>Book Name :</label>
                <input
                    type="text"
                    required
                    value={book}
                    onChange={(e)=> setBook(e.target.value)}/> 
                {!isPending && <button>Request Book</button>}
                {isPending && <button disabled>Requesting...</button>}   
            </form>
        </div>
     );
}
 
export default Request;