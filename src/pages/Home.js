import '../css/Home.css'
import Navbar from '../bars/Navbar'
// import ReactPaint from 'react-paint';
import CanvasDraw from "react-canvas-draw";

// const props = {
//     style: {
//         background: 'var(--translucentgrey)',
//     },
//     brushCol: '#ffffff',
//     lineWidth: 8,
//     className: 'react-paint',
//     height: 500,
//     width: 500,
//     onDraw: () => { console.log('i have drawn!'); },
// };

function Home() {

    const props = {
        onChange: null,
        loadTimeOffset: 5,
        lazyRadius: 0,
        brushRadius: 5,
        brushColor: "var(--black)",
        catenaryColor: "grey",
        gridColor: "white",
        hideGrid: false,
        canvasWidth: 400,
        canvasHeight: 400,
        disabled: false,
        imgSrc: "",
        saveData: null,
        immediateLoading: false,
        hideInterface: true,
        gridSizeX: 25,
        gridSizeY: 25,
        gridLineWidth: 0.5,
        hideGridX: false,
        hideGridY: false,
        enablePanAndZoom: false,
        mouseZoomFactor: 0.01,
        zoomExtents: { min: 0.33, max: 3 },
    };

    return (
        <div className="Home">
            <Navbar currentPage="home" />
            <div className='Home-paint'>
                <CanvasDraw {...props} /> <br />
                Scratchboard :~) <br />Doodle on me!
            </div>
            <div className='Home-intro'>
                <h1>Hi! Welcome to my portfolio. My UI/UX work lives in this website—feel free to look around.</h1>
            </div>
        </div>
    );
}

export default Home;