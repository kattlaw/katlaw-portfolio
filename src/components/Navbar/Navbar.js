import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import './navbar.css';


const Navbar = () => {

    const [navColor, setNavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("#4f88a4") : setNavColor("transparent");
   }
   useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    return () => {
            window.removeEventListener("scroll", listenScrollEvent);
    };
    }, []);


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
            
    })

    return () => ctx.revert()

}, [animation]);

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
            
        >   <div className="left-logo"><a href="#main">KL</a></div>
            <div className="menu" onClick={handleMenuClick}>
                <div className="line1" ref={line1}></div>
                <div className="line2" ref={line2}></div>
            </div>
            <div className="menu-page" ref={menuRef} onClick={handleMenuClick}>
                <div className="menu-links">
                    <ul>
                        <li><a href="main">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>    
    )
}

export default Navbar;