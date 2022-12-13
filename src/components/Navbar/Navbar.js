import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import './navbar.css';


const Navbar = () => {

    //set navbar color on scroll 
    const [navColor, setNavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#78c4c8") : setNavColor("transparent");
   }

   //scroll listener for navbar color change
   useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    return () => {
            window.removeEventListener("scroll", listenScrollEvent);
    };
    }, []);

    //gsap animation to open/close side menu bar
    const animation = gsap.timeline({ paused: true, reversed: true })
    const line1 = useRef(null);
    const line2 = useRef(null);
    const menuRef = useRef(null);


useEffect(() => {

    const ctx = gsap.context(() => {
  
        animation
            .from(menuRef.current, {
                x: "400%",
                width: "30%"
            })
            .to(line1.current, {
                rotationZ: "45deg", 
                duration: .6
            }, "<")
            .to(line2.current, {
                rotationZ: "-45deg",
                duration: .6,
                x: 0,
                y: "-0.8rem",
                width: "100%"
            }, "<")
           /* .from(".menu-links li", {
                duration: 0.5,
                delay: 0.3,
                opacity: 0,
                stagger: 0.3,
                ease: "power1.in",
                y:0
            }, [])   */    
        })

    return () => ctx.revert()

}, [animation]);

    // gsap animation function to open/close menu on click
    const handleMenuClick = () => {
        animation.reversed() ? animation.play() : animation.reverse()
      }
      /*const handleNavLinkClick = () => {
        animation.reverse()
      }*/
      

    return (
        <div 
            className="navbar"
            style={{
                backgroundColor: navColor,
                transform: "1s"
            }}
            
        >   <div className="left-logo"><Link to="/">KL<span style={{color:"#ebdfd8", fontSize: "2rem"}}>.</span></Link> 
                <span className="right-text">Menu</span>
            </div>
            <div className="menu" onClick={handleMenuClick}>
                <div className="line1" ref={line1}></div>
                <div className="line2" ref={line2}></div>
            </div>
            <div className="menu-page" ref={menuRef} onClick={handleMenuClick}>
                <div className="menu-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Work</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default Navbar;