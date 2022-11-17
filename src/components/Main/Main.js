import './main.css';
import Navbar
 from '../Navbar/Navbar';
 import { HiOutlineArrowCircleDown } from 'react-icons/hi';
const Main = () => {

    return (
        <div className="main">
            <Navbar />
            <div className="heading-container">
                <h1 className="main-heading">
                    Katherine Law
                </h1>
            </div>
            <div className="title">
                Web Developer
            </div>
            <div className="arrow-down">
                <a href="#">< HiOutlineArrowCircleDown/></a>
            </div>
        </div>
    )
}

export default Main;