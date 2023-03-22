import './about.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';
import snorkel from '../../assets/images/snorkel.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const About = () => {

    //gsap animation

    const aboutTl = gsap.timeline();
    const headRef = useRef(null);

    useEffect(() => {
       
        const ctx = gsap.context(() => {
            aboutTl.from(".heading-background", {
                ease: "power1.in",
                duration: 1,
                x: "1000",
            })
            aboutTl.from(".about-heading", {
                opacity: 0,
                ease: "power1.inOut",
                duration: 1,
                x:"-10",
                y:"-10"
            });
            aboutTl.from(".heading-line", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "1000"
            });
            aboutTl.from(".about-info", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100"
            });
            aboutTl.from(".info-one", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "-1000"
            });
            aboutTl.from(".info-two", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "-1000"
            });
            aboutTl.from(".scroll-down", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                y:"-100",
            })

        })  
            return () => ctx.revert()
        
    },[aboutTl]);

    const mainTl = gsap.timeline(({
        scrollTrigger: {
            trigger: headRef.current,
            start: "15% top",
            end: "bottom bottom",
            //markers: true,
            toggleActions: "play none none none",
        }
       
    }));

    useEffect(() => {
        const ctx = gsap.context(() => {
            mainTl.from(".info-text", {
                opacity: 0,
                ease: "power1.in",
                delay: 1,
                duration: 1,
            });
            mainTl.from(".snorkel", {
                opacity: 0,
                ease:"power1.in",
                duration:.5,
                delay: .5
            });
            mainTl.from(".more-info-line", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "400",
                delay: .5
            });
            mainTl.from(".more-info p", {
                opacity: 0,
                duration: .5,
                ease: "power1.in",
                x: "0",
                delay: .5
            })
        })
            return () => ctx.revert()
    }, [mainTl]);

    return (
        <div id="about">
            <div className="heading-background" ref={headRef}></div>
                <h1 className="about-heading">About me<span style={{color: "#78c4c8"}}>.</span></h1>
            <div className="heading-line"></div>
            <div className="about-info">Just a girl who is <span style={{color: "#78c4c8"}}> pursing a career </span> in tech while having fun<span style={{color: "#78c4c8"}}> writing code</span>.</div>
            <div className="info-container">
                <div className="info-one"></div>
                <div className="info-two"></div>
                <div className="scroll-down">Scroll
                    <div className="scroll-line"></div>
                </div>
                <div className="info-background">
                    <div className="info-text">
                        <p>
                            My tech journey started from my love for all kinds of puzzles. I often found myself engrossed in challenging mind-games. On top of that, I have always wanted to explore my creative-side as well. So, I took a leap of faith and started down a new career path.
                        </p>
                        <p>
                            I attended NuCamp Full Stack Web and Mobile Development bootcamp and graduated in July 2022. I am inspired by both the creative and analytical sides of programming, and have set focus on using the foundations I have built to further hone my skills.
                        </p>
                        <p>
                            Needless to say, this puzzle-lover has found web development to be a perfect fit.
                        </p>
                        <p style={{fontSize:"1rem"}}>
                            Feel free to check out more about my background!
                        </p>
                        <div className="timeline-button">
                        <Link to="/resume"><button>Let's go!</button><CgArrowLongRight className="timeline-arrow"/></Link>
                        </div>
                    </div>
                    
                </div>
                <div className="snorkel">
                    <img src={snorkel} alt="Katherine snorkeling in USVI" />
                </div>
                <div className="more-info">
                    <div className="more-info-line"></div>
                    <p>
                        Outside of coding, I love to travel and explore the beautiful waters of the Caribbean, namely my favorite spot, St. John, USVI.
                    </p>
                    <p>
                        I also enjoy hanging out with my three long-haired dachshunds. 
                    </p>  
                </div>
           </div>
        </div>
    )
}

export default About;