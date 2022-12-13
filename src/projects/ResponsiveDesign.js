import '../css/Project.css';
import guide from '../img/redesign/design guide.png'
import desktop from '../img/redesign/desktop.png'
import mobile from '../img/redesign/mobile.png'
import original from '../img/redesign/original.png'
import tablet from '../img/redesign/tablet.png'
import wireframes from '../img/redesign/wireframes.jpg'

function ResponsiveDesign() {

    return (
        <div className='Project'>
            <h1 class='Project-title'>Responsive Redesign</h1>
            <div className='Project-introduction'>
                <h2>Context</h2>
                <p>Website responsiveness has become increasingly applicable over the past two decades as the sale of desktop
                    computers, monitors, laptops, mobile phones, and tablets have grown, each of which are offered in
                    wide-ranging screen sizes. Websites originally intended for laptop viewing experiences must now adapt to a
                    smaller, vertically oriented phone screen and vice versa in order to keep up with relevancy. One website I
                    cam across on the box of the jigsaw puzzle I had been building was <a
                        href='https://www.whitemountainpuzzles.com/'>White Mountain Puzzles</a>, which I noticed could be
                    redesigned for an improved user experience, accessibility, and responsiveness.
                </p>
            </div>
            <div className='Project-body'>
                <h2 class='title'>The Original Website</h2>
                <p>
                    I chose this website to redesign because it has many areas of potential improvement. Below is a screenshot
                    of the landing page on a laptop screen.<br />
                </p>
                <h3>Areas for improvement</h3>
                <p>
                    <img className='Project-img' src={original} alt="original website" /> <br />
                    We can observe a few things just from the top of the page:
                    <li>The height of the header and navbar are too tall, which blocks the primary content of the website, aka
                        what people are looking for when they want to buy puzzles</li>
                    <li>Looks like this website may have been intended for a wider screen which is why navbar is collapsing into
                        two rows</li>
                    <li>Search bar input box is barely visible</li>
                    <li>'New Catalog Mailing Soon!' may make more sense to put at the bottom of the page, where subscription
                        enrollment options usually are</li>
                    <li>Right side of header spacing is inconsistent and confusing</li>
                </p>
                <h3>Accessibility Rating</h3>
                <p>
                    The WAVE Report shows 2 missing alt texts on images and 40 missing labels on buttons (add to wishlist heart
                    icons), which were the most pressing accessibility issues. There were no contrast errors, which seemed
                    reasonable, since the colour palette is white, a primary red, and a primary blue.
                </p>
            </div>

            <div className='Project-body'>
                <h2 class='title'>Process: Redesign</h2>
                <p>
                    In redesigning the website, I aim to only alter specific parts to resolve the above issues without altering
                    the existing identity/aesthetics of the website. The visual design guide created with Figma upholds the
                    original website's colour scheme, text style, and logo.
                </p>
                <h3>Visual Design Guide</h3>
                <p>
                    <img className='Project-img' src={guide} alt='visual design guides' />
                </p>
                <h3>Low-Fidelity Prototype</h3>
                <p>
                    Below are annotated wireframes of how the redesigned website might look in laptop, tablet, and mobile screen
                    sizes. <br /><br />
                    <img className='Project-img' src={wireframes} alt='Lo-fi website design wireframes' />
                </p>
                <h4>Hi-Fidelity Prototypes</h4>
                <p>
                    Below are hi-fi prototypes of each screen size based on the low-fi prototypes. Here, each of the red white
                    and blue headers at the top of the page are div sections that can use flexbox to space its elements evenly
                    across the screen, and wrap around if the screen is too narrow to fit all elements in one row. The
                    horizontal scroll of the puzzle products below the decorative 'take quiz' image can be implemented by
                    setting a definitive height and a scroll for overflow-y. Font sizes can hover between 14-24px, which can be
                    set in terms of em and possibly be further shrunken @media screen max width. Flexbox is not needed for the
                    puzzle products since vertical and horizontal scrolling is enabled, but the size of the thumbnail picture
                    may be variable. Hovering over navbar links should change the text colour to green.
                </p>
                <h3>Desktop Prototype:</h3>
                <img className='Project-img' src={desktop} alt='desktop hi-fi prototype' />
                <h4>Tablet Prototype:</h4>
                <img className='Project-img' src={tablet} alt='tablet hi-fi prototype' />
                <h4>Mobile Prototype:</h4>
                <img className='Project-img' src={mobile} alt='mobile hi-fi prototype' />
                <h3>Live Redesigned Website</h3>
                <p>
                    Based on the hi-fi prototypes, the live redesigned website can be found <a
                        href='https://wartywalrus666.github.io/redesign/'>here</a>.
                </p>
            </div>
        </div>
    )

} export default ResponsiveDesign;