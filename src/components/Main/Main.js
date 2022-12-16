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
            id: "main",
            start: "center bottom",
            end: "bottom bottom",
         
            //markers: true
          
            //toggleActions: "play pause resume reset",
        }
    }));
   
    useEffect(() => {

        const ctx = gsap.context(() => {

            spanTl.from(".intro-heading", {
                opacity: 0,
                ease: "power1",
                //duration: 1,
                x: "-100"
            });
            spanTl.from(".intro-line", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                //delay: 1,
                x: "-100"
            });
            spanTl.from(".intro-subtitle", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                //delay: 1,
                x: "0"
            });
            spanTl.from(".intro-scroll", {
                opacity: 0,
                ease:"power1",
                scale: 1.2,
                duration: 1,
               // delay: 2,
                y:"-300"
            });
            spanTl.fromTo('.tech-stack span', {
                opacity: 0,
                scale: 1.2,
                duration:1,
               // delay: 1,
                ease:"none",
                repeatRefresh:true // gets a new random x and y value on each repeat
            },
            {
                opacity: 0.2,
                scale: 1,
                stagger: {
                each: 0.1,
                x: "random(-20, 20, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5
                y: "random(-20, 10, 3)", 
                from: "random"
                }
            });
            spanTl.from(".intro-background", {
                ease: "power1.in",
                duration: 1.2,
                delay: 1,
                x: "1000",
                scrollTrigger: {
                    toggleActions: "play none none none",
                    end: "bottom bottom"
                 
                }
                //delay: 1
            });
            spanTl.from(".intro-projects", {
                opacity: 0,
                ease: "power1.in",
                duration: 1.2,
                delay: 1,
                x: "-1000",
                scrollTrigger: {
                   toggleActions: "play none none none",
                   end: "bottom bottom"
                }
                //delay: 1
            });
            spanTl.from(".intouch", {
                opacity: 0,
                ease: "power1",
                delay: 2,
                duration: 1.5,
                x: "-100",
                scrollTrigger: {
                    toggleActions: "play none none none",
                    end: "bottom bottom"
                }
            });
            spanTl.from(".intouch-line", {
                opacity: 0,
                ease: "power1",
                duration: 1.5,
                delay: 2,
                x: "-100",
                scrollTrigger: {
                    toggleActions: "play none none none",
                    end: "bottom bottom"
                }
            });
            spanTl.from(".intouch-resume", {
                opacity: 0,
                ease: "power1",
                duration: 1.5,
                delay: 3,
                x: "0",
                scrollTrigger: {
                    toggleActions: "play none none none",
                    end: "bottom bottom",
                }
            })
          
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
                        Attention to detail and creativty are both important to me. I focus on combining programming technologies and designs to produce appealing user-friendly interfaces for practical web applications. See some of my work <Link to="/projects" style={{color: "#222d3e", textDecorationColor:"#78c4c8"}}>here.</Link>
                    </p>
                </div>
           </div>
           <div className="bottom-container">
                <div className="intouch">
                    <h1>Let's Connect<span style={{color: "#222d3e"}}>.</span></h1>
                </div>
                <div className="intouch-line"></div>
                <div className="intouch-wrapper">
                <div className="intouch-resume">
                    Check out a <span className="underlined"><Link to="/resume"> brief summary of my resume.</Link><div className="highlight"></div></span>
                <div className="connect-info">
                    Questions, comments, or work opportunities? <span className="underlined"><a href="mailto:katherine.law2@gmail.com"> Feel free to send me a note!</a><div className="highlight"></div></span>
                
                </div>
                <div className="connect-info-two">
                       
                I am available for<span className="underlined"><a href="mailto:katherine.law2@gmail.com"> freelance projects and full-time employment.</a><div className="highlight"></div></span>
                </div>
                </div>
                </div>
           </div>
        </div>
      </>
    )
}

export default Main;