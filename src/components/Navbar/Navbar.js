import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import './navbar.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Navbar = () => {

    //set navbar color on scroll 
    const [navColor, setNavColor] = useState("transparent");
    const [logoColor, setLogoColor] = useState("#78c4c8");
    const [burgerColor, setBurgerColor] = useState("#c33b73");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#78c4c8") : setNavColor("transparent");
        window.scrollY > 10 ? setLogoColor("#222d3e") : setLogoColor("#78c4c8");
        window.scrollY > 10 ? setBurgerColor("#222d3e") : setBurgerColor("#c33b73");
   }

   //scroll listener for navbar color change
   useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    return () => {
            window.removeEventListener("scroll", listenScrollEvent);
    };
    }, []);

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
                duration: .6,
                backgroundColor: "#222d3e",
            }, "<")
            .to(line2.current, {
                rotationZ: "-45deg",
                duration: .6,
                x: 0,
                y: "-0.8rem",
                width: "100%",
                backgroundColor: "#222d3e",
            }, "<")
        })

    return () => ctx.revert()

}, [animation]);

    // gsap animation function to open/close menu on click
    const handleMenuClick = () => {
        animation.reversed() ? animation.play() : animation.reverse()
    }
      
    return (
        <div 
            className="navbar"
            style={{
                backgroundColor: navColor,
                transform: "1s"
            }}  
        >   
        <div className="left-logo"><Link to="/" style={{color: logoColor}}>KL
            <span style={{
                color:"#ebeff0", 
                fontSize: "2rem"
            }}
            >.</span></Link> 
            </div>
            <div className="menu" onClick={handleMenuClick}>
                <div className="line1" ref={line1} style={{backgroundColor: burgerColor}}></div>
                <div className="line2" ref={line2} style={{backgroundColor: burgerColor}}></div>
            </div>
            <div className="menu-page" ref={menuRef} onClick={handleMenuClick}>
                <div className="menu-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Work</Link></li>
                        <li><a href="https://katlawblog.vercel.app">Blog</a></li>
                        <li><button onClick={onButtonClick}>Resume</button></li>
                    </ul>
                </div>
                <div className="menu-socials">
                <a href="http://github.com/kattlaw"><BsGithub /></a>
                <a href="http://www.linkedin.com/in/katlawdev"><BsLinkedin /></a>
                <a href="mailto:klaw@klawdev.com"><FiMail /></a>
            </div>
            </div>
        </div>    
    )
}

export default Navbar;