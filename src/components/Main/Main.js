import './main.css';
import { BsArrowDownCircle } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  
    const titleTl = gsap.timeline();
    const topLine = useRef(null);
    const bottomLine = useRef(null);
    const arrow = useRef(null);

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
                duration: 1,
                scale: 1.2,
            });
            titleTl.from(arrow.current, {
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
            trigger: '.main',
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
                x: "random(-20, 20, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
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
            <div className="section">
                <a href="#intro-section"><span></span></a>
            </div>
            <div className="section-arrow">
            <a href="#intro-section"><IoIosArrowDown/></a>
            </div>
            <div className="arrow-down">
                <a href="#intro-section" ref={arrow}><BsArrowDownCircle/></a>
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
        </div>
      </>
    )
}

export default Main;