import '../css/Project.css';

function Development() {

    return (
        <div className='Project'>
            <h1>Development</h1>
            <div className='Project-body'>
                <h2>Context: Working with React</h2>
                <p>This project is an exploration of the development of an interactive interface using interface components and internal data states. Specifically I created a list-based interface with React that is able to: </p>
                <li>display a variety of items</li>
                <li>filter items based on some attribute</li>
                <li>sort items according to some attribute</li>
                <li>add and remove items to a list</li>
                <li>calculate total/average of some attribute in the list</li>
            </div>
            <div className='Project-body'>
                <h2>Process</h2>
                <p>Because I like working with colours and colour palettes, I chose to create a website that features several Pantone colour cards that can be sorted by colour group, filtered by level of saturation, and added to a 'saved' list, where the average saturation of the colours in the list is displayed.</p>
                <p>In an object-oriented fashion, I created a js file for each card with attributes of colour, name, colour groups, and saturation level, which was calculated dynamically besed on the hex value for the colour. Then, I iteratively build each technical feature starting with filtering, then sorting, then adding and removing items to a list. A challenging part of this assignment was working with useEffect dependecies and making sure that all appropriate useEffects were triggered when a relevant state variable was changed, and avoiding infinite loops.</p>
            </div>
            <div className='Project-body'>
                <p>Feel free to take a look at the <a href='https://wartywalrus666.github.io/development/' target="_blank">live website</a> hosted on Github Pages, and refer to the <a href='https://github.com/wartywalrus666/development' target="_blank">github repo</a> for more.</p>
            </div>


        </div>
    )

} export default Development;