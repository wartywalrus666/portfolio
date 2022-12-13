import '../css/Project.css';

function ULP() {

    return (
        <div className='Project'>
            <h1>Universal Login Prompts</h1>
            <div className='Project-body'>
                <h2>Context</h2>
                <p>This summer, I worked with the Branding/Universal Login Experience team as an intern to create a website to host Okta's collection of universal login prompts. These prompts are essentially windows that appear on screens when you log in or sign up into some app (though there are many other kinds of login prompts, including MFA, invitations, email verifications, reset password, etc.) This would be used both internally and externally for employees and customers alike, with added capabilities to display custom themes designed by respective customers.</p>
            </div>
            <div className='Project-body'>
                <h2>Process</h2>
                <p> This was a big project, and the most challenging part was growing accustomed to the very large existing codebase, which was the largest repository I had ever worked in.</p>
                <p>The previous website, hosted by Heroku, held big groups of prompts with no way to search, sort, or filter through them. There are several changes I implemented to improve the experience of looking through these prompts:</p>
                <li>grouping prompts under group names that are intuitive and clear</li>
                <li>ability to hide error prompts, since there are many but are usually not an emphasis</li>
                <li>a language toggle to change languages</li>
                <li>a search bar that searches for prompts by keywords</li>
                <li>functionality to paste a generated json to view prompts in a custom theme</li>
                <li>hosted on github pages and deployed automatically on merge to master</li>
                <p>Overall, I learned a lot from this project which consisted of a lot of trial and error. There are still areas for improvement, including the website responsiveness and finding a more seamless way to input custom themes.</p>
            </div>
            <div className='Project-body'>
                <p>Feel free to take a look at the <a href='https://auth0.github.io/universal-login-prompts/' target="_blank">live website</a> hosted on Github Pages.</p>
            </div>


        </div>
    )

} export default ULP;