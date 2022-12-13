import '../css/Project.css';
import int from '../img/personas/interface.png';
import chandler from '../img/personas/chandler.png';
import sheila from '../img/personas/sheila.png'
import storyboard from '../img/personas/storyboard.png'

function Personas() {

    return (
        <div className='Project'>
            <h1 className='Project-title'>C@B Personas</h1>
            <div className='Project-introduction'>
                <h2>Context</h2>
                <p><a href='cab.brown.edu'>Courses@Brown</a> is a course catalog website that receives a high volume of traffic every semester from Brown's student population, who depend on it to browse, search, and register for classes.
                    C@B is a functionally complex interface that is continually updated year to year. I'm interested in better
                    understanding its user experience—(how do students interact with the C@B interface?)—by observing and
                    interviewing real users, and creating personas and a storyboard.</p>
                <p>This a basic rendering of a C@B page.</p>
                <img className='Project-img' alt="drawing of C@B interface" src={int} />
            </div>
            <div className='Project-body'>
                <h2>Process: Data Collection & Interviews</h2>
                <h3>Observations</h3>
                <p>Collecting real data on users interacting with interfaces helps us understand how they are used, features
                    that are beneficial, and areas for improvement. I observed 4 users browse and make changes on C@B,
                    paying attention to objective actions, struggles or difficulties.<br />
                    Here were my findings: <br />
                    <li>There are many repeated clicks that could have been reduced with the functionality of an extra button
                        (eg. navigating from single course in calendar view to all cart courses in calendar view requires you to
                        click back to your cart and reclick the calendar icon)</li>
                    <li> Users tended to open external links linked within C@B, and needed to navigate between multiple
                        tabs</li>
                    <li> Certain delays in submit buttons (add to cart, register) would cause the user to click the button
                        multiple times</li>
                    <li> The time users spent scrolling and reading course descriptions varied widely, some skimmed classes
                        very quickly, some spent extending time reading through each blurb carefully</li>
                </p>
                <h3>Interview Questions</h3>
                <p>
                    <li>What is your strategy with shopping for courses: browsing a wide variety of classes in various
                        departments with loose filtering, searching for specific course codes or using many filters, or
                        somewhere in between?</li>
                    <li>On a scale from 1 to 5, how well do you think the C@B interface is well suited to support your
                        strategy? 1 being not suited at all, and 5 being exceptionally suited.</li>
                    <li>On average, how many courses get added to your cart each semester?</li>
                    <li>In three words, describe your experience using C@B during shopping period</li>
                    <li>Which experience would you rate the highest (very easy/convenient/efficient to use) on C@B:
                        search/browsing functionality, navigation, calender view, cart functionality, or registration?</li>
                    <li>Which experience would you rate the lowest (challenging, difficult to use) on C@B: search/browsing
                        functionality, navigation, calender view, cart functionality, or registration?</li>
                </p>
                <h3>Key Interview Takeaways</h3>
                <li>Shopping strategies varied between users, some that needed to fulfill more requirements tended to search
                    with many filters, or specific course codes, while others looking to take electives had broad search
                    settings</li>
                <li>In general, users who shopped fewer courses (5-6) agreed that the C@B interface was well suited to
                    support their shopping strategy. Users who shopped more courses experienced less satisfaction.</li>
                <li>The most common word used to describe users' C@B experience was 'slow'</li>
                <li>The most common highest rated feature was 'calendar view'</li>
                <li>The most common highest rated feature was 'search' and 'registration'</li>
            </div>
            <div className='Project-body'>
                <h2>Personas & Storyboard</h2>
                <p>Based on these observations and interviews, I can construct two personas that describe what a C@B user
                    demographic may look like</p>
                <h3>Shopper Sheila</h3>
                <p>Sheila is an avid shopper that likes to explore lots of courses in different departments and often feels
                    overwhelmed by wide varieties of options. She likes to spend lots of time browsing through C@B using
                    various filters and wishes C@B was faster during registration</p>
                <img className='Project-img' alt='persona shopper sheila' src={sheila} />
                <h3>Chillin' Chandler</h3>
                <p>Chandler doesn't really worry about C@B deadlines because her classes are generally large uncapped
                    lectures or niche seminars that don't have waitlists. She has lots of reqs to meet so all of her
                    semesters are pretty planned/filled out. She usually searches by course code or her specific departments
                    to add to her cart.</p>
                <img className='Project-img' alt='persona chillin chandler' src={chandler} />
                <h3>Sheila's Storyboard</h3>
                <img className='Project-img' alt='sheilas storyboard' src={storyboard} />
                <p>I found that sketching up these Personas and Storyboards was an engaging way to understand how users think and interact with interfaces, and helped me develop the skills to observe and ask insightful questions.</p>
            </div>
        </div>
    )

} export default Personas;