import './about.css';
import snorkel from '../../assets/images/snorkel.jpeg';

const About = () => {
    return (
        <section id="about">
            <div className="info-container">
                <div className="info-background">
                    <div className="info-text">
                        <p>
                            Hello! My name is Katherine. Thanks for checking out my page! I am a recent bootcamp graduate looking for a full time role as a web developer.
                        </p>
                        <p>
                            My tech journey started from my love for puzzles. I often found myself engrossed in challenging mind-games, and have always wanted to explore my creative-side as well. So, I took a leap of faith and started down a new career path.
                        </p>
                        <p>
                            I attended NuCamp's Fullstack Software Engineering program and graduated in July 2022.  
                        </p>
                        <p>
                            Spending the past year coding has been expceptionally exciting for me. This puzzle-lover has found this field to be a perfect fit, and I am beyond thrilled to continue with my journey.
                        </p>
                        
                    </div>
                </div>
                <div className="snorkel">
                    <img src={snorkel} alt="Katherine snorkeling in USVI" />
                </div>
           </div>
           
        </section>
    )
}

export default About;