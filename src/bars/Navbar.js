import '../css/Navbar.css';
import { Link } from "react-router-dom";

function Navbar(props) {

    return (
        <div className="Navbar">
            <h1 className="Navbar-header"> My Portfolio </h1>
            <div className="Navbar-pages">
                <Link to={process.env.PUBLIC_URL + '/home'}>HOME</Link>
                <Link to={process.env.PUBLIC_URL + '/projects'}>PROJECTS</Link>
                <Link to={process.env.PUBLIC_URL + '/about'}>ABOUT</Link>
            </div>
        </div>
    )

} export default Navbar;