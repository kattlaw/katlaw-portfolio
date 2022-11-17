import './about.css';
import snorkel from '../../assets/images/snorkel.jpeg';

const About = () => {
    return (
        <section id="about">
            <h1 className="about-heading">About me<span style={{color: "#78c4c8"}}>.</span></h1>
            <div className="heading-line"></div>
            <h2 className="about-info">I'm a developer with a passion for <span style={{color: "#78c4c8"}}>designing</span> and <span style={{color: "#78c4c8"}}>implementing</span> the UI/UX experience.</h2>
            <div className="info-container">
                <div className="info-one"></div>
                <div className="info-two"></div>
                <div className="info-background">
                    <div className="info-text">
                        <p>
                            My tech journey started from my love for puzzles. I often found myself engrossed in challenging mind-games, and have always wanted to explore my creative-side as well. So, I took a leap of faith and started down a new career path.
                        </p>
                        <p>
                            I attended NuCamp's Fullstack Software Engineering program and graduated in July 2022.  
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