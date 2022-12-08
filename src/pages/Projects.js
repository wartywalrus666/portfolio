import Navbar from '../bars/Navbar'
import { Link } from "react-router-dom";

function Projects() {

    return (
        <div className="Projects">
            <Navbar currentPage="Projects" />
            <div className="Projects-links" >
                <div className="Projects-link">
                    <Link to={process.env.PUBLIC_URL + "/projects/personas"}> <h2> personas </h2></Link> <br />
                    <p>Exploring customer personas in evaluating public interfaces.</p>
                </div>
                <div className="Projects-link">
                    <Link to={process.env.PUBLIC_URL + "/projects/responsivedesign"}> <h2>responsive design </h2></Link><br />
                    <p>Identifying shortcomings of existing websites and redesigning them from scratch.</p>
                </div><div className="Projects-link">
                    <Link to={process.env.PUBLIC_URL + "/projects/development"}> <h2>development </h2></Link><br />
                    <p>Creating a React App with sorting, filtering, & other functionalities for items.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;