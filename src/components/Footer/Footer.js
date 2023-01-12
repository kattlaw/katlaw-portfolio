import './footer.css';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';


const Footer = () => {
    return (
        <div className="footer-container">
            
            <div className="footer-socials">
                <a href="http://github.com/kattlaw"><AiOutlineGithub /></a>
                <a href="http://www.linkedin.com/in/katlawdev"><AiFillLinkedin /></a>
                <a href="mailto: katherine.law2@gmail.com"><AiOutlineMail /></a>
            </div>
            <div className="footer-info">
                <BiCopyright /> 2023 Katherine Law
            </div>
        </div>
    )
}

export default Footer;