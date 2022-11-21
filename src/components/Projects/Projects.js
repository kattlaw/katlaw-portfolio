import './projects.css';
import ZiaMia from '../../assets/images/ZiaMia.png';
import StJohn from '../../assets/images/stjohn.png';
import TicTacToe from '../../assets/images/tictactoe.png';
import Quotes from '../../assets/images/quotes.png';
import { AiOutlineGithub } from 'react-icons/ai';

const Projects = () => {
    return (
        <div section id="projects">
            <div className="projects-container">
                <h1 className="projects-heading">
                    My work<span style={{color: "#78c4c8"}}>.</span>
                </h1>
                <div className="projects-line"></div>
                <div className="projects-grid">
                    <div className="project-one">
                        <a href="https://zia-mia.netlify.app"><img src={ZiaMia} alt="Zia Mia Restaurant Website" /></a>
                    </div>
                    <div className="project-one-info">
                        <p>Zia Mia<span>.</span></p>
                        A mock restaurant app built with <span>HTML</span>, <span>Javascript</span>, <span>CSS</span>, <span>React</span>, <span>React-Hook-Form</span>, and <span>GSAP</span>. Features a reservation form in a modal
                        coded using <span>React Context</span>. This site is also mobile responsive.
                      
                    <br />
                
                        <div className="code-info">
                            <a href="https://github.com/kattlaw/restaurant-site"><AiOutlineGithub /></a>
                            <div className="btn">
                                <a href="https://zia-mia.netlify.app"> Live Site </a>
                            </div>
                           
                        </div>
                    </div>
                    <div className="project-two">
                        <a href="https://travel-st-john.netlify.app"><img src={StJohn} alt="St. John Travel Website" /></a>
                    </div>
                    <div className="project-two-info">
                        <p>St. John Travel<span>.</span></p>
                        A mock travel app built with <span>HTML</span>, <span>Javascript</span>, <span>CSS</span>, <span>React</span>, <span>Reactstrap</span>, 
                        <span> Swiper JS</span>, <span>Formik</span>, <span>Lightbox Gallery</span>, and <span>GSAP</span>. App features mobile-responsiveness.
                    <br />
                         <div className="code-info">
                            <a href="https://github.com/kattlaw/stjohn-travel"><AiOutlineGithub /></a>
                            <div className="btn">
                                <a href="https://travel-st-john.netlify.app"> Live Site </a> 
                            </div>
                        </div>
                    </div>
                    <div className="project-three">
                        <a href="https://klaw-tic-tac-toe.netlify.app"><img src={TicTacToe} alt="Tic Tac Toe app" /></a>
                    </div>
                    <div className="project-three-info">
                        <p>Tic Tac Toe<span>.</span></p>
                        This app was built with <span>HTML</span>, <span>Javascript</span>, <span>CSS</span>, and <span>React</span>.
                        Features include: next turn prompter, named winner/if resulted in a tie, and a game reset button. 
                    <br />
                        <div className="code-info">
                            <a href="https://github.com/kattlaw/tic-tac-toe"><AiOutlineGithub /></a>
                            <div className="btn">
                                <a href="https://klaw-tic-tac-toe.netlify.app"> Live Site </a>
                            </div> 
                        </div>
                    </div>
                    <div className="project-four">
                        <a href="https://katlaw-quote-gen.netlify.app"><img src={Quotes} alt="Quote Generator App" /></a>
                    </div>
                    <div className="project-four-info">
                        <p>Random Quote Generator<span>.</span></p>
                        This project was built with <span>HTML</span>, <span>Javascript</span>, <span>CSS</span>, and <span> React</span>.
                        Quote button generator takes an array of quotes and renders them randomly. With each render, the quote and background colors also change at random.
                    <br />
                    <div className="code-info">
                            <a href="https://github.com/kattlaw/random-quotes-generator"><AiOutlineGithub /></a>
                            <div className="btn">
                                <a href="https://katlaw-quote-gen.netlify.app"> Live Site </a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;