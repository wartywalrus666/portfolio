import Navbar from '../bars/Navbar'
import { Link } from "react-router-dom";

function Projects() {

    return (
        <div className="Projects">
            <Navbar currentPage="Projects" />
            <div className="Projects-Text" >
                <Link to={process.env.PUBLIC_URL + "/projects/personas"}> personas </Link> <br />
                <Link to={process.env.PUBLIC_URL + "/projects/responsivedesign"}> responsive design </Link><br />
                <Link to={process.env.PUBLIC_URL + "/projects/development"}> development </Link><br />
            </div>
        </div>
    );
}

export default Projects;