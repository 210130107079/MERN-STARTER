import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isHovered] = useState(false);
    return ( 
        <nav className="navbar">
            <h1>The Bookify</h1>
            <div className="links">
                <Link to="/" style={{
                     backgroundColor: isHovered ? "#f1356d" : "#ffffff",
                     borderRadius: "5px",
                     boxShadow:"#000000"
                }}>Home</Link>
                <Link to="/create" id="createcss" style={{
                    backgroundColor: isHovered ? "f1356d" : "#ffffff",
                    borderRadius : '5px'
                }}>Add Book</Link>
                <Link to="/contact" id="createcss" style={{
                    backgroundColor: isHovered ? "f1356d" : "#ffffff",
                    borderRadius : '5px'
                }}>Contact Us</Link>
                <Link to="/request" id="createcss" style={{
                    backgroundColor: isHovered ? "f1356d" : "#ffffff",
                    borderRadius : '5px'
                }}>Request Book</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;