import './projects.css';
import { useState, useLayoutEffect } from 'react';
import Blog from '../../assets/images/Blog.png';
import ZiaMia from '../../assets/images/ZiaMia.png';
import StJohn from '../../assets/images/stjohn.png';
import { AiOutlineGithub } from 'react-icons/ai';
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
                duration: .6,
                x: "1000",
            });
            workTl.from(".projects-heading", {
                opacity: 0,
                ease: "power1.inOut",
                duration: .6,
                x:"-10",
                y:"-10"
            });
            workTl.from('.projects-line', {
                opacity: 0,
                ease: "power1.in",
                duration: .6,
                x: "1000",
            });
            workTl.from('.code', {
                opacity: 0,
                ease:"power1.in",
                duration: .6,
                x:"1000",
            }) 
            workTl.from('.projects-scroll', {
                opacity: 0,
                ease:"power1",
                scale: 1.2,
                duration: .6,
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
                opacity: 0, duration: .8, 
            });
            tlTwo.from('.project-one-info', {
                 opacity: 0, duration: .8, y: -15
            })
            tlTwo.from('.project-two img', {
                 opacity: 0, duration: .8, delay: .1, 
            });
            tlTwo.from('.project-two-info', {
                opacity: 0, duration: .8, delay: .1, y: -15
            });
            tlTwo.from('.project-three img', {
                 opacity: 0, duration: .8, delay: .1, 
            });
            tlTwo.from('.project-three-info', {
                 opacity: 0, duration: .8, delay: .1, y: -15
            });
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
                        <a href="https://zia-mia.netlify.app" target="_blank"><img src={ZiaMia} alt="Zia Mia Restaurant Website" /></a>
                    </div>
                    <div className="project-one-info">
                        <h3>Z<span className="underline">ia Mia<span>.</span><div className="highlights"></div></span></h3>
                            <div className="project-description">
                                An animated restaurant landing page with a reservation form. This page was created with React, CSS/HTML, and GSAP animation library. 
                            </div>
                    <br />
                        <div className="code-info">
                            <a href="https://github.com/kattlaw/restaurant-site" target="_blank">GitHub</a>
                            <div> | </div>
                            <a href="https://zia-mia.netlify.app" target="_blank">Live Site</a>
                        </div>
                    </div>

                    <div className="project-two">
                        <a href="https://bereavingoutloud.com" target="_blank"><img src={Blog} alt="Blog site homepage" /></a>
                    </div>
                    <div className="project-two-info">
                   
                        <h3>B<span className="underline">ereaving Out Loud<span>.</span>
                            <div className="highlights"></div></span>
                        </h3>
                        <div className="project-description">
                        A personal blog that includes an RSS Feed, subscribe-by-email feature, as well as a commenting engine.
                        This blog was created with Next.js, Typescript, and Tailwind CSS. The site is also integrated with Sanity CMS.
                    </div>
                    <br />
                    <div className="code-info">
                            <a href="https://github.com/kattlaw/my-blog" target="_blank"> Github</a>
                            <div> | </div>
                                <a href="https://bereavingoutloud.com" target="_blank"> Live Site</a>
                        </div>
                    </div>

                    <div className="project-three">
                        <a href="https://travel-st-john.netlify.app" target="_blank"><img src={StJohn} alt="St. John Travel Website" /></a>
                    </div>
                    <div className="project-three-info">
                       <h3>S<span className="underline">t. John Travel.<div className="highlights"></div></span></h3>
                       <div className="project-description">
                        A travel destination landing page featuring animations, a photo gallery, and a contact form. This page was built in React with HTML/CSS, Reactstrap, and GSAP.
                    </div>
                    <br />
                         <div className="code-info">
                            <a href="https://github.com/kattlaw/stjohn-travel" target="_blank">Github</a>
                            <div> | </div>
                                <a href="https://travel-st-john.netlify.app" target="_blank">Live Site</a> 
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
                        <a href="https://chatgpt-clone-eight.vercel.app" target="_blank">Codex Clone</a><a href="https://github.com/kattlaw/chatgpt-clone" target="_blank" style={{color: "#222d3e", paddingLeft: "15px"}}><AiOutlineGithub /></a>
                        <br />
                        <a href="https://katlaw-quote-gen.netlify.app" target="_blank">Quote Generator</a><a href="https://github.com/kattlaw/random-quotes-generator" target="_blank" style={{color: "#222d3e", paddingLeft: "15px"}}><AiOutlineGithub /></a>
                        <br />
                        <a href="https://klaw-tic-tac-toe.netlify.app" target="_blank">Tic-Tac-Toe Game</a><a href="https://github.com/kattlaw/tic-tac-toe" target="_blank" style={{color: "#222d3e", paddingLeft: "15px"}}><AiOutlineGithub /></a>
                        <br />
                        <a href="https://github.com/kattlaw/Campsite-React-Project" target="_blank">Campsite Webpage</a>
                        <br />
                        <a href="https://github.com/kattlaw/nucampsiteServer" target="_blank">NuCamp Server</a>
                        <br />
                        <a href="https://github.com/kattlaw/React-Native-NuCamp-App" target="_blank" >Mobile NuCamp Site</a>
                        <br />
                        <a href="https://kl-color-guess-game.netlify.app" target="_blank">Color Game</a><a href="https://github.com/kattlaw/Color-Guessing-Game" target="_blank" style={{color: "#222d3e", paddingLeft: "15px"}}><AiOutlineGithub /></a>
                        <br />
                        <a href="https://emoji-match-game.netlify.app/" target="_blank">Emoji Game</a>
                        <a href="https://github.com/kattlaw/matching-game" target="_blank" style={{color: "#222d3e", paddingLeft:"15px"}}><AiOutlineGithub /></a>
                        </p>}
                  
                </div>
            </section>    
        </div>      
    )
}
    

export default Projects;