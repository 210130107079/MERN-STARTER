import { Link } from 'react-router-dom';

const Contact = () => {

    return ( 
        <div className="contact">
            <h2>Address</h2>
            <p>234-Shiv-Shakti Housing Board Society</p>
            <p>Subhanpura Road, Subhanpura</p>
            <p>Vadodara, Gujarat, India.</p>
            <p>390023</p>

            <h2>Phone</h2>
            <a href="tel:+918799535382">+91 87995 35382</a><br></br>
            <a href="tel:+918734832301">+91 87348 32301</a>

            <h2>Email</h2>
            <a href="mailto:sohamtarabada2003@gmail.com">sohamtarabada2003@gmail.com</a>
        </div>
     );
}
 
export default Contact;