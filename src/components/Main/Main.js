import './main.css';
import { BsArrowDownCircle, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  
    //gsap animation 
    const titleTl = gsap.timeline();
    const name = useRef();
    const mouse = useRef();

    useEffect(() => {
        
        const ctx = gsap.context(() => {
            titleTl.from(name.current, {
                opacity: 0,
                ease: 'sine.inOut',
                duration: 2,
                scale: 1.5,
            })
            titleTl.from('.title', {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1,
                scale: 1.2,
            });
            titleTl.from(mouse.current, {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1,
                scale: 1.2,
            })

        })  
            return () => ctx.revert()
        
    },[titleTl]);

    const spanTl = gsap.timeline(({
        scrollTrigger: {
            trigger: "#main",
            start: "center bottom",
            markers: true,
            scrub: 1,
            //toggleActions: "play pause resume reset",
        }
    }));

    useEffect(() => {

        const ctx = gsap.context(() => {

            spanTl.from(".intro-heading", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100"
            });
            spanTl.from(".intro-line", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                delay: 1,
                x: "-100"
            });
            spanTl.from(".intro-subtitle", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                delay: 1,
                x: "0"
            });
            spanTl.from(".intro-scroll", {
                opacity: 0,
                ease:"power1",
                scale: 1.2,
                duration: 1,
                delay: 2,
                y:"-300"
            });
            spanTl.fromTo('.tech-stack span', {
                opacity: 0,
                scale: 1.2,
                duration:1,
                delay: 1,
                ease:"none",
                repeatRefresh:true // gets a new random x and y value on each repeat
            },
            {
                opacity: 0.2,
                scale: 1,
                stagger: {
                each: 0.3,
                x: "random(-20, 20, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5
                y: "random(-20, 10, 3)", 
                from: "random"
                }
            });
            spanTl.from(".intro-background", {
                ease: "power1.in",
                duration: 1,
                x: "1000",
                delay: 1
            })
            spanTl.from(".intro-projects", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                delay: 1
            });
          
        })
    
        return () => ctx.revert()
    
    }, [spanTl]);
    
    return (
        <>
        <div id="main">
            <div className="heading-container">
                <h1 className="main-heading" ref={name}>
                    Katherine Law<span style={{color:"#222d3e"}}>.</span>
                </h1>
            </div>
            <div className="title">
                Web Developer
            </div>
            <div className="title-socials">
                <a href="http://github.com/kattlaw"><BsGithub /></a>
                <a href="http://www.linkedin.com/in/katlawdev"><BsLinkedin /></a>
                <a href="mailto: katherine.law2@gmail.com"><FiMail /></a>
            </div>
            <div className="arrow"><a href="#intro-section"><BsArrowDownCircle/></a></div>
            <div className="mouse-scroll" ref={mouse}>
            <a href="#intro-section"> scroll down </a>
            </div>
          
            <div className="mouse">
                <a href="#intro-section"><span></span></a>
            </div> 
        </div>
        <div id="intro-section">
            <div className="intro-heading">
                <h1>Hi, welcome to my page<span style={{color:"#78c4c8", fontSize:"4rem"}}>.</span></h1>
            </div>
            <div className="intro-line"></div>
            <div className="intro-subtitle">
                <h2>I'm a developer with a passion for <span style={{color: "#78c4c8"}}>designing</span> and <span style={{color: "#78c4c8"}}>building</span> things for the web.</h2>
            </div>
            <div className="tech-stack">
                <span>Javascript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>React</span>
                <span>React Native</span>
                <span>GSAP</span>
                <span>React-Redux</span>
                <span>Git</span>
                <span>Github</span>
                <span>Node</span>
                <span>React-Router</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>REST</span>
                <span>JSON</span>
                <span>JQuery</span>
                <span>Netlify</span>
                <span>NPM</span>
                <span>Visual Studio</span>
                <span>Postman</span>
                <span>Expo</span>
                <span>Android Studio</span>
                <span>SCSS</span>
                
            </div>
            <div className="intro-scroll">Scroll
                <div className="intro-scroll-line"></div>
            </div>
            <div className="intro-container">
                <div className="intro-background"></div>
                <div className="intro-projects">
                    <p>
                        Recently, I have been building most of my web apps with React. You can check out some of those <Link to="/projects" style={{color: "#222d3e", textDecorationColor:"#78c4c8"}}>here.</Link>
                    </p>
                </div>
           </div>
           <div className="bottom-container">
                <div className="intouch">
                    <h1>Let's Connect<span style={{color: "#222d3e"}}>.</span></h1>
                    </div>
                <svg className="message-svg" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "68px", height: "80px", transform: "rotateY(180deg)"}}>
                    <g filter="url(#filter0_ii)">
                    <path className="fill1" d="M84.5 13H15C10.5817 13 7 16.5817 7 21V59.5C7 63.9183 10.5817 67.5 15 67.5H18V85.0858C18 85.9767 19.0771 86.4229 19.7071 85.7929L37.7071 67.7929C37.8946 67.6054 38.149 67.5 38.4142 67.5H84.5C88.9183 67.5 92.5 63.9183 92.5 59.5V21C92.5 16.5817 88.9183 13 84.5 13Z" fill="#ebeff0" strokeWidth="2.6px"></path>
                    </g>
                    <path className="stroke1" d="M84.5 13H15C10.5817 13 7 16.5817 7 21V59.5C7 63.9183 10.5817 67.5 15 67.5H18V85.0858C18 85.9767 19.0771 86.4229 19.7071 85.7929L37.7071 67.7929C37.8946 67.6054 38.149 67.5 38.4142 67.5H84.5C88.9183 67.5 92.5 63.9183 92.5 59.5V21C92.5 16.5817 88.9183 13 84.5 13Z" stroke="rgba(34,45,62,1)" strokeWidth="2.6px"></path>
                    <path className="line-message3-line1 stroke2" d="M21 53H49" stroke="#222d3e" strokeWidth="2.6px"></path>
                    <path className="line-message3-line2 stroke2" d="M21 41H77" stroke="#222d3e" strokeWidth="2.6px"></path>
                    <path className="line-message3-line3 stroke2" d="M21 29H77" stroke="#222d3e" strokeWidth="2.6px"></path>
                    <defs><filter id="filter0_ii" x="4" y="8" width="93.5" height="81.0898" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="4" dy="-4"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-4" dy="4"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"></feBlend></filter></defs>
                </svg>
              
               
                <div className="intouch-line"></div>
                
                <div className="intouch-resume">
                    <p>Check out a brief summary of my <Link to="/resume" style={{color: "#222d3e", textDecorationColor:"#ebeff0"}}>resume.
                    </Link></p>
                    <p>Download the PDF version as well.</p>
                   

                </div>
           </div>
        </div>
      </>
    )
}

export default Main;