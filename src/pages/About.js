import '../css/About.css'
import Navbar from '../bars/Navbar'
import pic from '../img/gustavklimt.jpg'

function About() {

    return (
        <div className="About">
            <Navbar currentPage="About" />
            <div className='About-r1'>
                <div className="About-Text" >
                    <h1>Hi! I'm a Senior at Brown University studying CS with an interest in computer graphics and user interfaces. View some of my work under the 'Projects' tab. </h1>
                </div>
                <div className='About-img-wrapper'>
                    <img className='About-img' src={pic} alt='profile' /><p>(Gustav Klimt, 1909)</p>
                </div>
                <div className="About-goals" >
                    <h1> My expertise lies in web development with React.js and is supplemented with a knowledge of algorithms. I love exploring new fields and coming up with new ways to solve problems. My goals of this portfolio are to learn and demonstrate how to test interfaces with real users (user testing and user research), implement research-backed user-friendly interfaces (enhancing user experiences), and code efficient and helpful features. </h1>
                </div>
            </div>
        </div>
    );
}

export default About;