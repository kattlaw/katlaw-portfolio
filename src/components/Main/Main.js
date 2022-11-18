import './main.css';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Main = () => {

    return (
        <>
        <div className="main">
            <div className="heading-container">
                <h1 className="main-heading">
                    Katherine Law
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
            <div className="intro-heading">
                <h1>Hi, welcome to my page<span style={{color:"#78c4c8", fontSize:"4rem"}}>.</span></h1>
            </div>
            <div className="intro-line"></div>
            <div className="intro-subtitle">
                <h2>I'm a developer with a passion for <span style={{color: "#78c4c8"}}>designing</span> and <span style={{color: "#78c4c8"}}>building</span> things for the web.</h2>
            </div>
            <hr className="zig"></hr>
            <hr className="zag"></hr>
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