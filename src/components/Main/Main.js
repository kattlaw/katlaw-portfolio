import './main.css';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Main = () => {
  
    const titleTl = gsap.timeline();
    const topLine = useRef(null);
    const bottomLine = useRef(null);

    useEffect(() => {
        
        const ctx = gsap.context(() => {
            titleTl.from(topLine.current, {
                opacity: 0,
                x: "1000%",
                ease: "sine.inOut",
                duration: 1, 
            });
            titleTl.from(bottomLine.current, {
                opacity: 0,
                ease: 'sine.inOut',
                duration: 1,
                x:"-1000%",  
            });
            titleTl.from('.title', {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1.5,
                scale: 1.2,
            });

        })  
            return () => ctx.revert()
        
    },[titleTl]);
    const spanTl = gsap.timeline();

    useEffect(() => {

        const ctx = gsap.context(() => {
            
            spanTl.fromTo('.tech-stack span',{
                opacity: 0,
                scale: 1.2,
                duration:1,
                ease:"none",
                repeatRefresh:true // gets a new random x and y value on each repeat
            },
            {
                opacity: 0.2,
                scale: 1,
                stagger: {
                each: 0.3,
                x: "random(-20, 20, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
                y: "random(-40, 10, 3)", 
                from: "random"
                }
            });
           
        })
    
        return () => ctx.revert()
    
    }, [spanTl]);
    
    return (
        <>
        <div className="main">
            <div className="heading-container">
                <h1 className="main-heading">
                    <hr ref={topLine}></hr>
                    Katherine Law
                    <hr ref={bottomLine}></hr>
                </h1>
            </div>
            <div className="title">
                Web Developer
            </div>
            <div className="arrow-down">
                <a href="#intro-section"><HiOutlineArrowDown/></a>
            </div>
        </div>
        <div id="intro-section">
            <div className="welcome-back"></div>
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
                <span>Express</span>
                <span>MongoDB</span>
                <span>REST</span>
                
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
        </div>
      </>
    )
}

export default Main;