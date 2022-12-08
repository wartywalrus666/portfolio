import '../css/Navbar.css';

function Navbar(props) {

    return (
        <div className="Navbar">
            <h1 className="Navbar-header"> My Portfolio </h1>
            <div className="Navbar-pages">
                <a href='/home'> HOME </a>
                <a href='/projects'> PROJECTS </a>
                <a href='/about'> ABOUT </a>
            </div>
        </div>
    )

} export default Navbar;