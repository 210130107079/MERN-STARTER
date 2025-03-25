import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

const NotFound = () => {
    const [isHovered, setIsHovered] = useState(false);
    return ( 
        <div className="not-found">
            <h2>! 404 ERROR !</h2>
            <p>This Page Can not be Found !</p>
            <Link to="/" style={{
                backgroundColor: isHovered ? "#f1356d" : "#ffffff",
                borderRadius: "5px",
                boxShadow:"#000000"}}>Home</Link>
        </div>
     );
}
 
export default NotFound;