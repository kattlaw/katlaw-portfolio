import './main.css';
import { AiOutlineLoading } from 'react-icons/ai';
import { BsLinkedin, BsGithub, BsSlashLg } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaSlash } from 'react-icons/fa';
import { BiDownArrow, BiRightArrow, BiUpArrow} from 'react-icons/bi';
import { SiSpringCreators } from 'react-icons/si';
import { CgShapeZigzag, CgArrowLongRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Main = () => {

    //parallax background shapes on mousemove
    document.addEventListener("mousemove", parallax);

    function parallax(e) {
        this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100 ;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    };

    const onButtonClick = () => {
        // method to get PDF file
        fetch('KLResume.pdf').then(response => {
            response.blob().then(blob => {
                // new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'KLresume.pdf';
                alink.click();
            })
        })
    }

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
                scale: 1.8,
            })
            titleTl.from('.title', {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1,  
            });
            titleTl.from('.pdf-button', {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1, 
            });
            titleTl.from('.page-links a', {
                opacity: 0,
                stagger: 0.3,
                ease:'power1.in',
                y: 0,
            })
            titleTl.from(mouse.current, {
                opacity: 0,
                ease: "sine.inOut",
                duration: 1,
                scale: 1.2,
                y: -1000,
            })
        })  
            return () => ctx.revert()

    },[titleTl]);

    const spanTl = gsap.timeline(({
        scrollTrigger: {
            id: "main",
            start: "=+100",
            end: "bottom bottom",
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
                y:"-300"
            });
            spanTl.fromTo('.tech-stack span', {
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
                each: 0.1,
                x: "random(-20, 20, 5)", //chooses a random number between -20 and 20 for each target, rounding to the closest 5
                y: "random(-20, 10, 3)", 
                from: "random"
                }
            });
        })
    
        return () => ctx.revert()
    
    }, [spanTl]);

  
    const secondTl = gsap.timeline(({
        scrollTrigger: {
           trigger: ".intro-scroll-line",
           start: "center",
        }
    }));

    useEffect(() => {

        const ctx = gsap.context(() => {

            secondTl.from(".intro-background", {
                ease: "power1.in",
                duration: 1,
                x: "1200",
            });
            secondTl.from(".intro-projects", {
                opacity: 0,
                ease: "power1.in",
                duration: 1.2,
                x: "-1000",
            });
            secondTl.from(".intouch", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100",
            });
            secondTl.from(".intouch-line", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100",
            });
            secondTl.from(".intouch-resume", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "0",  
            })
        })

        return () => ctx.revert()
    
    }, [secondTl]);


    return (
        <>
        <div id="main">
            <div className="background-layer">
            <div id="halfcircle" className="layer" data-speed="-5"><AiOutlineLoading /></div>
            <div id="zigzag" className="layer" data-speed="5"><CgShapeZigzag /></div>
            <div id="spring1" className="layer" data-speed="-7"><SiSpringCreators /></div>
            <div id="right" className="layer" data-speed="4"><BiRightArrow /></div>
            <div id="spring2" className="layer" data-speed="2"><SiSpringCreators /></div>
            <div id="down" className="layer" data-speed="8"><BiDownArrow /></div>
            <div id="up" className="layer" data-speed="3"><BiUpArrow /></div>
            <div id="slash" className="layer" data-speed="9"><BsSlashLg /></div>
            <div id="backslash" className="layer" data-speed="-5"><FaSlash /></div>
            </div>
            <h1 className="main-heading" ref={name}>
                Katherine Law<span style={{color:"#78c4c8", fontSize: "3.2rem"}}>,</span>
            </h1>
            <div className="title">
                Web Developer
            </div>
            <div className="pdf-button">
                <button onClick={onButtonClick}>Resume</button><CgArrowLongRight className="right-arrow"/></div>
            <div className="page-links">
                <Link to="/about">About<span style={{color:"#78c4c8"}}>.</span></Link>
                <Link to="/projects">Work<span style={{color:"#78c4c8"}}>.</span></Link>
                <a href="https://katlawblog.vercel.app">Blog<span style={{color:"#78c4c8"}}>.</span></a>
            </div>
            <div className="title-socials">
                <a href="http://github.com/kattlaw"><BsGithub /></a>
                <a href="http://www.linkedin.com/in/katlawdev"><BsLinkedin /></a>
                <a href="mailto:klaw@klawdev.com"><FiMail /></a>
            </div>
            <div className="mouse-scroll" ref={mouse}>
            <a href="#intro-section"> scroll </a>
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
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>Javascript</span>
                <span>Next.js</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>CSS</span>
                <span>Bootstrap</span>
                <span>React Native</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>React</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>Typescript</span>
                <span>GSAP</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>Git</span>
                <span>Github</span>
                <span>Node.js</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>Tailwind</span>
                <span>Express</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>MongoDB</span>
                <span>REST</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>JSON</span>
                <span>JQuery</span>
                <span>NPM</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>VS Code</span>
                <span>Postman</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>Sanity.io</span>
                <span style={{fontWeight: "bolder", fontSize:"1.5rem", color:"#000"}}>Android Studio</span> 
            </div>
            <div className="intro-scroll">Scroll
                <div className="intro-scroll-line"></div>
            </div>
            <div className="intro-container">
                <div className="intro-background"></div>
                <div className="intro-projects">
                    <p>
                        Attention to detail and creativty are both important to me. I focus on combining programming technologies and designs to produce practical websites and applications. See some of my work <button className="button-work"><Link to="/projects">here.</Link></button>
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
                    Check out a <span className="underlined"><Link to="/resume"> brief summary of my background.</Link><div className="highlight"></div></span>
                <div className="connect-info">
                    Questions, comments, or work opportunities? Get in touch! <span className="underlined" style={{fontWeight:"500"}}><a href="mailto:klaw@klawdev.com"> klaw@klawdev.com</a><div className="highlight"></div></span>
                </div>
                </div>
                </div>
           </div>
        </div>
      </>
    )
}

export default Main;