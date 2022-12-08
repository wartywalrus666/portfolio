import '../css/About.css'
import Navbar from '../bars/Navbar'

function About() {

    return (
        <div className="About">
            <Navbar currentPage="About" />
            <div className="About-Text" >
                <h1>Hi! I'm a Senior at Brown University studying CS with an interest in computer graphics and user interfaces. View some of my work under the 'Projects' tab. </h1>
            </div>
        </div>
    );
}

export default About;