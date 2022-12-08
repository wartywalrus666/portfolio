import '../css/Home.css'
import Navbar from '../bars/Navbar'

function Home() {

    return (
        <div className="Home">
            <Navbar currentPage="home" />
            <div className='Home-intro'>
                <h1>Hi! Welcome to my portfolio. My UI/UX work lives in this website—feel free to look around.</h1>
            </div>
        </div>
    );
}

export default Home;