import './resume.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactVivus from 'react-vivus';
import desk from '../../assets/images/desk.svg';


gsap.registerPlugin(ScrollTrigger);


const Resume = () => {

    const resumeTl = gsap.timeline();

    useEffect(() => {
        const containers = gsap.utils.toArray('.container-left');
        const containersRight = gsap.utils.toArray('.container-right');
        const ctx = gsap.context(() => {
            resumeTl.from(".resume-background", {
                ease: "power1.in",
                duration: 1,
                x: "1000",
            })
            resumeTl.from(".resume-heading", {
                opacity: 0,
                ease: "power1.inOut",
                duration: 1,
                x:"-10",
                y:"-10"
            });
            resumeTl.from(".resume-line", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "1000"
            });
            resumeTl.from(".resume-subtitle", {
                opacity: 0,
                ease: "power1",
                duration: 1,
                x: "-100"
            });
            resumeTl.from(".desk-svg img", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "0"
            })
            resumeTl.from(".resume-scroll", {
                opacity: 0,
                ease:"power1",
                scale: 1.2,
                duration: 1,
                y:"-1000"
            });
            resumeTl.from(".resume-info", {
                opacity: 0,
                ease: "power1",
                duration: 1.5,
                x: "-100%",
                scrollTrigger: {
                    trigger: ".resume-heading",
                    start: "top top",
                    end: "+=400",
                    scrub: 2,
                }
            });

            resumeTl.from(".timeline-container", {
                opacity: 0,
                ease: "power1.in",
                duration: 1,
                x: "0",
                scrollTrigger: {
                    trigger: "#resume",
                    start: "top top",
                    end: "+=700",
                    scrub: true,
                    //markers: true,
                   
                }
            });
      
            containers.forEach(container => {
                resumeTl.from(container, {
                    opacity: 0,
                    ease: "sine.out",
                    duration: 1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: container,
                        start: "top center",
                        end: "bottom bottom",
                        scrub: true,
                        //markers: true,
                    }
                })
            });
            containersRight.forEach(container => {
                resumeTl.from(container, {
                    opacity: 0,
                    ease: "sine.out",
                    duration: 1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: container,
                        start: "top center",
                        end: "bottom bottom",
                        scrub: true,
                        //markers: true,
                       
                    }
                })
            });
        })  
            return () => ctx.revert()
        
    },[resumeTl]);


    return (
        <div id="resume">
            <div className="resume-background"></div>
            <h1 className="resume-heading">My resume<span style={{color:"#78c4c8"}}>.</span></h1>
            <div className="resume-line"></div>
            <div className="resume-subtitle">
                <h2><span>A look</span> at some <span>brief highlights</span> of my <span>career</span> and <span>educational</span> milestones.</h2>
            </div>
            <div className="desk-svg">
                <img src={desk} alt="desk with computer and lamp" />
            </div>
            <div className="resume-scroll">Scroll
                <div className="resume-scroll-line"></div>
            </div>
            <div className="resume-info">
                <p>Fast forward from a late Maryland spring in the 80s...</p>
            </div>
            <div className="flower-svg">
            <svg id="flower" xmlns="http://www.w3.org/2000/svg" width="250" height="270"     fill="none" viewBox="0 0 270 580">
                <path stroke="#222d3e" strokeLinecap="round" strokeWidth="10" d="M119.16 122c4.167-38.667 21.5-111.5 63-106.5 26 3.133-29.5 79.5-63 106.5Z" className="petal4"/>
                <path stroke="#78c4c8" strokeLinecap="round" strokeWidth="10" d="M115.66 124.5c-5-40-27.1-121.7-43.5-118.5-31 20.5-2.1 87.7 43.5 118.5Z" className="petal3"/>
                <path stroke="#222d3e" strokeLinecap="round" strokeWidth="10" d="M104.995 126.975c-27.5-31.5-87-80.5-95.5-72-18 27 36.5 76.5 95.5 72Z" className="petal2"/>
                <path stroke="#74c4c8" strokeLinecap="round" strokeWidth="10" d="M112.66 133c-45 10.5-110.316 33-106.5 47.5 10 25 63 22.5 106.5-47.5Z" className="petal1"/>
                <path stroke="#222d3e" strokeLinecap="round" strokeWidth="10" d="M264 574c11.5-38.5-102.5-315-151-447" className="stem"/>
                <path stroke="#74c4c8" strokeLinecap="round" strokeWidth="10" d="M119.16 129c22.5 8 111.165 3 107.5-18.5-7.5-44-93.5-4-107.5 18.5Z" className="petal5"/>
            </svg>
            <ReactVivus
                id="flower"
                option={{
                type: 'oneByOne',
                animTimingFunction: 'EASE',
                duration: 260,
                onReady: console.log
                }}
                callback={console.log}
            />
            </div>
            <div className="timeline-container">
            <div className="timeline">
                <div className="container-left">
                    <div className="content">
                        <h2>2004 - 2009</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Played</span> collegiate <span>softball</span> at Hood College.</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="content">
                        <h2>2008</h2>
                        <h3>Washington, D.C.</h3>
                        <p><span>Interned</span> for (now) Senator Kirsten Gillibrand in the <span>U.S. House Of Representatives.</span></p>
                    </div>
                </div>
                <div className="container-left">
                    <div className="content">
                        <h2>2009</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Graduated with a BA</span> in Political Science and History from <span>Hood College.</span></p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="content">
                        <h2>2011</h2>
                        <h3>Westminister, MD</h3>
                        <p><span>Graduated with an MS</span> in Exercise Science and Physical Education from <span>McDaniel College.</span></p>
                    </div>
                </div> 
                <div className="container-left">
                    <div className="content">
                        <h2>2011 - 2015 </h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Special Education Instructor</span> at Tuscarora HS.</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="content">
                        <h2>2012 - 2015</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Head Varsity Softball Coach</span> for Tuscarora HS.</p>
                    </div>
                </div>
                <div className="container-left">
                    <div className="content">
                        <h2>2013 - 2019</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Office Manager</span> at pet-sitting company, Beyond Barks, LLC.</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="content">
                        <h2>2017 - 2021</h2>
                        <h3>Williamsport, MD</h3>
                        <p><span>Beertender</span> at Cushwa Brewery.</p>
                    </div>
                </div>
                <div className="container-left">
                    <div className="content">
                        <h2>2019 - 2020</h2>
                        <h3>Washington, D.C.</h3>
                        <p><span>Personal Trainer</span> and <span>exercise program prescriber</span> at One to One Fitness.</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="content">
                        <h2>January 2022</h2>
                        <p>Started on a <span>new journey</span> towards a <span>career in tech</span>, and began coding bootcamp classes at <span>NuCamp</span>.</p>
                    </div>
                </div>
                <div className="container-left">
                    <div className="content">
                        <h2>July 2022</h2>
                        <p><span>Graduated </span>from NuCamp's <span>Full Stack Web and Mobile Development</span> bootcamp.</p>
                    </div>
                </div>
                <div className="container-right">
                     <div className="content">
                        <h2>July 2022 - Present</h2>
                        <p>Coding, <span>learning</span>, coding, <span>building</span>, coding, <span>developing</span>. Seeking an opportunity for a full-time role as a Web Developer. </p>
                    </div>
                 </div>    
            </div>
            </div>
        </div>

    )
};

export default Resume;