import '../css/Home.css'
import Navbar from '../bars/Navbar'

function Home() {

    return (
        <div className="Home">
            <Navbar currentPage="home" />
            <div className='Home-intro'>
                welcome
            </div>
        </div>
    );
}

export default Home;