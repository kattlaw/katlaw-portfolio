import './about.css';
import { useEffect } from 'react';
import snorkel from '../../assets/images/snorkel.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    //gsap animation
    const mainTl = gsap.timeline(({
        scrollTrigger: {
            trigger: '#about',
            start: "15% top",
            end: "bottom bottom",
            markers: true,
            scrub: 1,
            //toggleActions: "play pause resume reset",
        }
    }));

    const aboutTl = gsap.timeline();
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            mainTl.from(".info-text", {
                opacity: 0,
                ease: "power1",
                duration: 2,
            });
            mainTl.from(".snorkel", {
                opacity: 0,
                ease:"power1.in",
                duration:1,
                delay: 2
            });
            mainTl.from(".more-info-line", {
                opacity: 0,
                duration: 2,
                ease: "power1.in",
                x: "400",
                delay: 1
            });
            mainTl.from(".more-info p", {
                opacity: 0,
                duration: 2,
                ease: "power1.in",
                x: "0",
                delay: 1
            })
        })
            return () => ctx.revert()
    }, [mainTl]);

    return (
        <section id="about">
            <div className="heading-background"></div>
            <h1 className="about-heading">About me<span style={{color: "#78c4c8"}}>.</span></h1>
            <div className="heading-line"></div>
            <h2 className="about-info">Just a girl who is <span style={{color: "#78c4c8"}}>pursing a career </span> in tech while having fun<span style={{color: "#78c4c8"}}> writing code</span>.</h2>
            <div className="info-container">
                <div className="info-one"></div>
                <div className="info-two"></div>
                <div className="info-background">
                    <div className="info-text">
                        <p>
                            My tech journey started from my love for puzzles. I often found myself engrossed in challenging mind-games, and have always wanted to explore my creative-side as well. So, I took a leap of faith and started down a new career path.
                        </p>
                        <p>
                            I attended NuCamp's Full Stack Web and Mobile Development program and graduated in July 2022.
                        </p>
                        <p>
                            Needless to say, this puzzle-lover has found web design to be a perfect fit, and I am beyond thrilled to continue with my journey.
                        </p>
                    </div>
                </div>
                <div className="scroll-down">Scroll
                    <div className="scroll-line"></div>
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
        </section>
    )
}

export default About;