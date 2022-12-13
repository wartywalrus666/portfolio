import Navbar from '../bars/Navbar'
import { Link } from "react-router-dom";
import '../css/Projects.css'

function Projects() {

    return (
        <div className="Projects">
            <Navbar currentPage="Projects" />
            <div className='Projects-body'>
                <div className='Projects-blurb'>
                    <p> Here are recent projects I have worked on in the past year.</p>
                    <p>My focuses lie in functionality and accessibility—what are some technical features that are useful to the user, and how can it's functionality best be displayed to the user? I'm interested in researching how users think and interact with interfaces, and learning how to implement helpful features in my work. </p>
                </div>
                <div className="Projects-links" >
                    <div className="Projects-link">
                        <Link to={process.env.PUBLIC_URL + "/projects/personas"}> <h2> personas </h2></Link> <br />
                        <p>Exploring customer personas in evaluating public interfaces.</p>
                    </div>
                    <div className="Projects-link">
                        <Link to={process.env.PUBLIC_URL + "/projects/responsivedesign"}> <h2>responsive design </h2></Link><br />
                        <p>Identifying shortcomings of existing websites and redesigning them from scratch.</p>
                    </div>
                    <div className="Projects-link">
                        <Link to={process.env.PUBLIC_URL + "/projects/development"}> <h2>development </h2></Link><br />
                        <p>Creating a React App with sorting, filtering, & other functionalities for items.</p>
                    </div>
                    <div className="Projects-link">
                        <Link to={process.env.PUBLIC_URL + "/projects/ulp"}> <h2>universal login prompts </h2></Link><br />
                        <p>Creating an interface for the display of Okta's universal login prompts</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Projects;