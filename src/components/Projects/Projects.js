import './projects.css';
import { useState, useLayoutEffect } from 'react';
import ZiaMia from '../../assets/images/ZiaMia.png';
import StJohn from '../../assets/images/stjohn.png';
import TicTacToe from '../../assets/images/tictactoe.png';
import Quotes from '../../assets/images/quotes.png';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    //gsap animation 


    useLayoutEffect(() => {
        const workTl = gsap.timeline();
        const ctx = gsap.context(() => {
            workTl.from(".projects-background", {
                ease: "power1.in",
                duration: 1,
                x: "1000",
            });
            workTl.from(".projects-heading", {
                opacity: 0,
                ease: "power1.inOut",
                duration: 1,
                x:"-10",
                y:"-10"
            });
            workTl.from('.projects-line', {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "1000",
            });
            workTl.from('.code', {
                opacity: 0,
                ease:"power1.in",
                duration: 1,
                x:"1000",
            }) 
            workTl.from('.projects-scroll', {
                opacity: 0,
                ease:"power1",
                scale: 1.2,
                duration: 1,
                y:"-300"
            });
        })
            return () => ctx.revert()

    }, []);
 
    useLayoutEffect(() => {
        const tlTwo = gsap.timeline({
            scrollTrigger: {
                id: "#projects",
                start: "top top",
                end: "bottom bottom",
                ease: "sine.out",
                toggleActions: "play none none none",
                //markers: true, 
            },
        });

        const ctx = gsap.context(() => {
            tlTwo.from('.project-one img', {
                opacity: 0, duration: 1, 
            });
            tlTwo.from('.project-one-info', {
                 opacity: 0, duration: 1, y: -15
            })
            tlTwo.from('.project-two img', {
                 opacity: 0, duration: 1, delay: .1, 
            });
            tlTwo.from('.project-two-info', {
                opacity: 0, duration: 1, delay: .1, y: -15
            });
            tlTwo.from('.project-three img', {
                 opacity: 0, duration: 1, delay: .1, 
            });
            tlTwo.from('.project-three-info', {
                 opacity: 0, duration: 1, delay: .1, y: -15
            });
            tlTwo.from('.project-four img', {   
                opacity: 0, duration: 1, delay: .1, 
            });
            tlTwo.from('.project-four-info', {
                 opacity: 0, duration: 1, delay: .1, y: -15
            })
        })
            return () => ctx.revert()
          
    }, []);

    const [showMore, setShowMore] = useState(false);

    
    function handleMoreClick(e) {
       e.preventDefault();
        setShowMore(!showMore)   
    }
    
    return (
        <div id="projects">
            <div className="projects-container">
                <h1 className="projects-heading">
                    My work<span style={{color: "#78c4c8"}}>.</span>
                </h1>
                <div className="projects-background"></div>
                <div className="projects-line"></div>
                <div className="projects-scroll">
                    Scroll
                    <div className="projects-scroll-line"></div>
                </div>
                <div className="code-container">
                <div className="code">&lt; <span style={{color:"#222d3e"}}>/</span> &gt;<span style={{color:"#222d3e"}}>.</span></div>
                </div>
                <div className="projects-grid">
                    <div className="project-one">
                        <a href="https://zia-mia.netlify.app"><img src={ZiaMia} alt="Zia Mia Restaurant Website" /></a>
                    </div>
                    <div className="project-one-info">
                        <h3>Z<span className="underline">ia Mia<span>.</span><div className="highlights"></div></span></h3>
                        A restaurant web page built with HTML, Javascript, CSS, React, React-Hook-Form, and GSAP. Features a reservation form in a modal
                        coded using React Context. This site is also mobile responsive.  
                    <br />
                        <div className="code-info">
                            <a href="https://github.com/kattlaw/restaurant-site"><AiOutlineGithub /></a>
                        
                                <a href="https://zia-mia.netlify.app"><BsGlobe2/></a>
                        </div>
                    </div>
                    <div className="project-two">
                        <a href="https://travel-st-john.netlify.app"><img src={StJohn} alt="St. John Travel Website" /></a>
                    </div>
                    <div className="project-two-info">
                       <h3>S<span className="underline">t. John Travel.<div className="highlights"></div></span></h3>
                        A travel web page built with HTML, Javascript, CSS, React, Reactstrap, 
                        Swiper JS, Formik, Lightbox Gallery, and GSAP. App features mobile-responsiveness, animations, and a ton of beautiful pictures.
                    <br />
                         <div className="code-info">
                            <a href="https://github.com/kattlaw/stjohn-travel"><AiOutlineGithub /></a>
                                <a href="https://travel-st-john.netlify.app"><BsGlobe2 /> </a> 
                        </div>  
                    </div>
                    <div className="project-three">
                        <a href="https://klaw-tic-tac-toe.netlify.app"><img src={TicTacToe} alt="Tic Tac Toe app" /></a>
                    </div>
                    <div className="project-three-info">
                        <h3>T<span className="underline">ic Tac Toe.<div className="highlights"></div></span></h3>
                        This game was built with HTML, Javascript, CSS, and React.
                        Features include: next turn prompter, named winner/if resulted in a tie, and a game reset button. 
                    <br />
                        <div className="code-info">
                            <a href="https://github.com/kattlaw/tic-tac-toe"><AiOutlineGithub /></a>
                                <a href="https://klaw-tic-tac-toe.netlify.app"><BsGlobe2 /></a>
                        </div>
                    </div>
                    <div className="project-four">
                        <a href="https://katlaw-quote-gen.netlify.app"><img src={Quotes} alt="Quote Generator App" /></a>
                    </div>
                    <div className="project-four-info">
                        <h3>Q<span className="underline">uote Generator.<div className="highlights"></div></span></h3>
                        This project was built with HTML, Javascript, CSS, and React.
                        Quote button generator takes an array of quotes and renders them randomly. With each render, the quote and background colors also change at random.
                    <br />
                        <div className="code-info">
                            <a href="https://github.com/kattlaw/random-quotes-generator"><AiOutlineGithub /></a>
                                <a href="https://katlaw-quote-gen.netlify.app"><BsGlobe2 /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <section id="more-projects">
                <div className="show-more">  
                <button onClick={handleMoreClick}>
                      <h3>{showMore ? '- Show Less Work' : '+ Show More Work'}
                      </h3>
                </button>
                      {showMore && <p>
                        <a href="https://github.com/kattlaw/Campsite-React-Project">Campsite Webpage</a>
                        <br />
                        <a href="https://github.com/kattlaw/nucampsiteServer">NuCamp Server</a>
                        <br />
                        <a href="https://github.com/kattlaw/React-Native-NuCamp-App">Mobile NuCamp Site</a>
                        <br />
                        <a href="https://kl-color-guess-game.netlify.app">Color Game</a><a href="https://github.com/kattlaw/Color-Guessing-Game" style={{color: "#222d3e", paddingLeft: "15px"}}><AiOutlineGithub /></a>
                        <br />
                        <a href="https://emoji-match-game.netlify.app/">Emoji Game</a>
                        <a href="https://github.com/kattlaw/matching-game" style={{color: "#222d3e", paddingLeft:"15px"}}><AiOutlineGithub /></a>
                        </p>}
                  
                </div>
            </section>    
        </div>      
    )
}
    

export default Projects;