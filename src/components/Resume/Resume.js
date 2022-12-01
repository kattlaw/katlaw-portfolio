import './resume.css';
import { BsEmojiFrown, BsEmojiSmile } from 'react-icons/bs';

const Resume = () => {
    return (
        <div id="resume">
            <div className="resume-background"></div>
            <h1 className="resume-heading">My resume<span style={{color:"#78c4c8"}}>.</span></h1>
            <div className="resume-line"></div>
            <div className="resume-subtitle">
                <h2>Just <span>a look</span> at some <span>brief highlights</span> of my <span>education</span> and <span>career</span> milestones.</h2>
            </div>
            <div className="timeline">
                <div className="container-left">
                     <div className="content">
                        <h2>July 2022 - Present</h2>
                        <p>Coding, <span>learning</span>, coding, <span>building</span>, coding, <span>developing</span>. </p>
                    </div>
                 </div>
                <div className="container-right">
                    <div className="content">
                        <h2>July 2022</h2>
                        <h3 style={{fontSize:"22px"}}><BsEmojiSmile /> <BsEmojiSmile /></h3>
                        <p><span>Graduated </span>from NuCamp's <span>Full Stack Web and Mobile Development</span> bootcamp.</p>
                    </div>
                </div>
                <div className="container-left">
                    <div className="content">
                        <h2>January 2022</h2>
                        <h3 style={{fontSize:"22px"}}><BsEmojiSmile /></h3>
                        <p>Started on a <span>new journey</span> towards a <span>career in tech</span>, and began coding bootcamp classes at <span>NuCamp</span>.</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="content">
                        <h2>2021</h2>
                        <h3 style={{fontSize:"22px"}}><BsEmojiFrown /> <BsEmojiFrown /></h3>
                        <p>Believe it or not, <span>2021 was an even tougher year</span> for me.</p>
                        <p>But after <span>some time</span>, and <span>self-care</span>, I <span>began a new journey</span>...</p>
                    </div>
                </div>
                <div className="container-left">
                    <div className="content">
                        <h2>2020</h2>
                        <h3 style={{fontSize: "22px"}}><BsEmojiFrown/></h3>
                        <p>Laid off due to the Pandemic.</p>
                    </div>
                </div>
                <div className="container-right">
                    <div className="content">
                        <h2>2019 - 2020</h2>
                        <h3>Washington, D.C.</h3>
                        <p><span>Personal Trainer</span> and <span>exercise prescriptionist</span> at One to One Fitness.</p>
                    </div>
                </div>
                <div className="container-left">
                    <div className="content">
                        <h2>2019</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Earned</span> a prestigious <span>certification from the National Strength and Conditioning Association</span> as a Certified Strength and Conditioning Coach (CSCS).</p>
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
                        <h2>2013 - 2019</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Office Manager</span> at pet-sitting company, Beyond Barks, LLC.</p>
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
                        <h2>2011 - 2015 </h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Special Education Instructor</span> at Tuscarora HS.</p>
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
                        <h2>2009</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Graduated with a BA</span> in Political Science and History from <span>Hood College.</span></p>
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
                        <h2>2004 - 2009</h2>
                        <h3>Frederick, MD</h3>
                        <p><span>Played</span> collegiate <span>softball</span> at Hood College.</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Resume;